import pg from 'pg';
import 'dotenv/config';
import pkg from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const { PrismaClient } = pkg;
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const noticias = [
    // Notícia 1
    {
        titulo: 'Brasil ainda tem 8,4 milhões de pessoas que não sabem ler e escrever',
        resumo: 'Apesar da redução da taxa de analfabetismo no Brasil, 8,4 milhões de pessoas com 15 anos ou mais ainda não sabem ler e escrever. Os dados foram divulgados pelo IBGE em junho de 2026 e mostram que o analfabetismo continua sendo um problema social no país.',
        conteudo: 'De acordo com dados divulgados pelo Instituto Brasileiro de Geografia e Estatística (IBGE), o Brasil tinha 8,4 milhões de pessoas analfabetas em 2025, o equivalente a 4,9% da população com 15 anos ou mais. Apesar de representar a menor taxa desde o início da série histórica, em 2016, o número ainda chama a atenção.\n\nA pesquisa também revelou que a maior parte das pessoas que não sabem ler e escrever tem 60 anos ou mais, representando 58% do total de analfabetos. A região Nordeste concentra 4,8 milhões dessas pessoas.\n\nOutro dado preocupante é a desigualdade entre grupos da população. Entre pessoas pretas ou pardas com 60 anos ou mais, a taxa de analfabetismo chega a 20,6%, enquanto entre pessoas brancas da mesma faixa etária é de 7,3%.\n\nO analfabetismo dificulta atividades cotidianas, como ler documentos, interpretar informações, escrever mensagens e compreender notícias. Por isso, o acesso à alfabetização e à educação é fundamental para garantir melhores oportunidades e participação na sociedade.\n\nFonte: IBGE, PNAD Contínua Educação 2025.\nFoto: Geovana Albuquerque/Agência Brasília (CC BY 2.0).',
        dataPublicacao: new Date('2026-06-19'),
        urlImagem: '/noticias/analfabetismo-ibge.webp',
        urlFonte: 'https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2012-agencia-de-noticias/noticias/47221-analfabetismo-fica-abaixo-de-5-em-2025-mas-8-4-milhoes-ainda-nao-sabem-ler-e-escrever.html',
    },
    // Notícia 2
    {
        titulo: 'Tema da redação do ENEM 2026 é a valorização do SUS',
        resumo: 'O tema da redação do ENEM 2026 foi "A valorização do Sistema Único de Saúde (SUS) como direito universal". O assunto foi divulgado no dia da prova, 8 de novembro, e pediu um texto dissertativo-argumentativo de até 30 linhas.',
        conteudo: 'O tema da redação do Exame Nacional do Ensino Médio (ENEM) de 2026 foi "A valorização do Sistema Único de Saúde (SUS) como direito universal". O assunto foi divulgado pelo Ministério da Educação no próprio dia da prova, 8 de novembro.\n\nComo nas edições anteriores, os participantes tiveram que produzir um texto dissertativo-argumentativo de até 30 linhas, apresentando uma proposta de intervenção para o problema discutido.\n\nSegundo professores de redação, o tema rompe com a tendência dos últimos três anos, em que o exame abordou recortes voltados a grupos específicos da sociedade: o envelhecimento, a herança africana e o trabalho de cuidado.\n\nPara quem vai prestar vestibulares, o tema reforça a importância de acompanhar assuntos ligados à saúde pública, à cidadania e aos direitos garantidos pela Constituição.\n\nFonte: Inep e Agência Gov.\nFoto: Unsplash.',
        dataPublicacao: new Date('2026-11-08'),
        urlImagem: '/noticias/enem-redacao.webp',
        urlFonte: 'https://www.gov.br/inep/pt-br/centrais-de-conteudo/noticias/enem/tema-da-redacao-a-valorizacao-do-sistema-unico-de-saude-sus-como-direito-universal',
    },
    // Notícia 3
    {
        titulo: 'Ruy Castro vence o Prêmio Jabuti 2026 pela segunda vez seguida',
        resumo: 'O escritor Ruy Castro venceu a categoria Livro do Ano do 68º Prêmio Jabuti com "Trincheira tropical: a Segunda Guerra Mundial no Rio". Foi a segunda vez consecutiva que ele conquistou o prêmio principal.',
        conteudo: 'O escritor Ruy Castro venceu a categoria Livro do Ano do 68º Prêmio Jabuti com a obra "Trincheira tropical: a Segunda Guerra Mundial no Rio", publicada pela Companhia das Letras. Foi a segunda vez consecutiva que o autor conquistou o prêmio principal da premiação.\n\nNa categoria Romance, a vencedora foi a escritora Eliana Alves Cruz. A edição também homenageou Lygia Bojunga, escolhida como Personalidade Literária.\n\nA cerimônia de entrega aconteceu em 27 de outubro de 2026, na Sala São Paulo, em São Paulo.\n\nCriado em 1959, o Prêmio Jabuti é um dos mais tradicionais prêmios literários do Brasil e reconhece obras e profissionais do mercado editorial em diversas categorias.\n\nFonte: Folha de Pernambuco.\nFoto: cerimônia do 65º Prêmio Jabuti, em 2023. Sintegrity/Wikimedia Commons (CC BY-SA 4.0).',
        dataPublicacao: new Date('2026-10-27'),
        urlImagem: '/noticias/jabuti-cerimonia.webp',
        urlFonte: 'https://www.folhape.com.br/cultura/ruy-castro-premiojabuti/521164/',
    },
    // Notícia 4
    {
    titulo: 'Agentes de leitura aceleram a alfabetização infantil em Belém',
    resumo: 'Projeto educacional apresenta resultados positivos na evolução da escrita e na fluência de leitura de crianças.',
    conteudo: 'A Prefeitura de Belém desenvolveu um projeto com profissionais especializados para ajudar crianças que apresentam dificuldades na alfabetização. Os agentes trabalham individualmente com os estudantes, utilizando livros, gibis, poemas, receitas e notícias. A iniciativa busca transformar crianças que conseguem ler apenas palavras e frases em leitoras capazes de compreender textos completos.',
    dataPublicacao: new Date('2026-11-06'),
    urlImagem: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200',
    urlFonte: 'https://agencia.belem.pa.gov.br/agentes-de-leitura-aceleram-a-alfabetizacao-infantil-em-belem/'
  },
  {
     // Notícia 5
    titulo: 'A disputa pela atenção e a queda da leitura de livros no Brasil',
    resumo: 'Pesquisa revela que os brasileiros estão lendo menos livros, apesar de permanecerem conectados durante muitas horas.',
    conteudo: 'Um estudo publicado pelo Instituto de Pesquisa Econômica Aplicada (Ipea) aponta uma situação preocupante para a leitura no Brasil. Em 2024, os não leitores representavam 53% da população com cinco anos ou mais. O número de leitores caiu de 104,7 milhões em 2015 para 93,4 milhões em 2024. O estudo discute como as redes sociais, os vídeos curtos e o uso constante dos celulares disputam a atenção que poderia ser dedicada aos livros.',
    dataPublicacao: new Date('2026-11-09'),
    urlImagem: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200',
    urlFonte: 'https://www.ipea.gov.br/cts/pt/central-de-conteudo/artigos/artigos/559-a-disputa-pela-atencao-e-a-queda-da-leitura-de-livros-no-brasil'
  },
  {
     // Notícia 6
    titulo: 'Brasil tem 8,4 milhões de pessoas que não sabem ler e escrever',
    resumo: 'Mesmo com avanços na educação, milhões de brasileiros ainda enfrentam o analfabetismo.',
    conteudo: 'Dados divulgados pelo IBGE mostram que o Brasil ainda possui 8,4 milhões de pessoas que não sabem ler e escrever. A maioria está na faixa etária de 60 anos ou mais. O cenário demonstra que o acesso à alfabetização continua sendo um desafio no país.',
    dataPublicacao: new Date('2026-06-19'),
    urlImagem: '',
    urlFonte: 'https://agenciabrasil.ebc.com.br/educacao/noticia/2026-06/ibge-pais-tem-84-milhoes-de-analfabetos-menor-numero-desde-2016'
  },
  {
     // Notícia 7
    titulo: 'Especialista alerta para os desafios da leitura e da escrita na educação brasileira',
    resumo: 'Professora da Unesp analisa a diminuição do hábito de leitura e os desafios enfrentados pelos educadores.',
    conteudo: 'Em entrevista publicada pelo Jornal da Unesp, a pesquisadora Maria Mortatti discutiu os desafios de ensinar crianças e jovens a ler e escrever. A especialista destacou a queda no número de leitores no Brasil e a importância de aproximar os estudantes da literatura. A reportagem também aborda a necessidade de melhorar a formação dos professores e incentivar a leitura para além das atividades obrigatórias da escola.',
    dataPublicacao: new Date('2026-11-11'),
    urlImagem: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200',
    urlFonte: 'https://jornal.unesp.br/2026/11/11/maria-mortatti-discute-os-desafios-de-ensinar-a-ler-e-escrever-no-brasil/'
  },
  {
     // Notícia 8
    titulo: 'Projeto leva incentivo à leitura para estações de metrô em São Paulo',
    resumo: 'Parceria entre instituições promove atividades gratuitas de leitura e distribuição de gibis em estações de transporte público.',
    conteudo: 'O Instituto Mauricio de Sousa e o Instituto Motiva realizaram uma ação para aproximar crianças e famílias do universo dos livros. A iniciativa utiliza personagens conhecidos, como os da Turma da Mônica, para despertar o interesse pela leitura. O projeto prevê mais de 140 atividades gratuitas e a distribuição de aproximadamente 10 mil exemplares de histórias em quadrinhos.',
    dataPublicacao: new Date('2026-11-12'),
    urlImagem: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200',
    urlFonte: 'https://www.motiva.com.br/noticias/acao-incentivo-leitura-estacao-vila-das-belezas/'
  },
  {
     // Notícia 9
    titulo: 'Feira de Santana prepara 15 mil estudantes com aulas de Português',
    resumo: 'Estudantes participam de atividades de revisão de Português e Matemática antes da avaliação SABE 2026.',
    conteudo: 'A Prefeitura de Feira de Santana intensificou a preparação dos estudantes da rede municipal para o Sistema de Avaliação Baiano da Educação. As atividades incluíram aulas de revisão de Língua Portuguesa e Matemática, com participação presencial e transmissões pela internet. A expectativa era alcançar aproximadamente 15 mil estudantes. A iniciativa busca reforçar os conhecimentos escolares e melhorar o desempenho dos alunos.',
    dataPublicacao: new Date('2026-11-12'),
    urlImagem: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200',
    urlFonte: 'https://jornalgrandebahia.com.br/2026/11/sabe-2026-governo-ronaldo-prepara-15-mil-estudantes-de-feira-de-santana-com-auloes-de-portugues-e-matematica-antes-da-avaliacao-estadual/'
  },
  {
     // Notícia 10
     titulo: 'Alunos migrantes sofrem preconceito por causa da maneira como falam',
    resumo: 'Estudantes podem enfrentar discriminação por misturarem o português com outros idiomas.',
    conteudo: 'Uma pesquisa da USP discutiu o preconceito linguístico enfrentado por estudantes migrantes nas escolas. Algumas crianças e adolescentes misturam o português com outros idiomas, como o espanhol, e acabam sendo julgados pela maneira como se comunicam. O caso destaca a importância de respeitar a diversidade linguística.',
    dataPublicacao: new Date('2025-11-26'),
    urlImagem: '',
    urlFonte: 'https://jornal.usp.br/diversidade/como-algumas-escolas-mantem-preconceitos-linguisticos-contra-alunos-migrantes/'
  },
  {
     // Notícia 11
    titulo: 'Literatura indígena e afro-brasileira ganha espaço em festival literário',
    resumo: 'Escritores discutem a importância de apresentar histórias e culturas indígenas e afro-brasileiras aos leitores.',
    conteudo: 'A Festa Literária da Morada do Sol, em Araraquara, anunciou uma mesa dedicada à literatura infantil indígena e afro-brasileira. O encontro reúne escritores como Daniel Munduruku e Luana Antunes para discutir a importância das narrativas na valorização cultural. A iniciativa destaca como a literatura pode preservar memórias, apresentar diferentes realidades e combater a invisibilidade de determinados grupos na produção literária.',
    dataPublicacao: new Date('2026-11-13'),
    urlImagem: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200',
    urlFonte: 'https://araraquaraagora.com/noticia/58047/flisol-2026-literatura-indigena-afro-brasileira-araraquara'
  },
  {
     // Notícia 12
    titulo: 'Prova de Linguagens do Enem 2026 apresenta literatura e temas atuais',
    resumo: 'Questões da prova de Linguagens exigiram conhecimentos de literatura brasileira e compreensão de diferentes textos.',
    conteudo: 'A prova de Linguagens do Enem 2026 apresentou questões envolvendo obras literárias, temas sociais e tecnologias. Entre os assuntos estavam a obra Menino de Engenho, de José Lins do Rego, o Estatuto da Criança e do Adolescente no ambiente digital e os impactos da inteligência artificial. A avaliação reforçou a importância da interpretação textual e da capacidade de compreender diferentes formas de comunicação.',
    dataPublicacao: new Date('2026-11-08'),
    urlImagem: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200',
    urlFonte: 'https://www.cnnbrasil.com.br/educacao/enem-2026-prova-de-linguagens-tem-classicos-literarios-ia-e-temas-sociais/'
  },
  {
     // Notícia 13
    titulo: 'Estudo aponta aumento no número de estudantes que leem livros',
    resumo: 'Pesquisa realizada em escolas brasileiras identificou avanços no hábito de leitura entre estudantes.',
    conteudo: 'Um estudo realizado em 264 escolas brasileiras identificou mudanças positivas nos hábitos de leitura dos estudantes entre 2022 e 2026. A pesquisa apontou aumento na quantidade de alunos que concluíram livros espontaneamente e passaram a demonstrar interesse por obras mais complexas. Também foram observados avanços no tempo dedicado à leitura. O resultado mostra a importância dos projetos escolares e do incentivo à literatura na formação de novos leitores.',
    dataPublicacao: new Date('2026-10-16'),
    urlImagem: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200',
    urlFonte: 'https://www.cnnbrasil.com.br/educacao/numero-de-estudantes-que-nao-tinham-lido-nenhum-livro-caiu-25-em-2026/'
  },
  {
     // Notícia 14
    titulo: 'Bienal do Livro de São Paulo registra público recorde',
    resumo: 'Evento literário reúne centenas de milhares de pessoas e demonstra a força do mercado editorial brasileiro.',
    conteudo: 'A 28ª Bienal Internacional do Livro de São Paulo encerrou sua edição de 2026 com aproximadamente 760 mil visitantes. O evento reuniu leitores, escritores, editoras e profissionais do setor literário. A programação contou com lançamentos, encontros com autores e atividades culturais. O resultado chama atenção porque acontece em um período em que pesquisas apontam dificuldades para manter o hábito de leitura no Brasil.',
    dataPublicacao: new Date('2026-09-15'),
    urlImagem: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200',
    urlFonte: 'https://www.al.sp.gov.br/noticia/?id=515047'
  },
  {
     // Notícia 15
    titulo: 'Escritores destacam a importância dos professores na formação de leitores',
    resumo: 'Encontros realizados durante a Bienal aproximaram escritores e educadores para discutir a formação de leitores.',
    conteudo: 'Durante a 28ª Bienal Internacional do Livro de São Paulo, escritores participaram de encontros com professores da rede municipal de ensino. As atividades destacaram a importância dos educadores na apresentação de obras literárias e no desenvolvimento do interesse dos estudantes pelos livros. A iniciativa também reforçou o papel das bibliotecas escolares e dos projetos de leitura na educação.',
    dataPublicacao: new Date('2026-09-10'),
    urlImagem: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200',
    urlFonte: 'https://educacao.sme.prefeitura.sp.gov.br/noticias/escritores-destacam-papel-dos-professores-na-formacao-de-leitores/'
  }
];

const videos = [
    // Vídeo 1
    {
        titulo: '',
        descricao: '',
        youtubeId: '',
    },
    // Vídeo 2
    {
        titulo: '',
        descricao: '',
        youtubeId: '',
    },
    // Vídeo 3
    {
        titulo: '',
        descricao: '',
        youtubeId: '',
    },
];

const questoes = [
    // Questão 1
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 2
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 3
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 4
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 5
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 6
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 7
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 8
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 9
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 10
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 11
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 12
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 13
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 14
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 15
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 16
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 17
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 18
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 19
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 20
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 21
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 22
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 23
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 24
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 25
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
];

async function main() {
    console.log('🌱 Resetando tabelas noticia, video e questao...');

    // Remove todos os registros
    await prisma.$executeRaw`TRUNCATE TABLE noticia, video, questao RESTART IDENTITY`;

    console.log('📦 Inserindo novos registros...');

    const preenchidas = noticias.filter((noticia) => noticia.titulo);

    await prisma.noticia.createMany({
        data: preenchidas.map((noticia) => ({ ...noticia, urlFonte: noticia.urlFonte || null })),
    });

    const videosPreenchidos = videos.filter((video) => video.titulo);

    await prisma.video.createMany({ data: videosPreenchidos });

    const questoesPreenchidas = questoes.filter((questao) => questao.enunciado);

    await prisma.questao.createMany({ data: questoesPreenchidas });

    console.log(`✅ Seed concluído! ${preenchidas.length} notícias, ${videosPreenchidos.length} vídeos e ${questoesPreenchidas.length} questões inseridos.`);
}

main()
    .catch((e) => {
        console.error('❌ Erro no seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
