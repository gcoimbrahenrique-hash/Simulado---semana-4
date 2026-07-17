/* =================================================================
   CONFIGURAÇÃO DO SIMULADO  (edite só este arquivo + a lista de alunos)
   Henrique Coimbra · Mentoria · Concursos
   ================================================================= */

export const CONFIG = {
  // Nome do "armazenamento" deste simulado.
  // DICA: ao criar um simulado NOVO, troque este nome (ex.: 'simulado-semana5').
  // Trocar o nome começa uma turma do zero, sem apagar os resultados antigos.
  storeName: 'simulado-semana7',

  // Textos exibidos na prova e no painel:
  PROVA_TITULO:    'Simulado Revisão 2 — Semana 7',
  PROVA_SUBTITULO: 'Técnico Administrativo · Objetiva + Discursiva - 3h',

  // Duração em minutos (90 = 1h30):
  DURACAO_MIN: 180,

  // O aluno vê a própria nota ao terminar?
  MOSTRAR_NOTA_AO_ALUNO: true,
   
  // ---------- PROVA DISCURSIVA ----------
  // Deixe ativa:false para um simulado só de múltipla escolha.
  DISCURSIVA: {
    ativa: true,
    titulo: 'Prova Discursiva',
    // Aparece logo abaixo do título, como orientação geral:
    instrucoes: 'Redija um texto dissertativo. Respeite o limite máximo de 30 linhas — '
      + 'no computador, escreva de forma equivalente (o contador ao lado ajuda). '
      + 'Serão avaliados o domínio do conteúdo (tema e aspectos solicitados), a estrutura e o '
      + 'desenvolvimento do texto e o domínio da modalidade escrita formal da língua portuguesa.',
    // Textos motivadores (cada item vira um bloco citado):
    textos_motivadores: [
      'A Assistência Social é uma política pública; um direito de todo cidadão que dela necessitar. '
      + 'Ela está organizada por meio do Sistema Único de Assistência Social (Suas), presente em todo o Brasil. '
      + 'Seu objetivo é garantir a proteção social aos cidadãos — ou seja, apoio a indivíduos, famílias e à '
      + 'comunidade no enfrentamento de suas dificuldades — por meio de serviços, benefícios, programas e projetos. '
      + 'O Suas organiza as ações em dois tipos de proteção: a Proteção Social Básica, destinada à prevenção de '
      + 'riscos sociais e pessoais a indivíduos e famílias em situação de vulnerabilidade; e a Proteção Social '
      + 'Especial, destinada a famílias e indivíduos que já se encontram em situação de risco e que tiveram seus '
      + 'direitos violados. (Adaptado de: gov.br/mds — "O que é o Suas".)',
      'A assistência social oferta serviços para fortalecer famílias e desenvolver sua autonomia, apoiando-as '
      + 'para que superem eventuais dificuldades e acessem direitos sociais, evitando o rompimento de laços. Além '
      + 'disso, trabalha em parceria com outras políticas públicas e encaminha os cidadãos a outros órgãos quando '
      + 'as situações enfrentadas não podem ser resolvidas apenas pela assistência social, como nos casos que '
      + 'envolvem desemprego, violência, doenças, acesso a educação, saneamento básico e moradia, entre outros. '
      + '(Adaptado de: gov.br/mds — "Serviços e Programas".)',
    ],
    // Comando da questão:
    enunciado: 'QUESTÃO ÚNICA. Com base nos textos apresentados e em seus conhecimentos, redija um texto '
      + 'dissertativo a respeito da centralidade da família e do território na Política Nacional de Assistência '
      + 'Social (PNAS). Ao elaborar o seu texto, aborde, necessariamente, os seguintes aspectos:',
    aspectos: [
      'a matricialidade sociofamiliar, com a família como foco central do planejamento e da oferta dos serviços;',
      'a territorialização, isto é, a organização dos serviços a partir das necessidades dos territórios onde vivem as famílias;',
      'o trabalho social com famílias voltado ao fortalecimento de vínculos e à prevenção de seu rompimento.',
    ],
    max_linhas: 30,           // referência (30 linhas manuscritas)
    max_caracteres: 2800,     // teto do campo de texto (~30 linhas)
  },

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
