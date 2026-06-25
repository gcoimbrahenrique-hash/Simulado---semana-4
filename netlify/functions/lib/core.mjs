/* Lógica central do simulado — separada do Netlify para poder ser testada.
   Recebe um "store" (Netlify Blobs ou stub de teste) com a interface:
     get(key,{type:'json'}) -> objeto | null
     setJSON(key, obj)
     list({prefix}) -> { blobs: [{key}] }
     delete(key)
*/
import { QUESTOES } from './questoes.mjs';
import { CONFIG } from './config.mjs';

const LETRAS = ['A','B','C','D','E','F','G','H'];
const agora = () => Math.floor(Date.now() / 1000);
const keyAluno = (login) => 'aluno:' + login;

// Comparação de senha em tempo (quase) constante.
function senhaConfere(a, b) {
  a = String(a == null ? '' : a);
  b = String(b == null ? '' : b);
  let res = a.length === b.length ? 0 : 1;
  const len = Math.max(a.length, b.length);
  for (let i = 0; i < len; i++) res |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  return res === 0;
}

// Questões sem o gabarito (é isso que vai para o navegador do aluno).
function questoesParaAluno() {
  return QUESTOES.map(q => {
    const item = { id: q.id, n: q.n, tema: q.tema || '', enunciado: q.enunciado, alts: q.alts };
    if (q.texto_ref)  item.texto_ref  = q.texto_ref;
    if (q.texto_base) item.texto_base = q.texto_base;
    return item;
  });
}

export async function handle(body, store) {
  const acao = body && body.acao;

  /* -------- LOGIN -------- */
  if (acao === 'login') {
    const login = String(body.login || '').trim();
    const senha = String(body.senha || '');
    const aluno = CONFIG.ALUNOS[login];
    if (!aluno || !senhaConfere(aluno.senha, senha))
      return { ok: false, erro: 'Login ou senha inválidos.' };

    let rec = await store.get(keyAluno(login), { type: 'json' });
    if (rec && rec.finalizado)
      return { ok: false, ja_realizada: true,
        erro: 'Esta prova já foi enviada por este login e não pode ser refeita.' };

    if (!rec) {
      rec = { login, nome: aluno.nome, inicio: agora(), finalizado: false };
      await store.setJSON(keyAluno(login), rec);
    }
    return {
      ok: true, nome: aluno.nome, login,
      titulo: CONFIG.PROVA_TITULO, subtitulo: CONFIG.PROVA_SUBTITULO,
      duracao_min: CONFIG.DURACAO_MIN, inicio: rec.inicio, agora: agora(),
      questoes: questoesParaAluno(),
    };
  }

  /* -------- ENVIAR -------- */
  if (acao === 'enviar') {
    const login = String(body.login || '').trim();
    const senha = String(body.senha || '');
    const respostas = body.respostas || {};
    const aluno = CONFIG.ALUNOS[login];
    if (!aluno || !senhaConfere(aluno.senha, senha))
      return { ok: false, erro: 'Sessão inválida. Faça login novamente.' };

    let rec = await store.get(keyAluno(login), { type: 'json' });
    if (!rec) return { ok: false, erro: 'Sessão não encontrada. Faça login novamente.' };
    if (rec.finalizado) return { ok: false, ja_realizada: true, erro: 'Esta prova já foi enviada.' };

    let acertos = 0; const detalhe = {};
    for (const q of QUESTOES) {
      const bruto = respostas[q.id];
      const sel = (bruto === undefined || bruto === null || bruto === '') ? -1 : parseInt(bruto, 10);
      const ok = sel === q.correta;
      if (ok) acertos++;
      detalhe[q.id] = { marcada: sel, correta: q.correta, acertou: ok };
    }
    const total = QUESTOES.length;
    rec.finalizado = true; rec.fim = agora();
    rec.acertos = acertos; rec.total = total; rec.detalhe = detalhe;
    await store.setJSON(keyAluno(login), rec);

    const resp = { ok: true, enviado: true, mostrar_nota: CONFIG.MOSTRAR_NOTA_AO_ALUNO };
    if (CONFIG.MOSTRAR_NOTA_AO_ALUNO) {
      resp.acertos = acertos; resp.total = total;
      resp.percentual = total ? Math.round(acertos * 1000 / total) / 10 : 0;
    }
    return resp;
  }

  /* -------- RESULTADOS (professor) -------- */
  if (acao === 'resultados' || acao === 'zerar') {
    const senha = String(body.prof_senha || '');
    if (!senhaConfere(CONFIG.PROF_SENHA, senha))
      return { ok: false, erro: 'Senha do professor incorreta.' };

    if (acao === 'zerar') {
      const { blobs } = await store.list({ prefix: 'aluno:' });
      for (const b of blobs) await store.delete(b.key);
      return { ok: true, zerados: blobs.length };
    }

    const { blobs } = await store.list({ prefix: 'aluno:' });
    const alunos = [];
    for (const b of blobs) {
      const rec = await store.get(b.key, { type: 'json' });
      if (rec) alunos.push(rec);
    }
    const qmeta = QUESTOES.map(q => ({
      id: q.id, n: q.n, tema: q.tema || '',
      correta: q.correta, correta_letra: LETRAS[q.correta] || '?',
      enunciado: q.enunciado, comentario: q.comentario || '',
    }));
    const turma = Object.entries(CONFIG.ALUNOS).map(([login, a]) => ({ login, nome: a.nome }));
    return {
      ok: true, titulo: CONFIG.PROVA_TITULO, subtitulo: CONFIG.PROVA_SUBTITULO,
      duracao_min: CONFIG.DURACAO_MIN, total: QUESTOES.length,
      questoes: qmeta, alunos, turma,
    };
  }

  return { ok: false, erro: 'Ação desconhecida.' };
}
