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
  PROVA_TITULO:    'Simulado Revisão — até a Semana 4',
  PROVA_SUBTITULO: 'SEDES/DF · Técnico Administrativo · 60 questões',

  // Duração em minutos (90 = 1h30):
  DURACAO_MIN: 90,

  // O aluno vê a própria nota ao terminar?
  MOSTRAR_NOTA_AO_ALUNO: true,

  // SENHA DO SEU PAINEL. TROQUE antes de aplicar.
  PROF_SENHA: 'professor-troque-2024',

  // ALUNOS — use o gerador.html para criar esta lista automaticamente.
  // Formato:  'login': { senha: '...', nome: 'Nome do Aluno' },
  ALUNOS: {
    'aluno01': { senha: 'prova123', nome: 'Aluno de Exemplo 01' },
    'aluno02': { senha: 'prova123', nome: 'Aluno de Exemplo 02' },
    'aluno03': { senha: 'prova123', nome: 'Aluno de Exemplo 03' },
  },
};
