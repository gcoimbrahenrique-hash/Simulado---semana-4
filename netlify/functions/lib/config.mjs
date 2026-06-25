/* =================================================================
   CONFIGURAÇÃO DO SIMULADO  (edite só este arquivo + a lista de alunos)
   Henrique Coimbra · Mentoria · Concursos
   ================================================================= */

export const CONFIG = {
  // Nome do "armazenamento" deste simulado.
  // DICA: ao criar um simulado NOVO, troque este nome (ex.: 'simulado-semana5').
  // Trocar o nome começa uma turma do zero, sem apagar os resultados antigos.
  storeName: 'simulado-semana4',

  // Textos exibidos na prova e no painel:
  PROVA_TITULO:    'Simulado Revisão 1 — Semana 4',
  PROVA_SUBTITULO: 'SEDES/DF · Técnico Administrativo · 60 questões',

  // Duração em minutos (90 = 1h30):
  DURACAO_MIN: 90,

  // O aluno vê a própria nota ao terminar?
  MOSTRAR_NOTA_AO_ALUNO: true,

  // SENHA DO SEU PAINEL. TROQUE antes de aplicar.
  PROF_SENHA: 'Teste123@',

  // ALUNOS — use o gerador.html para criar esta lista automaticamente.
  // Formato:  'login': { senha: '...', nome: 'Nome do Aluno' },
    ALUNOS: {
    'gabriel.costa': { senha: 'frtuy8', nome: 'Gabriel Castro da Costa' },
    'gustavo.costa': { senha: 'cpiay7', nome: 'Gustavo Castro da Costa' },
    'jussara.santos': { senha: 'wbrkvv', nome: 'Jussara Tafate Pereira dos Santos' },
    'mylena.nobre': { senha: '7vxzyq', nome: 'Mylena Araujo da Silva Nobre' },
    'davia.rodrigues': { senha: 'zfz6ka', nome: 'Dávia Regina Rodrigues' },
    'matheus.santos': { senha: 'htzzet', nome: 'Matheus Magnus Torres dos Santos' },
    'thiago.nobre': { senha: '6pkeji', nome: 'Thiago Nobre' },
    'elissandra.anjos': { senha: 'epe6s3', nome: 'Elissandra de Souza dos Anjos' },
    'tiago.silva': { senha: 's5mj5a', nome: 'Tiago Guimarães da Silva' },
    'henrique.coimbra': { senha: 'dquuib', nome: 'Henrique Coimbra' },
    'camila': { senha: 'by4h89', nome: 'Camila' },
    'vitor': { senha: 'pxfj6h', nome: 'Vitor' },
  },
};
