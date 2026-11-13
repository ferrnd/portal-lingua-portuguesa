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
        titulo: '10 Curiosidades sobre a Língua Portuguesa',
        descricao: `Neste vídeo, o criador apresenta dez curiosidades sobre a língua portuguesa, abordando as suas características únicas e a sua relevância global. A explicação começa pela origem partilhada com o galego e a complexidade fonética do português, que se destaca pela vasta variedade de vogais, totalizando nove orais e cinco nasais. Ao longo da exposição, são exploradas peculiaridades gramaticais, como o uso do futuro do conjuntivo e a existência do infinitivo pessoal. O autor discute também as variações nos pronomes pessoais e a clara preferência no português europeu por evitar o uso do gerúndio, optando pela estrutura "estar a + infinitivo". Além disso, é detalhada a distinção entre os verbos ser e estar e o emprego do pretérito perfeito composto. O vídeo termina com uma reflexão sobre a dimensão internacional do idioma, que é uma das mais faladas do mundo, contando com mais de 270 milhões de falantes.`,
        youtubeId: 'sNAl1krkVJI',
    },
    // Vídeo 2
    {
        titulo: ' Os 10 erros mais comuns na Língua Portuguesa [Prof. Noslen]',
        descricao: `O vídeo do Professor Noslen apresenta dez erros gramaticais comuns no português para facilitar o uso correto no dia a dia. Ele aborda temas como a regência dos verbos lembrar e assistir, o uso correto de onde e aonde, a aplicação de crase em dias da semana, a diferença entre haja e aja , além de explicar o uso impessoal dos verbos fazer e haver. Por fim, o professor esclarece o emprego do termo o mesmo, a regência de implicar e a distinção entre os pronomes este e esse.`,
        youtubeId: 'tTfkk4-40No',
    },
    // Vídeo 3
    {
        titulo: 'As 10 palavras que quase todo mundo pronuncia errado',
        descricao: `A professora Lara Brenner explica no vídeo como pronunciar corretamente 10 palavras que são frequentemente ditas de forma equivocada no cotidiano. Para garantir a precisão, ela recomenda consultar o Vocabulário Ortográfico da Língua Portuguesa. As correções incluem dizer subsídio com som de 's' em vez de 'z', e usar choramingar no lugar de choromingar. Ela esclarece que o termo correto é asterisco, combatendo o erro comum de adicionar um 'ti' ao final, e que o verbo entreter dá origem a entretida, e não entertida. A professora também ressalta que reivindicar não possui a letra 'n' após o 'i', e que palavras como gratuito, circuito, fortuito e intuito devem ser pronunciadas com o som de 'ui' sem acento. Além disso, ela pontua que inexorável, apesar de ser escrita com 'x', possui som de 'z', destaca a necessidade de manter o som do 'r' em perturbar e supermercado, explica que geminadas é o termo adequado para coisas gêmeas, e encerra orientando que a forma correta é sobrancelha, escrita sem a letra 'm'.`,
        youtubeId: 'AnF6CMvreoI',
    },
    // Vídeo 4
    {
        titulo: 'Como o LATIM evoluiu para o PORTUGUÊS? | História da Língua Portuguesa',
        descricao: `O vídeo explica a formação da língua portuguesa a partir da ocupação romana na Península Ibérica no século III a.C.. Inicialmente, existia o latim clássico, usado em contextos formais e urbanos, e o latim vulgar, falado pelas populações rurais e menos letradas. Foi justamente a partir do latim vulgar, que era mais flexível e realista, que as línguas românicas se desenvolveram após o declínio do Império Romano e as invasões bárbaras no século V. Nesse cenário de mudanças, surgiu o galego-português, dialeto fundamental que deu origem ao português moderno, sendo registrado em obras como as Cantigas de Santa Maria do Rei Afonso X no século XII. O vídeo também aborda os mecanismos linguísticos chamados metaplasmos, ilustrando como palavras latinas se transformaram ao longo do tempo em termos atuais, como pluvia em "chuva" ou memorare em "lembrar", demonstrando que a língua é um organismo vivo em constante evolução.`,
        youtubeId: 'CB0gqy-OcMA',
    },
    // Vídeo 5
    {
        titulo: 'AS 10 PALAVRAS MAIS DIFÍCEIS DO PORTUGUÊS',
        descricao: `Neste vídeo, o professor Pablo Jamilk apresenta uma seleção das 10 palavras mais complexas de se pronunciar na língua portuguesa, destacando termos longos e técnicos. Para facilitar o aprendizado, ele ensina uma técnica eficiente de dividir cada palavra em blocos menores, permitindo que a pronúncia seja feita de forma gradual e correta. Ao longo do conteúdo, ele explora significados e origens de termos fascinantes como o pneumoultramicroscopicossilicovulcanoconiótico, reconhecido como a palavra mais longa do idioma, e a curiosa hipopotomonstrosesquipedaliofobia, que define ironicamente o medo de palavras grandes. O vídeo também aborda termos médicos e jurídicos complexos, como anticonstitucionalissimamente, otorrinolaringologista, cineangiocoronariografia, dacriocistoceletomia, histerossalpingografia, aeropessotermoterápico, coledocoduodenostomia e meningoencefalomielite, reiterando que a paciência na segmentação das sílabas é a chave para dominar a leitura de vocabulários desafiadores.`,
        youtubeId: 'f1yv2vJxZg',
    },
    // Vídeo 6
    {
        titulo: 'Uso da Vírgula! Com Prof. Noslen!',
        descricao: `Neste vídeo, o professor Noslen esclarece que o uso da vírgula não serve para marcar uma pausa para respirar, mas sim para organizar o texto e reproduzir as entonações e intenções da fala de forma gráfica. Ele demonstra como a posição da vírgula pode alterar completamente o sentido de uma frase, criando ou eliminando heróis, vilões e até mudando o valor numérico de expressões. Ao longo da explicação, ele apresenta 11 regras principais para o uso obrigatório da vírgula, que incluem casos como enumerações, vocativos, apostos, adjuntos adverbiais deslocados, elipses verbais e orações coordenadas ou subordinadas. Por fim, o professor destaca quatro situações em que a vírgula nunca deve ser utilizada, como a separação entre sujeito e predicado ou entre verbo e seus complementos, enfatizando que o domínio dessas normas é fundamental para garantir a clareza, a organização e a intenção correta na escrita.`,
        youtubeId: '-uUtlvKifiY',
    },
    // Vídeo 7
    {
        titulo: 'COORDENAÇÃO e SUBORDINAÇÃO: Aula COMPLETA de PERÍODO COMPOSTO ',
        descricao: `Nesta aula, o professor Noslen explica o conceito de período composto na língua portuguesa, que ocorre quando uma estrutura apresenta duas ou mais orações, cada uma contendo um verbo. Ele diferencia as duas formas principais de organizar essas orações: a coordenação e a subordinação. No período composto por coordenação, as orações são sintaticamente independentes, não dependendo uma da outra para que seu sentido seja completo, podendo ser classificadas como assindéticas, quando ligadas apenas por pontuação (como vírgulas), ou sindéticas, quando conectadas por conjunções. Já no período composto por subordinação, existe uma relação de dependência sintática, onde uma oração precisa da outra para que o sentido seja estabelecido. O vídeo finaliza com a resolução de exercícios práticos que ajudam a fixar essas definições e a identificar as estruturas em frases reais.`,
        youtubeId: 'QYP0G1sBOz8',
    },
    // Vídeo 8
    {
        titulo: ' ACENTUAÇÃO: OXÍTONAS, PAROXÍTONAS e PROPAROXÍTONAS || Português do Zero',
        descricao: `Este vídeo explica as regras de acentuação gráfica em português, começando pela identificação da sílaba tônica para classificar as palavras. As proparoxítonas são sempre acentuadas, enquanto as paroxítonas e oxítonas seguem critérios específicos de terminação. O conteúdo aborda ainda os monossílabos tônicos, a mudança ortográfica que retirou acentos de ditongos abertos em paroxítonas e a regra dos hiatos com o uso das letras i e u.`,
        youtubeId: 'vmKggNWVvtU',
    },
    // Vídeo 9
    {
        titulo: 'PALAVRAS IGUAIS, SENTIDO DIFERENTE!',
        descricao: `Neste vídeo, a professora Márcia Macedo apresenta uma aula sobre a riqueza da língua portuguesa, focando em palavras homônimas: termos que possuem a mesma grafia e pronúncia, mas significados distintos dependendo do contexto. Ela demonstra essa variação através de exemplos cotidianos, começando com o termo "manga", que pode se referir à fruta ou à parte de uma peça de vestuário, e "mangueira", que designa tanto a árvore frutífera quanto o utensílio de regar. A explicação prossegue com "canto", explorado como o ato de cantar, um local ou um ângulo, seguido por "cedo", que varia entre um período do dia e o verbo ceder. A professora também aborda "morro" (verbo morrer ou a elevação geográfica), "rio" (cidade, curso d'água ou verbo rir) e "mato" (vegetação ou conjugação do verbo matar). A exploração avança para "marca" (fabricante, sinal, numeral ou verbo), o termo "são" (verbo ser, estado de saúde ou santo), "saia" (vestimenta ou verbo sair), "leve" (verbo levar ou algo sem peso), "banco" (instituição, assento ou elevação no mar) e encerra com "verão" (estação do ano ou futuro do verbo ver). O objetivo central é ilustrar como o vocabulário português é vasto e como o entendimento correto de muitas palavras depende exclusivamente da interpretação contextual.`,
        youtubeId: 'Z9wQLmVCWkw',
    },
    // Vídeo 10
    {
        titulo: 'Método INFALÍVEL pra saber QUANDO usar a CRASE | Professor Noslen',
        descricao: `O vídeo explica o uso da crase, que é a fusão da preposição 'a' com o artigo definido feminino 'a'. O Professor Noslen detalha situações específicas para o seu emprego, começando pelas locuções adverbiais femininas, onde o uso é obrigatório, como em 'à esquerda' ou 'à caneta'. Ele ressalta que não ocorre crase antes de palavras masculinas, como em 'a todos'. Sobre o uso com as palavras 'casa' e 'terra', a crase só é obrigatória se houver um termo que especifique o substantivo. O vídeo também aborda o uso do pronome relativo 'a qual' e pronomes de tratamento como 'dona', 'senhora' e 'senhorita'. Para nomes de cidades, o professor ensina a técnica de substituir o 'vou a' por 'volto da' para identificar se a crase é necessária. Por fim, o conteúdo trata dos casos de crase facultativa, que ocorrem antes de pronomes possessivos femininos, nomes próprios de pessoas e após a palavra 'até'.`,
        youtubeId: 'aS-ZDEQTK5M',
    },
    // Vídeo 11
    {
        titulo: 'COMO AUMENTAR RÁPIDO SEU VOCABULÁRIO com 1 exercício simples (e usar no dia a dia)',
        descricao: `Neste vídeo, Lara Brenner explica que, embora a leitura seja fundamental, ela não garante por si só uma expansão eficaz do vocabulário, sendo necessário transformar o contato passivo com as palavras em um processo ativo e intencional. A autora enfatiza que a motivação correta deve ser a "fome de mundo" — o desejo genuíno de descrever a realidade com mais precisão e clareza — em vez de apenas buscar termos rebuscados para impressionar os outros. Para colocar isso em prática, ela propõe um exercício simples de três etapas: primeiro, ao encontrar uma palavra nova em uma leitura, deve-se recorrer a um dicionário confiável, como o Michaelis, para compreender o significado exato, realizando uma captura de tela. O segundo passo envolve consultar um dicionário de sinônimos para ampliar o repertório e formular uma frase própria com o novo termo, arquivando esses registros em um local organizado, como uma pasta ou grupo no WhatsApp. Por fim, o ponto central do exercício é a aplicação ativa da palavra no cotidiano, na primeira oportunidade disponível; embora o uso possa parecer artificial ou "estranho" no início, a repetição é o que torna o termo uma parte orgânica e natural do vocabulário pessoal do indivíduo. Ao longo do conteúdo, Lara utiliza exemplos literários, como os termos "peralta" e "lúgubre", para ilustrar como a compreensão precisa do contexto é essencial para o domínio lexical.`,
        youtubeId: 'VtMGkOjebxw',
    },
    // Vídeo 12
    {
        titulo: 'A Influência do Árabe no Português',
        descricao: `Este vídeo explora a profunda influência da língua árabe no português, um legado que remonta à presença dos mouros na Península Ibérica entre os séculos VIII e XV . O apresentador explica que essa influência não é apenas histórica, mas está presente no nosso vocabulário quotidiano, manifestando-se frequentemente através do artigo definido árabe "al-", que foi incorporado em muitas palavras, como "algodão", "açúcar" e "almofada". Além de exemplos diretos, o vídeo destaca outras características linguísticas, como a presença frequente de palavras iniciadas por "az-" (ex: "azeite", "azafama") e a substituição de sons latinos por "x" ou "ch" em termos como "enxaqueca" . Ao longo da exposição, é feita uma análise detalhada de diversos grupos de palavras, desde termos científicos e matemáticos até nomes de alimentos e objetos, demonstrando como o árabe contribuiu para enriquecer a língua portuguesa com vocabulário técnico e cultural.`,
        youtubeId: 'AAqc1rBniD0',
    },
    // Vídeo 13
    {
        titulo: 'Qual é o som da letra H?',
        descricao: `Dalla Vecchia explica o funcionamento sonoro da letra H no português. Ela esclarece que, na maioria dos casos, como no início de palavras (ex: homem, herói) ou em interjeições, o H não possui valor fonético ou sonoro, servindo apenas para marcar a etimologia da palavra. No entanto, a especialista aponta exceções importantes, como em termos de origem estrangeira ou nomes próprios, onde a letra pode assumir um som de R, como em handebol ou Haniel. Além disso, o vídeo destaca que o H desempenha um papel fundamental ao compor dígrafos, alterando o som de outras consoantes, como ocorre nas combinações com C, N e L, que resultam nos fonemas específicos de ch, nh e lh. Portanto, conclui-se que afirmar que a letra é inteiramente muda seria uma visão superficial, dada a sua diversidade de funções no sistema da nossa língua .`,
        youtubeId: 'EgSIWzrUeps',
    },
    // Vídeo 14
    {
        titulo: 'Por que o plural de “pão” é “pães” e de “grão” é “grãos”? Professor Noslen',
        descricao: `Neste vídeo, o professor Noslen explica que não existe uma regra gramatical única e universal para formar o plural de substantivos terminados em -ão. Em vez de uma fórmula simples, a variação entre as terminações -ões, -ães e -ãos depende da etimologia e da morfologia da palavra, ou seja, de como elas foram construídas desde o latim até chegarem à língua portuguesa atual. Por isso, o professor enfatiza que o melhor caminho para aprender o plural correto é através da leitura constante e da prática de escrita, que ajudam a fixar a forma visual e correta de cada palavra na memória. Além disso, ele destaca que algumas palavras possuem mais de uma forma aceita para o plural, como é o caso de "anão" (anãos ou anões) e "artesão" (artesãos ou artesões), reforçando que a familiaridade com o vocabulário é fundamental para dominar essas nuances.`,
        youtubeId: 'q-hnLRqG_jk',
    },
    // Vídeo 15
    {
        titulo: '15 palavras que parecem erradas, mas estão certas',
        descricao: `Neste vídeo, a criadora Lara Brenner explora 15 palavras do português que frequentemente causam confusão devido a hábitos populares de fala ou escrita que divergem da norma culta. Ela contextualiza a importância de seguir o registro formal, utilizando exemplos como a polêmica em torno da palavra "recorde", cuja pronúncia correta deve ser paroxítona, e a distinção entre "desenteria" e a forma coloquial incorreta "desinteria". Ao longo da explicação, a autora corrige erros recorrentes de ortografia, como a ausência de acento em "sutil", e de prosódia, como a pronúncia de "gratuito", reforçando que a sílaba tônica não recai sobre o "i". O vídeo também aborda termos técnicos e cotidianos como "cateter", "cabeleireiro", "mister", "rubrica", "fluido", "supérfluo", "fragrância", "bicarbonato", "privilégio" e "poliomielite". O objetivo central é fornecer uma orientação prática para que os falantes possam aprimorar sua comunicação, distanciando-se de vícios de linguagem e aproximando-se da elegância e correção gramatical exigidas no uso formal da língua.`,
        youtubeId: 'ddj8KbfpwZo',
    },
];

const questoes = [
    // Questão 1
    {
        enunciado: ` (Fuvest - 2014) A civilização “pós-moderna” culminou em um progresso inegável, que não foi percebido antecipadamente, em sua inteireza. Ao mesmo tempo, sob o “mau uso” da ciência, da tecnologia e da capacidade de invenção nos precipitou na miséria moral inexorável. Os que condenam a ciência, a tecnologia e a invenção criativa por essa miséria ignoram os desafios que explodiram com o capitalismo monopolista de sua terceira fase.

        Em páginas secas premonitórias, E. Mandel1 apontara tais riscos. O “livre jogo do mercado” (que não é e nunca foi “livre”) rasgou o ventre das vítimas: milhões de seres humanos nos países ricos e uma carrada maior de milhões nos países pobres. O centro acabou fabricando a sua periferia intrínseca e apossou-se, como não sucedeu nem sob o regime colonial direto, das outras periferias externas, que abrangem quase todo o “resto do mundo”.

        1: Ernest Ezra Mandel (1923-1995): economista e militante político belga.

        O emprego de aspas em uma dada expressão pode servir, inclusive, para indicar que ela:

        I. foi utilizada pelo autor com algum tipo de restrição;
        II. pertence ao jargão de uma determinada área do conhecimento;
        III. contém sentido pejorativo, não assumido pelo autor.

        Considere as seguintes ocorrências de emprego de aspas presentes no texto:

        A. “pós-moderna” (L. 1);
        B. “mau uso” (L. 2);
        C. “livre jogo do mercado” (L. 6);
        D. “livre” (L. 7);
        E. “resto do mundo” (L. 9).

        As modalidades I, II e III de uso de aspas, elencadas acima, verificam-se, respectivamente, em`,
        alternativas: [
            'a) A, C e E',
            'b) B, C e D',
            'c) C, D e E',
            'd) A, B e E',
            'e) B, D e A',
        ],
        respostaCorreta: 'a) A, C e E',
        explicacao: `O uso das aspas no texto indicam algumas intenções do autor:

        “Pós-moderna”: o autor entende que ainda existem algumas restrições sobre o uso desse termo, seja por ser incerto ou pouco aceito pela comunidade acadêmica. O termo pós-moderno indica uma fase que começou após o modernismo, no entanto, alguns autores se referem a esse momento por “contemporaneidade”.

        “Livre jogo do mercado”: as aspas aqui foram usadas pois essa é uma expressão usada na área da economia e, portanto, trata-se de um jargão. Ela indica a liberdade do mercado em atuar sem intervenção do estado.

        “Resto do mundo”: o autor usou aspas nessa expressão para indicar que existe um caráter pejorativo nela do qual ele não compartilha, ou seja, não concorda.`,
    },
    // Questão 2
    {
        enunciado: `(Enem - 2012) “Ele era o inimigo do rei”, nas palavras de seu biógrafo, Lira Neto. Ou, ainda, “um romancista que colecionava desafetos, azucrinava D. Pedro II e acabou inventando o Brasil”. Assim era José de Alencar (1829-1877), o conhecido autor de O guarani e Iracema, tido como o pai do romance no Brasil.

        Além de criar clássicos da literatura brasileira com temas nativistas, indianistas e históricos, ele foi também folhetinista, diretor de jornal, autor de peças de teatro, advogado, deputado federal e até ministro da Justiça. Para ajudar na descoberta das múltiplas facetas desse personagem do século XIX, parte de seu acervo inédito será digitalizada.

        História Viva, n.° 99, 2011.

        Com base no texto, que trata do papel do escritor José de Alencar e da futura digitalização de sua obra, depreende-se que`,
        alternativas: [
            'a) a digitalização dos textos é importante para que os leitores possam compreender seus romances.',
            'b) o conhecido autor de O guarani e Iracema foi importante porque deixou uma vasta obra literária com temática atemporal.',
            'c) a divulgação das obras de José de Alencar, por meio da digitalização, demonstra sua importância para a história do Brasil Imperial.',
            'd) a digitalização dos textos de José de Alencar terá importante papel na preservação da memória linguística e da identidade nacional.',
            'e) o grande romancista José de Alencar é importante porque se destacou por sua temática indianista',
        ],
        respostaCorreta: 'd) a digitalização dos textos de José de Alencar terá importante papel na preservação da memória linguística e da identidade nacional.',
        explicacao: `A importância de José de Alencar (1829-1877) não se limita somente ao Brasil Imperial (1822-1889). Escritor multifacetado, ele atuou como jornalista, crítico, advogado, dramaturgo e político, sendo uma das figuras mais importantes da literatura romântica nacional.

        Por esse motivo, a digitalização de suas obras, sem dúvida, fortalecerá a preservação da memória linguística e da identidade nacional, tornando público seus escritos.`,
    },
    // Questão 3
    {
        enunciado: `(UERJ - 2016/1) “Todo abacate é verde. O incrível Hulk é verde. O incrível Hulk é um abacate.”

        Todo argumento pode se tornar um sofisma: um raciocínio errado ou inadequado que nos leva a conclusões falsas ou improcedentes.

        O último parágrafo do texto é um exemplo de sofisma, considerando que, da constatação de que todo abacate é verde, não se pode deduzir que só os abacates têm cor verde.

        Esse é o tipo de sofisma que adota o seguinte procedimento:`,
        alternativas: [
            'a) enumeração incorreta',
            'b) generalização indevida',
            'c) representação imprecisa',
            'd) exemplificação inconsistente',
            'e) inversão indevida da relação lógica',
        ],
        respostaCorreta: 'b) generalização indevida',
        explicacao: `No caso de generalização indevida, chega-se a uma conclusão geral precipitada a partir de uma situação particular, cuja amostra analisada é muito pequena não sendo possível sustentar uma generalização.

        No exemplo acima ocorreu isso, o que gerou um erro de lógica, uma vez que a generalização criada não pode ser utilizada em todos os casos possíveis.`,
    },
    // Questão 4
    {
        enunciado: `(Fuvest - 2013) A essência da teoria democrática é a supressão de qualquer imposição de classe, fundada no postulado ou na crença de que os conflitos e problemas humanos – econômicos, políticos, ou sociais – são solucionáveis pela educação, isto é, pela cooperação voluntária, mobilizada pela opinião pública esclarecida. Está claro que essa opinião pública terá de ser formada à luz dos melhores conhecimentos existentes e, assim, a pesquisa científica nos campos das ciências naturais e das chamadas ciências sociais deverá se fazer a mais ampla, a mais vigorosa, a mais livre, e a difusão desses conhecimentos, a mais completa, a mais imparcial e em termos que os tornem acessíveis a todos.

        (Anísio Teixeira, Educação é um direito. Adaptado.)

        No trecho “chamadas ciências sociais”, o emprego do termo “chamadas” indica que o autor`,
        alternativas: [
            'a) vê, nas “ciências sociais”, uma panaceia, não uma análise crítica da sociedade.',
            'b) considera utópicos os objetivos dessas ciências.',
            'c) prefere a denominação “teoria social” à denominação “ciências sociais”.',
            'd) discorda dos pressupostos teóricos dessas ciências.',
            'e) utiliza com reserva a denominação “ciências sociais”.',
        ],
        respostaCorreta: 'e) utiliza com reserva a denominação “ciências sociais”.',
        explicacao: 'Ao utilizar a palavra “chamadas” antes de “ciências sociais”, o autor do texto evita a generalização do termo, utilizando-o com reserva.',
    },
    // Questão 5
    {
        enunciado: `(UEA - 2017) Leia o trecho de Quincas Borba, de Machado de Assis:

        E enquanto uma chora, outra ri; é a lei do mundo, meu rico senhor; é a perfeição universal. Tudo chorando seria monótono, tudo rindo cansativo; mas uma boa distribuição de lágrimas e polcas1, soluços e sarabandas2, acaba por trazer à alma do mundo a variedade necessária, e faz-se o equilíbrio da vida.

        (Quincas Borba, 1992.)

        1 polca: tipo de dança.
        2 sarabanda: tipo de dança.

        De acordo com o narrador,`,
        alternativas: [
             'a) os erros do passado não afetam o presente.',
             'b) a existência é marcada por antagonismos.',
             'c) a sabedoria está em perseguir a felicidade.',
             'd) cada instante vivido deve ser festejado.',
             'e) os momentos felizes são mais raros que os tristes.'
            ],
        respostaCorreta: 'd) cada instante vivido deve ser festejado.',
        explicacao: 'A partir da leitura do trecho de Quincas Borba, fica claro que a vida é marcada por diferentes antagonismos ou oposições (chora e ri), e isso é o que denota seu equilíbrio.',
    },
    // Questão 6
    {
        enunciado: `(PUC-SP)

        (...) Da garrafa estilhaçada, no ladrilho já sereno escorre uma coisa espessa que é leite, sangue... não sei. Por entre objetos confusos, mal redimidos da noite, duas cores se procuram, suavemente se tocam, amorosamente se enlaçam, formando um terceiro tom a que chamamos aurora.

        (Carlos Drummond de Andrade)

        No fragmento anterior, Carlos Drummond de Andrade constrói, poeticamente, a aurora. O que permite visualizar este momento do dia corresponde:`,
        alternativas: [
            'a) a objetos confusos mal redimido da noite.',
            'b) à garrafa estilhaçada e ao ladrilho sereno.',
            'c) à aproximação suave de dois corpos.',
            'd) ao enlace amoroso de duas cores.',
            'e) ao fluir espesso do sangue sobre o ladrilho.'
            ],
        respostaCorreta: 'd) ao enlace amoroso de duas cores.',
        explicacao: 'Com a leitura do trecho acima, compreendemos que a descrição feita pelo escritor é a respeito da aurora, ou seja, o momento do nascer do sol em que observamos uma mistura de cores com a saída da noite e chegada do dia.',
    },
    // Questão 7
    {
        enunciado: `(FCC-2013)

        esta vida é uma viagem
        pena eu estar
        só de passagem

        (Paulo Leminski, La vie em close. 5a ed. S.Paulo: Brasiliense, 2000, p.134)

        No poema de apenas três versos, o poeta lamenta-se`,
        alternativas: [
            'a) da fugacidade da vida.',
            'b) demonstra preferir a vida espiritual à terrena.',
            'c) revolta-se contra o seu destino.',
            'd) sugere que a vida não tem sentido.',
            'e) abomina a agitação da vida.'
        ],
        respostaCorreta: 'a) da fugacidade da vida.',
        explicacao: 'A partir da leitura do poema, podemos compreender que o autor aborda sobre a efemeridade da vida, ou seja, sua qualidade de ser fugaz e que acaba com rapidez para todos, tal qual uma viagem.',
    },
    // Questão 8
    {
        enunciado: `(Fatec - 2013) Leia o texto para responder às questões.

        O labirinto dos manuais

        Há alguns meses troquei meu celular. Um modelo lindo, pequeno, prático. Segundo a vendedora, era capaz de tudo e mais um pouco. Fotografava, fazia vídeos, recebia e-mails e até servia para telefonar. Abri o manual, entusiasmado. “Agora eu aprendo”, decidi, folheando as 49 páginas. Já na primeira, tentei executar as funções. Duas horas depois, eu estava prestes a roer o aparelho. O manual tentava prever todas as possibilidades. Virou um labirinto de instruções!

        Na semana seguinte, tentei baixar o som da campainha. Só aumentava. Buscava o vibracall, não achava. Era só alguém me chamar e todo mundo em torno saía correndo, pensando que era o alarme de incêndio! Quem me salvou foi um motorista de táxi.

        — Manual só confunde – disse didaticamente. – Dá uma de curioso.

        Insisti e finalmente descobri que estava no vibracall há meses! O único problema é que agora não consigo botar a campainha de volta!

        Atualmente, estou de computador novo. Fiz o que toda pessoa minuciosa faria. Comprei um livro. Na capa, a promessa: “Rápido e fácil” – um guia prático, simples e colorido! Resolvi: “Vou seguir cada instrução, página por página. Do que adianta ter um supercomputador se não sei usá-lo?”. Quando cheguei à página 20, minha cabeça latejava. O livro tem 342! Cada vez que olho, dá vontade de chorar! Não seria melhor gastar o tempo relendo Guerra e Paz*?

        Tudo foi criado para simplificar. Mas até o microndas ficou difícil. A não ser que eu queira fazer pipoca, que possui sua tecla própria. Mas não posso me alimentar só de pipoca! Ainda se emagrecesse... E o fax com secretária eletrônica? O anterior era simples. Eu apertava um botão e apagava as mensagens. O atual exige que eu toque em um, depois em outro para confirmar, e de novo no primeiro! Outro dia, a luzinha estava piscando. Tentei ouvir a mensagem. A secretária disparou todas as mensagens, desde o início do ano!

        Eu sei que para a garotada que está aí tudo parece muito simples. Mas o mundo é para todos, não é? Talvez alguém dê aulas para entender manuais! Ou o jeito seria aprender só aquilo de que tenho realmente necessidade, e não usar todas as funções. É o que a maioria das pessoas acaba fazendo!

        (Walcyr Carrasco, Veja SP, 19.09.2007. Adaptado)

        * Livro do escritor russo Liev Tolstói. Com mais de mil páginas e centenas de personagens, é considerada uma das maiores obras da história da literatura.

        Pelos comentários feitos pelo narrador, pode-se concluir corretamente que`,
        alternativas: [
            'a) a leitura de obras-primas da literatura é atividade mais produtiva do que utilizar celulares e computadores.',
            'b) os manuais cujas diversas instruções os usuários não conseguem compreender e pôr em prática são improdutivos.',
            'c) a vendedora foi convincente, pois o narrador comprou o celular, embora duvidasse das qualidades prometidas pelo aparelho.',
            'd) o manual sobre computadores, ao contrário de outros do gênero, cumpria a promessa assumida nos dizeres impressos na capa.',
             'e) os jovens deveriam ensinar computação aos mais velhos, pois, dessa forma, estes últimos entenderiam as funções básicas do equipamento.'],
        respostaCorreta: 'b) os manuais cujas diversas instruções os usuários não conseguem compreender e pôr em prática são improdutivos.',
        explicacao: `Segundo o texto, os manuais de instruções dos aparelhos mais confundem do que ajudam e, por isso, são indicados como “labirintos” onde as pessoas se perdem.`,
    },
    // Questão 9
    {
    enunciado: `(Unicamp - 2025)

    Em "A vida não é útil", Ailton Krenak relata a preocupação de povos indígenas diante da expansão da sociedade dos homens brancos sobre seus territórios e modos de vida. Segundo o autor, os pajés alertam para os riscos de uma visão de mundo que ameaça a existência de outros povos e formas de compreender a natureza.

    A preocupação apresentada no texto está relacionada:`,
    alternativas: [
        'a) à defesa do desenvolvimento econômico como principal caminho para preservar as culturas indígenas.',
        'b) à necessidade de substituir os conhecimentos tradicionais pelos conhecimentos científicos.',
        'c) à diferença de perspectivas na relação entre ser humano e natureza, valorizando um conhecimento não predatório.',
        'd) à rejeição de qualquer contato entre os povos indígenas e as sociedades urbanizadas.',
        'e) à valorização da exploração dos recursos naturais como forma de integração cultural.'
    ],
    respostaCorreta: 'c) à diferença de perspectivas na relação entre ser humano e natureza, valorizando um conhecimento não predatório.',
    explicacao: `A questão aborda o contraste entre diferentes formas de compreender a natureza. A perspectiva indígena apresentada por Ailton Krenak valoriza uma relação de respeito e    equilíbrio com o ambiente, em oposição à exploração predatória dos recursos naturais.`
    },
    // Questão 10
    {
        enunciado: `(Unesp - 2010)

        Texto 1

        Porque morrer é uma ou outra destas duas coisas: ou o morto não tem absolutamente nenhuma existência, nenhuma consciência do que quer que seja, ou, como se diz, a morte é precisamente uma mudança de existência e, para a alma, uma migração deste lugar para um outro. Se, de fato, não há sensação alguma, mas é como um sono, a morte seria um maravilhoso presente. […] Se, ao contrário, a morte é como uma passagem deste para outro lugar, e, se é verdade o que se diz que lá se encontram todos os mortos, qual o bem que poderia existir, ó juízes, maior do que este? Porque, se chegarmos ao Hades, libertando-nos destes que se vangloriam serem juízes, havemos de encontrar os verdadeiros juízes, os quais nos diria que fazem justiça acolá: Monos e Radamante, Éaco e Triptolemo, e tantos outros deuses e semideuses que foram justos na vida; seria então essa viagem uma viagem de se fazer pouco caso? Que preço não seríeis capazes de pagar, para conversar com Orfeu, Museu, Hesíodo e Homero?

        (Platão. Apologia de Sócrates, 2000.)

        Texto 2

        Ninguém sabe quando será seu último passeio, mas agora é possível se despedir em grande estilo. Uma 300C Touring, a versão perua do sedã de luxo da Chrysler, foi transformada no primeiro carro funerário customizado da América Latina. A mudança levou sete meses, custou R$ 160 mil e deixou o carro com oito metros de comprimento e 2 340 kg, três metros e 540 kg além da original. O Funeral Car 300C tem luzes piscantes na já imponente dianteira e enormes rodas, de aro 22, com direito a pequenos caixões estilizados nos raios. Bandeiras nas pontas do capô, como nos carros de diplomatas, dão um toque refinado. Com o chassi mais longo, o banco traseiro foi mantido para familiares acompanharem o cortejo dentro do carro. No encosto dos dianteiros, telas exibem mensagens de conforto. O carro faz parte de um pacote de cerimonial fúnebre que inclui, além do cortejo no Funeral Car 300C, serviços como violinistas e revoada de pombas brancas no enterro.

        (Funeral tunado. Folha de S.Paulo, 28.02.2010.)

        Confrontando o conteúdo dos dois textos, pode-se afirmar que:`,
        alternativas: [
            'a) embora os dois textos transmitam concepções divergentes acerca da morte, eles tratam de visões concernentes à mesma época, a saber, a sociedade atual.',
            'b) sob o ponto de vista filosófico, não há diferenças qualitativas entre uma e outra concepção sobre a morte.',
            'c) os comentários do texto grego sobre a morte são coerentes com uma filosofia de forte valorização do corpo em detrimento da alma, e do mundo sensível sobre o mundo inteligível.',
            'd) o texto de Platão evidencia uma cultura monoteísta, enquanto que o segundo é politeísta.',
            'e) enquanto no primeiro texto transparece a dignidade metafísica da morte, no segundo sugere-se a conversão do funeral em espetáculo da sociedade de consumo.'],
        respostaCorreta: 'e) enquanto no primeiro texto transparece a dignidade metafísica da morte, no segundo sugere-se a conversão do funeral em espetáculo da sociedade de consumo.',
        explicacao: `A partir da leitura dos textos, fica claro que a morte é o tema principal, porém é abordada de maneiras diferentes.

        Assim, no primeiro texto temos a morte como a passagem do mundo terreno ao espiritual; enquanto no segundo, o foco está no espetáculo do consumo, evocado por um “carro faz que parte de um pacote de cerimonial fúnebre”.`,
    },
    // Questão 11
    {
        enunciado: `(Enem - 2013)

        Adolescentes: mais altos, gordos e preguiçosos

        A oferta de produtos industrializados e a falta de tempo têm sua parcela de responsabilidade no aumento da silhueta dos jovens. “Os nossos hábitos alimentares, de modo geral, mudaram muito”, observa Vivian Ellinger, presidente da Sociedade Brasileira de Endocrinologia e Metabologia (SBEM), no Rio de Janeiro. Pesquisas mostram que, aqui no Brasil, estamos exagerando no sal e no açúcar, além de tomar pouco leite e comer menos frutas e feijão.

        Outro pecado, velho conhecido de quem exibe excesso de gordura por causa da gula, surge como marca da nova geração: a preguiça. “Cem por cento das meninas que participam do Programa não praticavam nenhum esporte”, revela a psicóloga Cristina Freire, que monitora o desenvolvimento emocional das voluntárias.

        Você provavelmente já sabe quais são as consequências de uma rotina sedentária e cheia de gordura. “E não é novidade que os obesos têm uma sobrevida menor”, acredita Claudia Cozer, endocrinologista da Associação Brasileira para o Estudo da Obesidade e da Síndrome Metabólica. Mas, se há cinco anos os estudos projetavam um futuro sombrio para os jovens, no cenário atual as doenças que viriam na velhice já são parte da rotina deles. “Os adolescentes já estão sofrendo com hipertensão e diabete”, exemplifica Claudia.

        DESGUALDO, P. Revista Saúde. Disponível em: http://saude.abril.com.br. Acesso em: 28 jul. 2012 (adaptado).

        Sobre a relação entre os hábitos da população adolescente e as suas condições de saúde, as informações apresentadas no texto indicam que`,
        alternativas: [
            'a) a falta de atividade física somada a uma alimentação nutricionalmente desequilibrada constituem fatores relacionados ao aparecimento de doenças crônicas entre os adolescentes.',
            'b) a diminuição do consumo de alimentos fontes de carboidratos combinada com um maior consumo de alimentos ricos em proteínas contribuíram para o aumento da obesidade entre os adolescentes.',
            'c) a maior participação dos alimentos industrializados e gordurosos na dieta da população adolescente tem tornado escasso o consumo de sais e açúcares, o que prejudica o equilíbrio metabólico.',
            'd) a ocorrência de casos de hipertensão e diabetes entre os adolescentes advém das condições de alimentação, enquanto que na população adulta os fatores hereditários são preponderantes.',
            'e) a prática regular de atividade física é um importante fator de controle da diabetes entre a população adolescente, por provocar um constante aumento da pressão arterial sistólica.'
            ],
        respostaCorreta: 'a) a falta de atividade física somada a uma alimentação nutricionalmente desequilibrada constituem fatores relacionados ao aparecimento de doenças crônicas entre os adolescentes.',
        explicacao: ` Com a leitura do texto, fica claro entender que a intenção da autora é alertar para os hábitos pouco ou nada saudáveis dos jovens da atualidade.

        Destacam-se o consumo dos alimentos pobres em nutrientes e a falta de práticas diárias de exercícios físicos, o que levam ao sedentarismo e, consequentemente, ao surgimento de doenças crônicas.`,
    },
    // Questão 12
    {
    enunciado: `(Unicamp - 2022)

    O conceito de cultura pode envolver os valores de uma comunidade, as manifestações artísticas e os bens produzidos e compartilhados por diferentes grupos sociais.

    Com a expansão da tecnologia digital, surgiram novas formas de circulação e comercialização desses bens. Entretanto, diferentes sociedades possuem tradições e entendimentos próprios sobre conceitos como cópia, originalidade e propriedade coletiva.

    Com base nessas ideias, a defesa de uma cultura livre dependeria:`,
    alternativas: [
        'a) da concentração da produção cultural nas instituições responsáveis pelos direitos autorais.',
        'b) da valorização exclusiva das manifestações culturais produzidas no Ocidente.',
        'c) da eliminação das tecnologias digitais dos processos de compartilhamento cultural.',
        'd) da consideração das experiências e dos valores de diferentes culturas.',
        'e) da transformação de todas as manifestações culturais em produtos comerciais.'
    ],
    respostaCorreta: 'd) da consideração das experiências e dos valores de diferentes culturas.',
    explicacao: `O texto destaca que as noções de cultura, propriedade e compartilhamento variam entre as sociedades. Portanto, defender uma cultura livre exige reconhecer e respeitar diferentes experiências e valores culturais.`
    },
    // Questão 13
    {
        enunciado: `(Unesp - 2011)

        O fim do marketing
        A empresa vende ao consumidor
        — com a web não é mais assim

        Com a internet se tornando onipresente, os Quatro Ps do marketing — produto, praça, preço e promoção — não funcionam mais. O paradigma era simples e unidirecional: as empresas vendem aos consumidores. Nós criamos produtos; fixamos preços; definimos os locais onde vendê-los; e fazemos anúncios. Nós controlamos a mensagem. A internet transforma todas essas atividades.

        (...)

        Os produtos agora são customizados em massa, envolvem serviços e são marcados pelo conhecimento e os gostos dos consumidores. Por meio de comunidades online, os consumidores hoje participam do desenvolvimento do produto. Produtos estão se tornando experiências. Estão mortas as velhas concepções industriais na definição e marketing de produtos.

        (...)

        Graças às vendas online e à nova dinâmica do mercado, os preços fixados pelo fornecedor estão sendo cada vez mais desafiados. Hoje questionamos até o conceito de “preço”, à medida que os consumidores ganham acesso a ferramentas que lhes permitem determinar quanto querem pagar. Os consumidores vão oferecer vários preços por um produto, dependendo de condições específicas. Compradores e vendedores trocam mais informações e o preço se torna fluido. Os mercados, e não as empresas, decidem sobre os preços de produtos e serviços.

        (...)

        A empresa moderna compete em dois mundos: um físico (a praça, ou marketplace) e um mundo digital de informação (o espaço mercadológico, ou marketspace). As empresas não devem preocupar-se com a criação de um web site vistoso, mas sim de uma grande comunidade online e com o capital de relacionamento. Corações, e não olhos, são o que conta. Dentro de uma década, a maioria dos produtos será vendida no espaço mercadológico. Uma nova fronteira de comércio é a marketface — a interface entre o marketplace e o marketspace.

        (...)

        Publicidade, promoção, relações públicas etc. exploram “mensagens” unidirecionais, de um-para-muitos e de tamanho único, dirigidas a consumidores sem rosto e sem poder. As comunidades online perturbam drasticamente esse modelo. Os consumidores com frequência têm acesso a informações sobre os produtos, e o poder passa para o lado deles. São eles que controlam as regras do mercado, não você. Eles escolhem o meio e a mensagem. Em vez de receber mensagens enviadas por profissionais de relações públicas, eles criam a “opinião pública” online.

        Os marqueteiros estão perdendo o controle, e isso é muito bom.

        (Don Tapscott. O fim do marketing. INFO, São Paulo, Editora Abril, janeiro 2011, p. 22.)

        A leitura atenta deste instigante artigo de Don Tapscott revela que o tema central de sua mensagem é:`,
        alternativas: [
            'a) O advento do comércio via internet subverteu as teorias tradicionais de marketing',
            'b) O comércio via internet confirma todas as teorias de publicidade e marketing vigentes.',
            'c) A aplicação dos princípios tradicionais de marketing se tornou vital para o sucesso do comércio online.',
            'd) O comércio realizado em lojas físicas é ainda preferível ao realizado online.',
            'e) A lei da oferta e da procura não influencia de nenhum modo o comércio via internet'
        ],
        respostaCorreta: 'a) O advento do comércio via internet subverteu as teorias tradicionais de marketing',
        explicacao: `A partir da leitura do texto, podemos compreender que a internet foi uma das maiores influenciadoras nas mudanças de comportamento dos consumidores.

        Com isso, as teorias associadas ao marketing, antes consideradas modernas, hoje em dia se tornaram obsoletas com o aumento de consumidores on-line.`,
    },
    // Questão 14
    {
    enunciado: `(Unicamp - 2021)

    Em uma crônica, Fernanda Young utiliza a palavra "cafona" para caracterizar comportamentos marcados pela falta de respeito, pela arrogância e pelo desprezo às regras de convivência social.

    A autora associa essas atitudes a pessoas que procuram obter vantagens pessoais, desrespeitam os outros e demonstram desprezo pela educação e pela gentileza.

    Essa releitura do significado de "cafona" destaca:`,
    alternativas: [
        'a) a importância da preservação das tradições culturais diante das transformações sociais.',
        'b) a valorização de comportamentos individuais que favorecem o desenvolvimento econômico.',
        'c) a relação entre a desigualdade social e a dificuldade de acesso à educação formal.',
        'd) o privilégio de determinados grupos sociais e sua relação com os problemas enfrentados pelo país.',
        'e) a oposição entre os costumes das gerações mais antigas e os hábitos da juventude.'
    ],
    respostaCorreta: 'd) o privilégio de determinados grupos sociais e sua relação com os problemas enfrentados pelo país.',
    explicacao: `A autora utiliza o termo "cafona" de maneira crítica, associando-o a comportamentos arrogantes, antiéticos e privilegiados. Assim, relaciona atitudes individuais de determinados grupos aos problemas sociais e políticos do país.`
    },
    // Questão 15
    {
        enunciado: `(Vunesp - 2014)

        A vida dá voltas

        Sou um tipo meio fatalista. Acho que a vida dá voltas. Um amigo meu, Luís, casou-se com Cláudia, uma mulher egoísta. Ele era filho único, de mãe separada e sem pensão. Durante algum tempo, a mãe de Luís foi sustentada pelo próprio tio, um solteirão. Quando este faleceu, começaram as brigas domésticas: Cláudia não admitia que Luís desse dinheiro à mãe. Ele era um rapaz de classe média. Por algum tempo, arrumou trabalhos extras para ajudar a idosa.

        Convencido pela esposa, ele mudou-se para longe. Visitava a mãe uma vez por ano. Para se livrar da questão financeira, Luís convenceu a mãe a vender o apartamento. Durante alguns anos, ela viveu desse dinheiro. Muitas vezes, lamentava a falta do filho, mas o que fazer? Luís, sempre tão ocupado, viajando pelo mundo todo, não tinha tempo disponível. Na casa da mãe, faltou até o essencial. E ela faleceu sozinha.

        O tempo passou. Hoje, Luís, antes um profissional disputado, está desempregado. Foi obrigado a se instalar com a família na casa dos sogros, onde é atormentado diariamente. A filha de Luís e Cláudia cresceu e saiu de casa. Quer seguir seu próprio rumo!

        Luís não tem renda, nem bens. Está quase se divorciando. Ficou fora do mercado de trabalho. O que vai acontecer? A filha cuidará dele? Tenho dúvidas, porque ele não a ensinou com seu próprio exemplo.

        A vida é um eterno ciclo afetivo. Em uma época todos nós somos filhos. Em outra, tornamo-nos pais: é a nossa vez de cuidar de quem cuidou de nós.

        (Walcyr Carrasco. http://vejasp.abril.com.br. Acesso em 30.12.2013. Adaptado)

        Considerando o último parágrafo do texto, pode-se afirmar que a relação entre pais e filhos deve ser baseada`,
        alternativas: [
            'a) no medo.',
            'b) na persistência.',
            'c) na expectativa.',
            'd) na esperança.',
            'e) na troca.'
        ],
        respostaCorreta: 'e) na troca.',
        explicacao: 'Considerando o último parágrafo do texto, o autor deixa claro que a vida é um ciclo, onde um dia nossos pais são os cuidadores e, no outro, somos nós que assumimos esse papel. Assim, temos expressa a ideia de retribuição, de troca.',
    },
    // Questão 16
    {
        enunciado:
            'Em "Vidas Secas", de Graciliano Ramos, a cachorra Baleia ocupa um lugar central no enredo. A cena de sua morte é considerada uma das mais marcantes do romance porque:',
        alternativas: [
            'A) revela, por meio de um narrador onisciente, a capacidade do animal de refletir de forma articulada sobre a morte, o que contrasta com a incapacidade verbal dos personagens humanos.',
            'B) simboliza o triunfo da natureza sobre a civilização, já que a morte de Baleia marca o fim da seca e o início de uma fase próspera para a família.',
            'C) representa o rompimento definitivo entre Fabiano e Sinhá Vitória, que passam a culpar um ao outro pela necessidade de sacrificar o animal.',
            'D) humaniza o animal ao dar-lhe sonhos e esperanças, o que o aproxima da condição dos retirantes e evidencia a desumanização a que a família é submetida.',
            'E) expressa o otimismo do autor em relação ao sertão, pois Baleia, mesmo ferida, consegue guiar a família até uma região fértil.',
        ],
        respostaCorreta: 'D',
        explicacao:
            'Em Vidas Secas, Baleia sonha com preás e com um mundo cheio deles antes de morrer, e é a personagem com a vida interior mais rica. Os humanos, por sua vez, são "animalizados" pela miséria e quase não conseguem se comunicar. A inversão entre humanização do bicho e animalização das pessoas é o grande recurso crítico do romance.',
    },
    // Questão 17
    {
        enunciado:
            'Leia o trecho: "O ônibus lotado seguia devagar, e a cidade, indiferente, engolia seus passageiros como quem não sente o gosto do que come." As figuras de linguagem predominantes nesse trecho são, respectivamente:',
        alternativas: [
            'A) personificação e comparação.',
            'B) metáfora e antítese.',
            'C) hipérbole e eufemismo.',
            'D) ironia e paradoxo.',
            'E) metonímia e pleonasmo.',
        ],
        respostaCorreta: 'A',
        explicacao:
            'Atribuir à cidade ações e sentimentos humanos (ser indiferente, engolir) é personificação (prosopopeia). A expressão "como quem não sente o gosto do que come" introduz um termo comparativo explícito ("como"), caracterizando uma comparação.',
    },
    // Questão 18
    {
        enunciado:
            'Assinale a alternativa em que a vírgula está empregada de acordo com a norma-padrão.',
        alternativas: [
            'A) Os alunos que estudaram, foram aprovados, os outros, não.',
            'B) Quando chegou a noite a cidade, finalmente, silenciou.',
            'C) O professor explicou, que a prova seria adiada.',
            'D) Maria, e João, saíram cedo da escola.',
            'E) Machado de Assis, autor de "Dom Casmurro", é considerado o maior nome do Realismo brasileiro.',
        ],
        respostaCorreta: 'E',
        explicacao:
            'A expressão "autor de Dom Casmurro" é um aposto explicativo e deve vir isolada por vírgulas. Nas demais alternativas há erros: vírgula entre verbo e complemento (C), vírgula separando sujeito composto ligado por "e" (D), ausência de vírgula após a oração adverbial deslocada (B) e pontuação inadequada (A).',
    },
    // Questão 19
    {
        enunciado:
            'A Semana de Arte Moderna de 1922 é um marco do Modernismo brasileiro. Entre as principais propostas da chamada "primeira fase" do movimento, destaca-se:',
        alternativas: [
            'A) a valorização rigorosa da métrica e da rima, como forma de preservar a tradição parnasiana.',
            'B) o retorno ao espiritualismo e ao subjetivismo exacerbado típicos do Romantismo.',
            'C) a ruptura com os padrões estéticos tradicionais, o uso do verso livre e a valorização de uma linguagem mais próxima da fala brasileira.',
            'D) a imitação dos modelos clássicos europeus como caminho para elevar a literatura nacional.',
            'E) a defesa de uma literatura exclusivamente voltada para a denúncia da seca no Nordeste.',
        ],
        respostaCorreta: 'C',
        explicacao:
            'A primeira fase modernista (1922-1930) foi marcada pelo espírito de ruptura, pela liberdade formal (verso livre, ausência de rima obrigatória), pelo humor e pela busca de uma identidade nacional, inclusive na linguagem. A denúncia social do Nordeste é característica da segunda fase (Romance de 30).',
    },
    // Questão 20
    {
        enunciado:
            'Em "Os meninos que acabaram de chegar foram recebidos pela diretora", a oração destacada em "que acabaram de chegar" classifica-se como:',
        alternativas: [
            'A) oração subordinada substantiva objetiva direta.',
            'B) oração subordinada adjetiva restritiva.',
            'C) oração subordinada adverbial temporal.',
            'D) oração subordinada adjetiva explicativa.',
            'E) oração coordenada sindética explicativa.',
        ],
        respostaCorreta: 'B',
        explicacao:
            'O "que" é pronome relativo e retoma "meninos", funcionando como adjetivo desse substantivo. Como a oração restringe o sentido do antecedente (apenas os meninos que acabaram de chegar, e não todos), não vem separada por vírgulas e é restritiva.',
    },
    // Questão 21
    {
        enunciado:
            'Considere o poema "No meio do caminho", de Carlos Drummond de Andrade, em que a expressão "tinha uma pedra no meio do caminho" é repetida diversas vezes. Esse recurso, somado à linguagem simples e prosaica, produz principalmente o efeito de:',
        alternativas: [
            'A) enfatizar a obsessão do eu lírico com um obstáculo que se fixa na memória e se torna marcante, quebrando a expectativa do leitor por um lirismo tradicional.',
            'B) descrever de forma objetiva um fato corriqueiro, sem qualquer valor simbólico.',
            'C) demonstrar o domínio das formas fixas, como o soneto, por meio de um padrão rígido de rimas.',
            'D) criar um tom épico, exaltando a superação de dificuldades pelo herói.',
            'E) reproduzir o estilo parnasiano, caracterizado pelo vocabulário rebuscado.',
        ],
        respostaCorreta: 'A',
        explicacao:
            'A repetição insistente cria efeito de ruminação, de um acontecimento que não sai da mente. A linguagem coloquial e a ausência de rebuscamento são marcas do Modernismo e provocaram escândalo na época da publicação, justamente por romperem com o "poético" convencional.',
    },
    // Questão 22
    {
        enunciado: 'Assinale a alternativa em que o uso da crase está CORRETO.',
        alternativas: [
            'A) Fui à pé até a escola.',
            'B) Entreguei o trabalho à ela ontem.',
            'C) O curso começará à partir de segunda-feira.',
            'D) Referiu-se à moça que estava na porta.',
            'E) Não obedeço à ordens injustas.',
        ],
        respostaCorreta: 'D',
        explicacao:
            'O verbo "referir-se" exige a preposição "a" e o substantivo "moça" admite o artigo "a", resultando em "à". Nas demais: não há crase antes de palavra masculina (à pé), antes de pronome pessoal (à ela), em locuções com verbo (à partir) nem antes de palavra no plural sem artigo (à ordens).',
    },
    // Questão 23
    {
        enunciado:
            'Em "Memórias Póstumas de Brás Cubas", de Machado de Assis, o narrador é um defunto-autor que relata sua vida depois de morto. Essa escolha narrativa contribui para a obra porque:',
        alternativas: [
            'A) permite ao narrador adotar um tom sentimental e idealizado, típico do Romantismo.',
            'B) garante a neutralidade e a objetividade absolutas, características do Naturalismo científico.',
            'C) reforça o caráter heroico do protagonista, que supera a própria morte por meio da literatura.',
            'D) permite ao leitor acompanhar a narrativa em ordem cronológica rigorosa, do nascimento à morte.',
            'E) libera o narrador dos compromissos sociais, possibilitando uma análise irônica, cínica e distanciada da sociedade e de si mesmo.',
        ],
        respostaCorreta: 'E',
        explicacao:
            'Brás Cubas, já morto, não tem mais nada a perder e pode expor sem pudor as hipocrisias, vaidades e interesses da elite carioca do século XIX. O romance rompe com a linearidade, usa digressões e dialoga diretamente com o leitor, marcas do Realismo machadiano.',
    },
    // Questão 24
    {
        enunciado: 'Em qual alternativa a concordância verbal está de acordo com a norma-padrão?',
        alternativas: [
            'A) Fazem dois anos que me formei no ensino médio.',
            'B) Devem existir soluções para esse problema.',
            'C) Haviam muitos candidatos na fila do vestibular.',
            'D) Bateu três horas quando o professor chegou.',
            'E) Os Estados Unidos é um país de grande extensão territorial.',
        ],
        respostaCorreta: 'B',
        explicacao:
            'Em locução verbal, o verbo auxiliar concorda com o sujeito: o verbo "existir" é pessoal e seu sujeito é "soluções" (plural), logo "devem existir". Nas demais: "faz dois anos" e "havia muitos" (verbos impessoais ficam no singular), "bateram três horas" (o verbo concorda com o número de horas) e "Os Estados Unidos são" (nome próprio plural com artigo).',
    },
    // Questão 25
    {
        enunciado:
            'Leia o trecho: "A tecnologia aproxima quem está longe, mas distancia quem está perto." Essa construção apresenta, predominantemente, a figura de linguagem denominada:',
        alternativas: [
            'A) eufemismo, pois suaviza uma ideia desagradável.',
            'B) catacrese, pois utiliza um termo por falta de outro mais adequado.',
            'C) antítese, pois aproxima termos de sentidos opostos (longe/perto, aproxima/distancia).',
            'D) metonímia, pois substitui o todo por uma de suas partes.',
            'E) onomatopeia, pois reproduz sons por meio de palavras.',
        ],
        respostaCorreta: 'C',
        explicacao:
            'A antítese consiste na oposição de ideias ou palavras de sentidos contrários no mesmo enunciado. Aqui aparecem dois pares: "aproxima" x "distancia" e "longe" x "perto". Não confundir com paradoxo, que cria uma contradição aparente de ideias, e não só de palavras.',
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
