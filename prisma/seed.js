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
        urlImagem: '/noticias/enem-2026-cadernos.webp',
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
        urlImagem: '/noticias/theatro-da-paz-belem.webp',
        urlFonte: 'https://agencia.belem.pa.gov.br/agentes-de-leitura-aceleram-a-alfabetizacao-infantil-em-belem/',
    },
    // Notícia 5
    {
        titulo: 'A disputa pela atenção e a queda da leitura de livros no Brasil',
        resumo: 'Pesquisa revela que os brasileiros estão lendo menos livros, apesar de permanecerem conectados durante muitas horas.',
        conteudo: 'Um estudo publicado pelo Instituto de Pesquisa Econômica Aplicada (Ipea) aponta uma situação preocupante para a leitura no Brasil. Em 2024, os não leitores representavam 53% da população com cinco anos ou mais. O número de leitores caiu de 104,7 milhões em 2015 para 93,4 milhões em 2024. O estudo discute como as redes sociais, os vídeos curtos e o uso constante dos celulares disputam a atenção que poderia ser dedicada aos livros.',
        dataPublicacao: new Date('2026-11-09'),
        urlImagem: '/noticias/parede-de-livros.webp',
        urlFonte: 'https://www.ipea.gov.br/cts/pt/central-de-conteudo/artigos/artigos/559-a-disputa-pela-atencao-e-a-queda-da-leitura-de-livros-no-brasil',
    },
    // Notícia 6
    {
        titulo: 'Escritora portuguesa Lídia Jorge vence o Prêmio Camões 2026',
        resumo: 'Principal prêmio da literatura em língua portuguesa foi concedido por unanimidade à autora de "Misericórdia".',
        conteudo: 'A escritora portuguesa Lídia Jorge foi escolhida como vencedora da 38ª edição do Prêmio Camões, o mais importante reconhecimento dado a autores de língua portuguesa. O anúncio foi feito em 2 de julho de 2026 pelos governos de Portugal e do Brasil, que organizam a premiação em conjunto.\nA decisão do júri foi unânime. Segundo os organizadores, a escolha levou em conta o conjunto diversificado da obra da autora e sua contribuição para o patrimônio literário e cultural da língua portuguesa. Entre seus livros mais conhecidos está o romance "Misericórdia".\nO prêmio tem valor de 100 mil euros e é entregue todos os anos a um autor de qualquer país que tenha o português como língua oficial. Na edição anterior, a homenageada foi a escritora angolana Ana Paula Tavares.',
        dataPublicacao: new Date('2026-07-03'),
        urlImagem: '/noticias/monumento-camoes.webp',
        urlFonte: 'https://www.publishnews.com.br/materias/2026/07/03/lidia-jorge-e-a-vencedora-do-premio-camoes-de-literatura-2026',
    },
    // Notícia 7
    {
        titulo: 'Especialista alerta para os desafios da leitura e da escrita na educação brasileira',
        resumo: 'Professora da Unesp analisa a diminuição do hábito de leitura e os desafios enfrentados pelos educadores.',
        conteudo: 'Em entrevista publicada pelo Jornal da Unesp, a pesquisadora Maria Mortatti discutiu os desafios de ensinar crianças e jovens a ler e escrever. A especialista destacou a queda no número de leitores no Brasil e a importância de aproximar os estudantes da literatura. A reportagem também aborda a necessidade de melhorar a formação dos professores e incentivar a leitura para além das atividades obrigatórias da escola.',
        dataPublicacao: new Date('2026-11-11'),
        urlImagem: '/noticias/livros-mortatti.webp',
        urlFonte: 'https://jornal.unesp.br/2026/11/11/maria-mortatti-discute-os-desafios-de-ensinar-a-ler-e-escrever-no-brasil/',
    },
    // Notícia 8
    {
        titulo: 'Projeto leva incentivo à leitura para estações de metrô em São Paulo',
        resumo: 'Parceria entre instituições promove atividades gratuitas de leitura e distribuição de gibis em estações de transporte público.',
        conteudo: 'O Instituto Mauricio de Sousa e o Instituto Motiva realizaram uma ação para aproximar crianças e famílias do universo dos livros. A iniciativa utiliza personagens conhecidos, como os da Turma da Mônica, para despertar o interesse pela leitura. O projeto prevê mais de 140 atividades gratuitas e a distribuição de aproximadamente 10 mil exemplares de histórias em quadrinhos.',
        dataPublicacao: new Date('2026-11-12'),
        urlImagem: '/noticias/estacao-vila-das-belezas.webp',
        urlFonte: 'https://www.motiva.com.br/noticias/acao-incentivo-leitura-estacao-vila-das-belezas/',
    },
    // Notícia 9
    {
        titulo: 'Feira de Santana prepara 15 mil estudantes com aulas de Português',
        resumo: 'Estudantes participam de atividades de revisão de Português e Matemática antes da avaliação SABE 2026.',
        conteudo: 'A Prefeitura de Feira de Santana intensificou a preparação dos estudantes da rede municipal para o Sistema de Avaliação Baiano da Educação. As atividades incluíram aulas de revisão de Língua Portuguesa e Matemática, com participação presencial e transmissões pela internet. A expectativa era alcançar aproximadamente 15 mil estudantes. A iniciativa busca reforçar os conhecimentos escolares e melhorar o desempenho dos alunos.',
        dataPublicacao: new Date('2026-11-12'),
        urlImagem: '/noticias/feira-de-santana.webp',
        urlFonte: 'https://jornalgrandebahia.com.br/2026/11/sabe-2026-governo-ronaldo-prepara-15-mil-estudantes-de-feira-de-santana-com-auloes-de-portugues-e-matematica-antes-da-avaliacao-estadual/',
    },
    // Notícia 10
    {
        titulo: 'Alunos migrantes sofrem preconceito por causa da maneira como falam',
        resumo: 'Estudantes podem enfrentar discriminação por misturarem o português com outros idiomas.',
        conteudo: 'Uma pesquisa da USP discutiu o preconceito linguístico enfrentado por estudantes migrantes nas escolas. Algumas crianças e adolescentes misturam o português com outros idiomas, como o espanhol, e acabam sendo julgados pela maneira como se comunicam. O caso destaca a importância de respeitar a diversidade linguística.',
        dataPublicacao: new Date('2025-11-26'),
        urlImagem: '/noticias/mapa-brasil.webp',
        urlFonte: 'https://jornal.usp.br/diversidade/como-algumas-escolas-mantem-preconceitos-linguisticos-contra-alunos-migrantes/',
    },
    // Notícia 11
    {
        titulo: 'Literatura indígena e afro-brasileira ganha espaço em festival literário',
        resumo: 'Escritores discutem a importância de apresentar histórias e culturas indígenas e afro-brasileiras aos leitores.',
        conteudo: 'A Festa Literária da Morada do Sol, em Araraquara, anunciou uma mesa dedicada à literatura infantil indígena e afro-brasileira. O encontro reúne escritores como Daniel Munduruku e Luana Antunes para discutir a importância das narrativas na valorização cultural. A iniciativa destaca como a literatura pode preservar memórias, apresentar diferentes realidades e combater a invisibilidade de determinados grupos na produção literária.',
        dataPublicacao: new Date('2026-11-13'),
        urlImagem: '/noticias/araraquara.webp',
        urlFonte: 'https://araraquaraagora.com/noticia/58047/flisol-2026-literatura-indigena-afro-brasileira-araraquara',
    },
    // Notícia 12
    {
        titulo: 'Prova de Linguagens do Enem 2026 apresenta literatura e temas atuais',
        resumo: 'Questões da prova de Linguagens exigiram conhecimentos de literatura brasileira e compreensão de diferentes textos.',
        conteudo: 'A prova de Linguagens do Enem 2026 apresentou questões envolvendo obras literárias, temas sociais e tecnologias. Entre os assuntos estavam a obra Menino de Engenho, de José Lins do Rego, o Estatuto da Criança e do Adolescente no ambiente digital e os impactos da inteligência artificial. A avaliação reforçou a importância da interpretação textual e da capacidade de compreender diferentes formas de comunicação.',
        dataPublicacao: new Date('2026-11-08'),
        urlImagem: '/noticias/enem-2026-linguagens.webp',
        urlFonte: 'https://www.cnnbrasil.com.br/educacao/enem-2026-prova-de-linguagens-tem-classicos-literarios-ia-e-temas-sociais/',
    },
    // Notícia 13
    {
        titulo: 'Estudo aponta aumento no número de estudantes que leem livros',
        resumo: 'Pesquisa realizada em escolas brasileiras identificou avanços no hábito de leitura entre estudantes.',
        conteudo: 'Um estudo realizado em 264 escolas brasileiras identificou mudanças positivas nos hábitos de leitura dos estudantes entre 2022 e 2026. A pesquisa apontou aumento na quantidade de alunos que concluíram livros espontaneamente e passaram a demonstrar interesse por obras mais complexas. Também foram observados avanços no tempo dedicado à leitura. O resultado mostra a importância dos projetos escolares e do incentivo à literatura na formação de novos leitores.',
        dataPublicacao: new Date('2026-10-16'),
        urlImagem: '/noticias/placa-machado-de-assis.webp',
        urlFonte: 'https://www.cnnbrasil.com.br/educacao/numero-de-estudantes-que-nao-tinham-lido-nenhum-livro-caiu-25-em-2026/',
    },
    // Notícia 14
    {
        titulo: 'Bienal do Livro de São Paulo registra público recorde',
        resumo: 'Evento literário reúne centenas de milhares de pessoas e demonstra a força do mercado editorial brasileiro.',
        conteudo: 'A 28ª Bienal Internacional do Livro de São Paulo encerrou sua edição de 2026 com aproximadamente 760 mil visitantes. O evento reuniu leitores, escritores, editoras e profissionais do setor literário. A programação contou com lançamentos, encontros com autores e atividades culturais. O resultado chama atenção porque acontece em um período em que pesquisas apontam dificuldades para manter o hábito de leitura no Brasil.',
        dataPublicacao: new Date('2026-09-15'),
        urlImagem: '/noticias/bienal-livro-sp-2026.webp',
        urlFonte: 'https://www.al.sp.gov.br/noticia/?id=515047',
    },
    // Notícia 15
    {
        titulo: 'Escritores destacam a importância dos professores na formação de leitores',
        resumo: 'Encontros realizados durante a Bienal aproximaram escritores e educadores para discutir a formação de leitores.',
        conteudo: 'Durante a 28ª Bienal Internacional do Livro de São Paulo, escritores participaram de encontros com professores da rede municipal de ensino. As atividades destacaram a importância dos educadores na apresentação de obras literárias e no desenvolvimento do interesse dos estudantes pelos livros. A iniciativa também reforçou o papel das bibliotecas escolares e dos projetos de leitura na educação.',
        dataPublicacao: new Date('2026-09-10'),
        urlImagem: '/noticias/formacao-de-leitores.webp',
        urlFonte: 'https://educacao.sme.prefeitura.sp.gov.br/noticias/escritores-destacam-papel-dos-professores-na-formacao-de-leitores/',
    },
];

const videos = [
    // Vídeo 1
    {
        titulo: '10 Curiosidades sobre a Língua Portuguesa',
        descricao: 'Dez curiosidades sobre a língua portuguesa, da origem comum com o galego às vogais nasais, ao infinitivo pessoal e aos mais de 270 milhões de falantes no mundo.',
        youtubeId: 'sNAl1krkVJI',
    },
    // Vídeo 2
    {
        titulo: 'Os 10 erros mais comuns na Língua Portuguesa [Prof. Noslen]',
        descricao: 'O Professor Noslen explica dez erros comuns, como "onde" e "aonde", "haja" e "aja", crase antes de dias da semana e o uso impessoal de "fazer" e "haver".',
        youtubeId: 'tTfkk4-40No',
    },
    // Vídeo 3
    {
        titulo: 'As 10 palavras que quase todo mundo pronuncia errado',
        descricao: 'A professora Lara Brenner corrige a pronúncia de dez palavras ditas de forma errada no dia a dia, como "subsídio", "asterisco", "reivindicar", "gratuito" e "sobrancelha".',
        youtubeId: 'AnF6CMvreoI',
    },
    // Vídeo 4
    {
        titulo: 'Como o LATIM evoluiu para o PORTUGUÊS? | História da Língua Portuguesa',
        descricao: 'Como o latim vulgar, falado pelo povo, deu origem ao galego-português e depois ao português, com exemplos de palavras que mudaram ao longo do tempo, como "pluvia", que virou "chuva".',
        youtubeId: 'CB0gqy-OcMA',
    },
    // Vídeo 5
    {
        titulo: 'AS 10 PALAVRAS MAIS DIFÍCEIS DO PORTUGUÊS',
        descricao: 'O professor Pablo Jamilk ensina a pronunciar dez das palavras mais longas e difíceis do português, como "otorrinolaringologista" e "anticonstitucionalissimamente", dividindo-as em partes.',
        youtubeId: 'f1yv2vJxZrg',
    },
    // Vídeo 6
    {
        titulo: 'Uso da Vírgula! Com Prof. Noslen!',
        descricao: 'O Professor Noslen mostra que a vírgula não marca a respiração, apresenta as principais regras de uso e os casos em que ela nunca deve aparecer, como entre o sujeito e o verbo.',
        youtubeId: '-uUtlvKifiY',
    },
    // Vídeo 7
    {
        titulo: 'COORDENAÇÃO e SUBORDINAÇÃO: Aula COMPLETA de PERÍODO COMPOSTO',
        descricao: 'O Professor Noslen explica o período composto e a diferença entre orações coordenadas, que são independentes, e subordinadas, que dependem uma da outra, com exercícios resolvidos.',
        youtubeId: 'QYP0G1sBOz8',
    },
    // Vídeo 8
    {
        titulo: 'ACENTUAÇÃO: OXÍTONAS, PAROXÍTONAS e PROPAROXÍTONAS || Português do Zero',
        descricao: 'As regras de acentuação gráfica a partir da sílaba tônica: oxítonas, paroxítonas, proparoxítonas, monossílabos tônicos, ditongos abertos e hiatos.',
        youtubeId: 'vmKggNWVvtU',
    },
    // Vídeo 9
    {
        titulo: 'Concordância Verbal - Gramática - Português - ENEM',
        descricao: 'Videoaula do MundoEdu que explica as principais regras de concordância verbal, com exemplos voltados para o ENEM.',
        youtubeId: 'IX2deQt5GBc',
    },
    // Vídeo 10
    {
        titulo: 'Método INFALÍVEL pra saber QUANDO usar a CRASE | Professor Noslen',
        descricao: 'O Professor Noslen ensina quando usar a crase: locuções femininas, as palavras "casa" e "terra", nomes de cidades com o truque do "volto da" e os casos em que ela é opcional.',
        youtubeId: 'aS-ZDEQTK5M',
    },
    // Vídeo 11
    {
        titulo: 'COMO AUMENTAR RÁPIDO SEU VOCABULÁRIO com 1 exercício simples (e usar no dia a dia)',
        descricao: 'Lara Brenner ensina um exercício em três passos para aumentar o vocabulário: procurar a palavra nova no dicionário, criar uma frase com ela e usá-la na primeira oportunidade.',
        youtubeId: 'VtMGkOjebxw',
    },
    // Vídeo 12
    {
        titulo: 'A Influência do Árabe no Português',
        descricao: 'A influência do árabe no português, herança da presença moura na Península Ibérica, em palavras como "algodão", "açúcar", "azeite" e "almofada".',
        youtubeId: 'AAqc1rBniD0',
    },
    // Vídeo 13
    {
        titulo: 'Qual é o som da letra H?',
        descricao: 'A letra H nem sempre é muda: o vídeo explica quando ela não tem som, quando aparece em palavras estrangeiras e como forma os dígrafos "ch", "nh" e "lh".',
        youtubeId: 'EgSIWzrUeps',
    },
    // Vídeo 14
    {
        titulo: 'Por que o plural de “pão” é “pães” e de “grão” é “grãos”? Professor Noslen',
        descricao: 'O Professor Noslen explica por que não existe uma regra única para o plural das palavras terminadas em "-ão" e mostra palavras com mais de um plural aceito, como "anão".',
        youtubeId: 'q-hnLRqG_jk',
    },
    // Vídeo 15
    {
        titulo: '15 palavras que parecem erradas, mas estão certas',
        descricao: 'Lara Brenner apresenta 15 palavras que parecem erradas mas estão certas, como "recorde", "disenteria", "rubrica", "gratuito" e "cateter", explicando a forma correta de cada uma.',
        youtubeId: 'ddj8KbfpwZo',
    },
];

const questoes = [
    // Questão 1
    {
        enunciado: 'Leia o trecho: "O ônibus lotado seguia devagar, e a cidade, indiferente, engolia seus passageiros como quem não sente o gosto do que come." As figuras de linguagem predominantes nesse trecho são, respectivamente:',
        alternativas: [
            'personificação e comparação.',
            'metáfora e antítese.',
            'hipérbole e eufemismo.',
            'ironia e paradoxo.',
            'metonímia e pleonasmo.',
        ],
        respostaCorreta: 'A',
        explicacao: 'Atribuir à cidade ações e sentimentos humanos (ser indiferente, engolir) é personificação (prosopopeia). A expressão "como quem não sente o gosto do que come" introduz um termo comparativo explícito ("como"), caracterizando uma comparação.',
    },
    // Questão 2
    {
        enunciado: '(UERJ - 2016/1) “Todo abacate é verde. O incrível Hulk é verde. O incrível Hulk é um abacate.”\n\nTodo argumento pode se tornar um sofisma: um raciocínio errado ou inadequado que nos leva a conclusões falsas ou improcedentes.\n\nO último parágrafo do texto é um exemplo de sofisma, considerando que, da constatação de que todo abacate é verde, não se pode deduzir que só os abacates têm cor verde.\n\nEsse é o tipo de sofisma que adota o seguinte procedimento:',
        alternativas: [
            'enumeração incorreta',
            'generalização indevida',
            'representação imprecisa',
            'exemplificação inconsistente',
            'inversão indevida da relação lógica',
        ],
        respostaCorreta: 'B',
        explicacao: 'No caso de generalização indevida, chega-se a uma conclusão geral precipitada a partir de uma situação particular, cuja amostra analisada é muito pequena não sendo possível sustentar uma generalização.\n\nNo exemplo acima ocorreu isso, o que gerou um erro de lógica, uma vez que a generalização criada não pode ser utilizada em todos os casos possíveis.',
    },
    // Questão 3
    {
        enunciado: 'Assinale a alternativa em que a regência verbal está de acordo com a norma-padrão.',
        alternativas: [
            'Assisti ao filme que você recomendou.',
            'Prefiro mais estudar de manhã do que à noite.',
            'Ele namora com a minha prima há dois anos.',
            'Esqueci do caderno na sala de aula.',
            'Obedeça o regulamento da escola.',
        ],
        respostaCorreta: 'A',
        explicacao: 'No sentido de "ver", o verbo assistir pede a preposição "a" (assistir a algo). Nas outras: "preferir" não aceita "mais" nem "do que" (prefiro uma coisa a outra); "namorar" não pede preposição (namorar alguém); "esquecer" sem pronome não pede "de" (esqueci o caderno); e "obedecer" pede a preposição "a" (obedeça ao regulamento).',
    },
    // Questão 4
    {
        enunciado: '(UEA - 2017) Leia o trecho de Quincas Borba, de Machado de Assis:\n\nE enquanto uma chora, outra ri; é a lei do mundo, meu rico senhor; é a perfeição universal. Tudo chorando seria monótono, tudo rindo cansativo; mas uma boa distribuição de lágrimas e polcas1, soluços e sarabandas2, acaba por trazer à alma do mundo a variedade necessária, e faz-se o equilíbrio da vida.\n\n(Quincas Borba, 1992.)\n\n1 polca: tipo de dança.\n\n2 sarabanda: tipo de dança.\n\nDe acordo com o narrador,',
        alternativas: [
            'os erros do passado não afetam o presente.',
            'a existência é marcada por antagonismos.',
            'a sabedoria está em perseguir a felicidade.',
            'cada instante vivido deve ser festejado.',
            'os momentos felizes são mais raros que os tristes.',
        ],
        respostaCorreta: 'D',
        explicacao: 'A partir da leitura do trecho de Quincas Borba, fica claro que a vida é marcada por diferentes antagonismos ou oposições (chora e ri), e isso é o que denota seu equilíbrio.',
    },
    // Questão 5
    {
        enunciado: 'Assinale a alternativa em que a vírgula está empregada de acordo com a norma-padrão.',
        alternativas: [
            'Os alunos que estudaram, foram aprovados, os outros, não.',
            'Quando chegou a noite a cidade, finalmente, silenciou.',
            'O professor explicou, que a prova seria adiada.',
            'Maria, e João, saíram cedo da escola.',
            'Machado de Assis, autor de "Dom Casmurro", é considerado o maior nome do Realismo brasileiro.',
        ],
        respostaCorreta: 'E',
        explicacao: 'A expressão "autor de Dom Casmurro" é um aposto explicativo e deve vir isolada por vírgulas. Nas demais alternativas há erros: vírgula entre verbo e complemento (C), vírgula separando sujeito composto ligado por "e" (D), ausência de vírgula após a oração adverbial deslocada (B) e pontuação inadequada (A).',
    },
    // Questão 6
    {
        enunciado: '(Enem - 2013)\n\nAdolescentes: mais altos, gordos e preguiçosos\n\nA oferta de produtos industrializados e a falta de tempo têm sua parcela de responsabilidade no aumento da silhueta dos jovens. “Os nossos hábitos alimentares, de modo geral, mudaram muito”, observa Vivian Ellinger, presidente da Sociedade Brasileira de Endocrinologia e Metabologia (SBEM), no Rio de Janeiro. Pesquisas mostram que, aqui no Brasil, estamos exagerando no sal e no açúcar, além de tomar pouco leite e comer menos frutas e feijão.\n\nOutro pecado, velho conhecido de quem exibe excesso de gordura por causa da gula, surge como marca da nova geração: a preguiça. “Cem por cento das meninas que participam do Programa não praticavam nenhum esporte”, revela a psicóloga Cristina Freire, que monitora o desenvolvimento emocional das voluntárias.\n\nVocê provavelmente já sabe quais são as consequências de uma rotina sedentária e cheia de gordura. “E não é novidade que os obesos têm uma sobrevida menor”, acredita Claudia Cozer, endocrinologista da Associação Brasileira para o Estudo da Obesidade e da Síndrome Metabólica. Mas, se há cinco anos os estudos projetavam um futuro sombrio para os jovens, no cenário atual as doenças que viriam na velhice já são parte da rotina deles. “Os adolescentes já estão sofrendo com hipertensão e diabete”, exemplifica Claudia.\n\nDESGUALDO, P. Revista Saúde. Disponível em: http://saude.abril.com.br. Acesso em: 28 jul. 2012 (adaptado).\n\nSobre a relação entre os hábitos da população adolescente e as suas condições de saúde, as informações apresentadas no texto indicam que',
        alternativas: [
            'a falta de atividade física somada a uma alimentação nutricionalmente desequilibrada constituem fatores relacionados ao aparecimento de doenças crônicas entre os adolescentes.',
            'a diminuição do consumo de alimentos fontes de carboidratos combinada com um maior consumo de alimentos ricos em proteínas contribuíram para o aumento da obesidade entre os adolescentes.',
            'a maior participação dos alimentos industrializados e gordurosos na dieta da população adolescente tem tornado escasso o consumo de sais e açúcares, o que prejudica o equilíbrio metabólico.',
            'a ocorrência de casos de hipertensão e diabetes entre os adolescentes advém das condições de alimentação, enquanto que na população adulta os fatores hereditários são preponderantes.',
            'a prática regular de atividade física é um importante fator de controle da diabetes entre a população adolescente, por provocar um constante aumento da pressão arterial sistólica.',
        ],
        respostaCorreta: 'A',
        explicacao: 'Com a leitura do texto, fica claro entender que a intenção da autora é alertar para os hábitos pouco ou nada saudáveis dos jovens da atualidade.\n\nDestacam-se o consumo dos alimentos pobres em nutrientes e a falta de práticas diárias de exercícios físicos, o que levam ao sedentarismo e, consequentemente, ao surgimento de doenças crônicas.',
    },
    // Questão 7
    {
        enunciado: 'Assinale a alternativa em que o uso da crase está CORRETO.',
        alternativas: [
            'Fui à pé até a escola.',
            'Entreguei o trabalho à ela ontem.',
            'O curso começará à partir de segunda-feira.',
            'Referiu-se à moça que estava na porta.',
            'Não obedeço à ordens injustas.',
        ],
        respostaCorreta: 'D',
        explicacao: 'O verbo "referir-se" exige a preposição "a" e o substantivo "moça" admite o artigo "a", resultando em "à". Nas demais: não há crase antes de palavra masculina (à pé), antes de pronome pessoal (à ela), em locuções com verbo (à partir) nem antes de palavra no plural sem artigo (à ordens).',
    },
    // Questão 8
    {
        enunciado: '(Enem - 2012) “Ele era o inimigo do rei”, nas palavras de seu biógrafo, Lira Neto. Ou, ainda, “um romancista que colecionava desafetos, azucrinava D. Pedro II e acabou inventando o Brasil”. Assim era José de Alencar (1829-1877), o conhecido autor de O guarani e Iracema, tido como o pai do romance no Brasil.\n\nAlém de criar clássicos da literatura brasileira com temas nativistas, indianistas e históricos, ele foi também folhetinista, diretor de jornal, autor de peças de teatro, advogado, deputado federal e até ministro da Justiça. Para ajudar na descoberta das múltiplas facetas desse personagem do século XIX, parte de seu acervo inédito será digitalizada.\n\nHistória Viva, n.° 99, 2011.\n\nCom base no texto, que trata do papel do escritor José de Alencar e da futura digitalização de sua obra, depreende-se que',
        alternativas: [
            'a digitalização dos textos é importante para que os leitores possam compreender seus romances.',
            'o conhecido autor de O guarani e Iracema foi importante porque deixou uma vasta obra literária com temática atemporal.',
            'a divulgação das obras de José de Alencar, por meio da digitalização, demonstra sua importância para a história do Brasil Imperial.',
            'a digitalização dos textos de José de Alencar terá importante papel na preservação da memória linguística e da identidade nacional.',
            'o grande romancista José de Alencar é importante porque se destacou por sua temática indianista',
        ],
        respostaCorreta: 'D',
        explicacao: 'A importância de José de Alencar (1829-1877) não se limita somente ao Brasil Imperial (1822-1889). Escritor multifacetado, ele atuou como jornalista, crítico, advogado, dramaturgo e político, sendo uma das figuras mais importantes da literatura romântica nacional.\n\nPor esse motivo, a digitalização de suas obras, sem dúvida, fortalecerá a preservação da memória linguística e da identidade nacional, tornando público seus escritos.',
    },
    // Questão 9
    {
        enunciado: 'Leia a fala de um personagem:\n"Nóis vai na feira amanhã cedo, que é dia de compra."\nSobre essa fala, é correto afirmar que ela:',
        alternativas: [
            'apresenta erros que impedem a compreensão da mensagem.',
            'representa uma forma de falar inferior às demais variedades do português.',
            'deve ser corrigida em qualquer situação de comunicação.',
            'é típica da língua escrita formal.',
            'é uma variedade linguística legítima, adequada a situações informais, embora se afaste da norma-padrão.',
        ],
        respostaCorreta: 'E',
        explicacao: 'Todas as variedades da língua são legítimas e cumprem sua função de comunicação. A fala se afasta da norma-padrão (que seria "Nós vamos à feira"), mas a mensagem é compreendida. O que importa é a adequação: em situações formais, como uma redação, usa-se a norma-padrão; em uma conversa informal, essa forma de falar é aceitável.',
    },
    // Questão 10
    {
        enunciado: '(Fatec - 2013) Leia o texto a seguir.\n\nO labirinto dos manuais\n\nHá alguns meses troquei meu celular. Um modelo lindo, pequeno, prático. Segundo a vendedora, era capaz de tudo e mais um pouco. Fotografava, fazia vídeos, recebia e-mails e até servia para telefonar. Abri o manual, entusiasmado. “Agora eu aprendo”, decidi, folheando as 49 páginas. Já na primeira, tentei executar as funções. Duas horas depois, eu estava prestes a roer o aparelho. O manual tentava prever todas as possibilidades. Virou um labirinto de instruções!\n\nNa semana seguinte, tentei baixar o som da campainha. Só aumentava. Buscava o vibracall, não achava. Era só alguém me chamar e todo mundo em torno saía correndo, pensando que era o alarme de incêndio! Quem me salvou foi um motorista de táxi.\n\n— Manual só confunde – disse didaticamente. – Dá uma de curioso.\n\nInsisti e finalmente descobri que estava no vibracall há meses! O único problema é que agora não consigo botar a campainha de volta!\n\nAtualmente, estou de computador novo. Fiz o que toda pessoa minuciosa faria. Comprei um livro. Na capa, a promessa: “Rápido e fácil” – um guia prático, simples e colorido! Resolvi: “Vou seguir cada instrução, página por página. Do que adianta ter um supercomputador se não sei usá-lo?”. Quando cheguei à página 20, minha cabeça latejava. O livro tem 342! Cada vez que olho, dá vontade de chorar! Não seria melhor gastar o tempo relendo Guerra e Paz*?\n\nTudo foi criado para simplificar. Mas até o microndas ficou difícil. A não ser que eu queira fazer pipoca, que possui sua tecla própria. Mas não posso me alimentar só de pipoca! Ainda se emagrecesse... E o fax com secretária eletrônica? O anterior era simples. Eu apertava um botão e apagava as mensagens. O atual exige que eu toque em um, depois em outro para confirmar, e de novo no primeiro! Outro dia, a luzinha estava piscando. Tentei ouvir a mensagem. A secretária disparou todas as mensagens, desde o início do ano!\n\nEu sei que para a garotada que está aí tudo parece muito simples. Mas o mundo é para todos, não é? Talvez alguém dê aulas para entender manuais! Ou o jeito seria aprender só aquilo de que tenho realmente necessidade, e não usar todas as funções. É o que a maioria das pessoas acaba fazendo!\n\n(Walcyr Carrasco, Veja SP, 19.09.2007. Adaptado)\n\n* Livro do escritor russo Liev Tolstói. Com mais de mil páginas e centenas de personagens, é considerada uma das maiores obras da história da literatura.\n\nPelos comentários feitos pelo narrador, pode-se concluir corretamente que',
        alternativas: [
            'a leitura de obras-primas da literatura é atividade mais produtiva do que utilizar celulares e computadores.',
            'os manuais cujas diversas instruções os usuários não conseguem compreender e pôr em prática são improdutivos.',
            'a vendedora foi convincente, pois o narrador comprou o celular, embora duvidasse das qualidades prometidas pelo aparelho.',
            'o manual sobre computadores, ao contrário de outros do gênero, cumpria a promessa assumida nos dizeres impressos na capa.',
            'os jovens deveriam ensinar computação aos mais velhos, pois, dessa forma, estes últimos entenderiam as funções básicas do equipamento.',
        ],
        respostaCorreta: 'B',
        explicacao: 'Segundo o texto, os manuais de instruções dos aparelhos mais confundem do que ajudam e, por isso, são indicados como “labirintos” onde as pessoas se perdem.',
    },
    // Questão 11
    {
        enunciado: 'Em "Vidas Secas", de Graciliano Ramos, a cachorra Baleia ocupa um lugar central no enredo. A cena de sua morte é considerada uma das mais marcantes do romance porque:',
        alternativas: [
            'revela, por meio de um narrador onisciente, a capacidade do animal de refletir de forma articulada sobre a morte, o que contrasta com a incapacidade verbal dos personagens humanos.',
            'simboliza o triunfo da natureza sobre a civilização, já que a morte de Baleia marca o fim da seca e o início de uma fase próspera para a família.',
            'representa o rompimento definitivo entre Fabiano e Sinhá Vitória, que passam a culpar um ao outro pela necessidade de sacrificar o animal.',
            'humaniza o animal ao dar-lhe sonhos e esperanças, o que o aproxima da condição dos retirantes e evidencia a desumanização a que a família é submetida.',
            'expressa o otimismo do autor em relação ao sertão, pois Baleia, mesmo ferida, consegue guiar a família até uma região fértil.',
        ],
        respostaCorreta: 'D',
        explicacao: 'Em Vidas Secas, Baleia sonha com preás e com um mundo cheio deles antes de morrer, e é a personagem com a vida interior mais rica. Os humanos, por sua vez, são "animalizados" pela miséria e quase não conseguem se comunicar. A inversão entre humanização do bicho e animalização das pessoas é o grande recurso crítico do romance.',
    },
    // Questão 12
    {
        enunciado: '(PUC-SP)\n\n(...) Da garrafa estilhaçada, no ladrilho já sereno escorre uma coisa espessa que é leite, sangue... não sei. Por entre objetos confusos, mal redimidos da noite, duas cores se procuram, suavemente se tocam, amorosamente se enlaçam, formando um terceiro tom a que chamamos aurora.\n\n(Carlos Drummond de Andrade)\n\nNo fragmento anterior, Carlos Drummond de Andrade constrói, poeticamente, a aurora. O que permite visualizar este momento do dia corresponde:',
        alternativas: [
            'a objetos confusos mal redimido da noite.',
            'à garrafa estilhaçada e ao ladrilho sereno.',
            'à aproximação suave de dois corpos.',
            'ao enlace amoroso de duas cores.',
            'ao fluir espesso do sangue sobre o ladrilho.',
        ],
        respostaCorreta: 'D',
        explicacao: 'Com a leitura do trecho acima, compreendemos que a descrição feita pelo escritor é a respeito da aurora, ou seja, o momento do nascer do sol em que observamos uma mistura de cores com a saída da noite e chegada do dia.',
    },
    // Questão 13
    {
        enunciado: 'Em qual alternativa a concordância verbal está de acordo com a norma-padrão?',
        alternativas: [
            'Fazem dois anos que me formei no ensino médio.',
            'Devem existir soluções para esse problema.',
            'Haviam muitos candidatos na fila do vestibular.',
            'Bateu três horas quando o professor chegou.',
            'Os Estados Unidos é um país de grande extensão territorial.',
        ],
        respostaCorreta: 'B',
        explicacao: 'Em locução verbal, o verbo auxiliar concorda com o sujeito: o verbo "existir" é pessoal e seu sujeito é "soluções" (plural), logo "devem existir". Nas demais: "faz dois anos" e "havia muitos" (verbos impessoais ficam no singular), "bateram três horas" (o verbo concorda com o número de horas) e "Os Estados Unidos são" (nome próprio plural com artigo).',
    },
    // Questão 14
    {
        enunciado: '(Unesp - 2011)\n\nO fim do marketing\n\nA empresa vende ao consumidor\n\n— com a web não é mais assim\n\nCom a internet se tornando onipresente, os Quatro Ps do marketing — produto, praça, preço e promoção — não funcionam mais. O paradigma era simples e unidirecional: as empresas vendem aos consumidores. Nós criamos produtos; fixamos preços; definimos os locais onde vendê-los; e fazemos anúncios. Nós controlamos a mensagem. A internet transforma todas essas atividades.\n\n(...)\n\nOs produtos agora são customizados em massa, envolvem serviços e são marcados pelo conhecimento e os gostos dos consumidores. Por meio de comunidades online, os consumidores hoje participam do desenvolvimento do produto. Produtos estão se tornando experiências. Estão mortas as velhas concepções industriais na definição e marketing de produtos.\n\n(...)\n\nGraças às vendas online e à nova dinâmica do mercado, os preços fixados pelo fornecedor estão sendo cada vez mais desafiados. Hoje questionamos até o conceito de “preço”, à medida que os consumidores ganham acesso a ferramentas que lhes permitem determinar quanto querem pagar. Os consumidores vão oferecer vários preços por um produto, dependendo de condições específicas. Compradores e vendedores trocam mais informações e o preço se torna fluido. Os mercados, e não as empresas, decidem sobre os preços de produtos e serviços.\n\n(...)\n\nA empresa moderna compete em dois mundos: um físico (a praça, ou marketplace) e um mundo digital de informação (o espaço mercadológico, ou marketspace). As empresas não devem preocupar-se com a criação de um web site vistoso, mas sim de uma grande comunidade online e com o capital de relacionamento. Corações, e não olhos, são o que conta. Dentro de uma década, a maioria dos produtos será vendida no espaço mercadológico. Uma nova fronteira de comércio é a marketface — a interface entre o marketplace e o marketspace.\n\n(...)\n\nPublicidade, promoção, relações públicas etc. exploram “mensagens” unidirecionais, de um-para-muitos e de tamanho único, dirigidas a consumidores sem rosto e sem poder. As comunidades online perturbam drasticamente esse modelo. Os consumidores com frequência têm acesso a informações sobre os produtos, e o poder passa para o lado deles. São eles que controlam as regras do mercado, não você. Eles escolhem o meio e a mensagem. Em vez de receber mensagens enviadas por profissionais de relações públicas, eles criam a “opinião pública” online.\n\nOs marqueteiros estão perdendo o controle, e isso é muito bom.\n\n(Don Tapscott. O fim do marketing. INFO, São Paulo, Editora Abril, janeiro 2011, p. 22.)\n\nA leitura atenta deste instigante artigo de Don Tapscott revela que o tema central de sua mensagem é:',
        alternativas: [
            'O advento do comércio via internet subverteu as teorias tradicionais de marketing',
            'O comércio via internet confirma todas as teorias de publicidade e marketing vigentes.',
            'A aplicação dos princípios tradicionais de marketing se tornou vital para o sucesso do comércio online.',
            'O comércio realizado em lojas físicas é ainda preferível ao realizado online.',
            'A lei da oferta e da procura não influencia de nenhum modo o comércio via internet',
        ],
        respostaCorreta: 'A',
        explicacao: 'A partir da leitura do texto, podemos compreender que a internet foi uma das maiores influenciadoras nas mudanças de comportamento dos consumidores.\n\nCom isso, as teorias associadas ao marketing, antes consideradas modernas, hoje em dia se tornaram obsoletas com o aumento de consumidores on-line.',
    },
    // Questão 15
    {
        enunciado: 'Assinale a alternativa em que a colocação do pronome oblíquo átono segue a norma-padrão.',
        alternativas: [
            'Me empresta o seu livro?',
            'Não esqueça-se de trazer o documento.',
            'Ninguém contou-me a novidade.',
            'Sempre o encontro na biblioteca.',
            'Te avisarei quando o resultado sair.',
        ],
        respostaCorreta: 'D',
        explicacao: 'Advérbios como "sempre" atraem o pronome para antes do verbo (próclise), então "Sempre o encontro" está correto. Nas outras: a norma-padrão não permite começar a frase com pronome oblíquo ("Me empresta", "Te avisarei"), e palavras negativas como "não" e "ninguém" também exigem a próclise ("Não se esqueça", "Ninguém me contou").',
    },
    // Questão 16
    {
        enunciado: '(Fuvest - 2013) A essência da teoria democrática é a supressão de qualquer imposição de classe, fundada no postulado ou na crença de que os conflitos e problemas humanos – econômicos, políticos, ou sociais – são solucionáveis pela educação, isto é, pela cooperação voluntária, mobilizada pela opinião pública esclarecida. Está claro que essa opinião pública terá de ser formada à luz dos melhores conhecimentos existentes e, assim, a pesquisa científica nos campos das ciências naturais e das chamadas ciências sociais deverá se fazer a mais ampla, a mais vigorosa, a mais livre, e a difusão desses conhecimentos, a mais completa, a mais imparcial e em termos que os tornem acessíveis a todos.\n\n(Anísio Teixeira, Educação é um direito. Adaptado.)\n\nNo trecho “chamadas ciências sociais”, o emprego do termo “chamadas” indica que o autor',
        alternativas: [
            'vê, nas “ciências sociais”, uma panaceia, não uma análise crítica da sociedade.',
            'considera utópicos os objetivos dessas ciências.',
            'prefere a denominação “teoria social” à denominação “ciências sociais”.',
            'discorda dos pressupostos teóricos dessas ciências.',
            'utiliza com reserva a denominação “ciências sociais”.',
        ],
        respostaCorreta: 'E',
        explicacao: 'Ao utilizar a palavra “chamadas” antes de “ciências sociais”, o autor do texto evita a generalização do termo, utilizando-o com reserva.',
    },
    // Questão 17
    {
        enunciado: 'A Semana de Arte Moderna de 1922 é um marco do Modernismo brasileiro. Entre as principais propostas da chamada "primeira fase" do movimento, destaca-se:',
        alternativas: [
            'a valorização rigorosa da métrica e da rima, como forma de preservar a tradição parnasiana.',
            'o retorno ao espiritualismo e ao subjetivismo exacerbado típicos do Romantismo.',
            'a ruptura com os padrões estéticos tradicionais, o uso do verso livre e a valorização de uma linguagem mais próxima da fala brasileira.',
            'a imitação dos modelos clássicos europeus como caminho para elevar a literatura nacional.',
            'a defesa de uma literatura exclusivamente voltada para a denúncia da seca no Nordeste.',
        ],
        respostaCorreta: 'C',
        explicacao: 'A primeira fase modernista (1922-1930) foi marcada pelo espírito de ruptura, pela liberdade formal (verso livre, ausência de rima obrigatória), pelo humor e pela busca de uma identidade nacional, inclusive na linguagem. A denúncia social do Nordeste é característica da segunda fase (Romance de 30).',
    },
    // Questão 18
    {
        enunciado: 'Em "A vida não é útil", Ailton Krenak relata a preocupação de povos indígenas diante da expansão da sociedade dos homens brancos sobre seus territórios e modos de vida. Segundo o autor, os pajés alertam para os riscos de uma visão de mundo que ameaça a existência de outros povos e formas de compreender a natureza.\n\nA preocupação apresentada no texto está relacionada:',
        alternativas: [
            'à defesa do desenvolvimento econômico como principal caminho para preservar as culturas indígenas.',
            'à necessidade de substituir os conhecimentos tradicionais pelos conhecimentos científicos.',
            'à diferença de perspectivas na relação entre ser humano e natureza, valorizando um conhecimento não predatório.',
            'à rejeição de qualquer contato entre os povos indígenas e as sociedades urbanizadas.',
            'à valorização da exploração dos recursos naturais como forma de integração cultural.',
        ],
        respostaCorreta: 'C',
        explicacao: 'A questão aborda o contraste entre diferentes formas de compreender a natureza. A perspectiva indígena apresentada por Ailton Krenak valoriza uma relação de respeito e\nequilíbrio com o ambiente, em oposição à exploração predatória dos recursos naturais.',
    },
    // Questão 19
    {
        enunciado: 'Na frase "Estudou bastante para a prova; no entanto, não conseguiu a nota que esperava.", a expressão "no entanto" estabelece entre as orações uma relação de:',
        alternativas: [
            'causa.',
            'conclusão.',
            'oposição.',
            'adição.',
            'finalidade.',
        ],
        respostaCorreta: 'C',
        explicacao: '"No entanto" é uma conjunção adversativa, como "mas", "porém" e "contudo". Ela liga ideias que se opõem: era de esperar que quem estudou bastante tirasse uma boa nota, mas o resultado foi o contrário.',
    },
    // Questão 20
    {
        enunciado: '(Vunesp - 2014)\n\nA vida dá voltas\n\nSou um tipo meio fatalista. Acho que a vida dá voltas. Um amigo meu, Luís, casou-se com Cláudia, uma mulher egoísta. Ele era filho único, de mãe separada e sem pensão. Durante algum tempo, a mãe de Luís foi sustentada pelo próprio tio, um solteirão. Quando este faleceu, começaram as brigas domésticas: Cláudia não admitia que Luís desse dinheiro à mãe. Ele era um rapaz de classe média. Por algum tempo, arrumou trabalhos extras para ajudar a idosa.\n\nConvencido pela esposa, ele mudou-se para longe. Visitava a mãe uma vez por ano. Para se livrar da questão financeira, Luís convenceu a mãe a vender o apartamento. Durante alguns anos, ela viveu desse dinheiro. Muitas vezes, lamentava a falta do filho, mas o que fazer? Luís, sempre tão ocupado, viajando pelo mundo todo, não tinha tempo disponível. Na casa da mãe, faltou até o essencial. E ela faleceu sozinha.\n\nO tempo passou. Hoje, Luís, antes um profissional disputado, está desempregado. Foi obrigado a se instalar com a família na casa dos sogros, onde é atormentado diariamente. A filha de Luís e Cláudia cresceu e saiu de casa. Quer seguir seu próprio rumo!\n\nLuís não tem renda, nem bens. Está quase se divorciando. Ficou fora do mercado de trabalho. O que vai acontecer? A filha cuidará dele? Tenho dúvidas, porque ele não a ensinou com seu próprio exemplo.\n\nA vida é um eterno ciclo afetivo. Em uma época todos nós somos filhos. Em outra, tornamo-nos pais: é a nossa vez de cuidar de quem cuidou de nós.\n\n(Walcyr Carrasco. http://vejasp.abril.com.br. Acesso em 30.12.2013. Adaptado)\n\nConsiderando o último parágrafo do texto, pode-se afirmar que a relação entre pais e filhos deve ser baseada',
        alternativas: [
            'no medo.',
            'na persistência.',
            'na expectativa.',
            'na esperança.',
            'na troca.',
        ],
        respostaCorreta: 'E',
        explicacao: 'Considerando o último parágrafo do texto, o autor deixa claro que a vida é um ciclo, onde um dia nossos pais são os cuidadores e, no outro, somos nós que assumimos esse papel. Assim, temos expressa a ideia de retribuição, de troca.',
    },
    // Questão 21
    {
        enunciado: 'Em "Os meninos que acabaram de chegar foram recebidos pela diretora", a oração destacada em "que acabaram de chegar" classifica-se como:',
        alternativas: [
            'oração subordinada substantiva objetiva direta.',
            'oração subordinada adjetiva restritiva.',
            'oração subordinada adverbial temporal.',
            'oração subordinada adjetiva explicativa.',
            'oração coordenada sindética explicativa.',
        ],
        respostaCorreta: 'B',
        explicacao: 'O "que" é pronome relativo e retoma "meninos", funcionando como adjetivo desse substantivo. Como a oração restringe o sentido do antecedente (apenas os meninos que acabaram de chegar, e não todos), não vem separada por vírgulas e é restritiva.',
    },
    // Questão 22
    {
        enunciado: '(FCC-2013)\n\nesta vida é uma viagem\n\npena eu estar\n\nsó de passagem\n\n(Paulo Leminski, La vie em close. 5a ed. S.Paulo: Brasiliense, 2000, p.134)\n\nNo poema de apenas três versos, o poeta lamenta-se',
        alternativas: [
            'da fugacidade da vida.',
            'demonstra preferir a vida espiritual à terrena.',
            'revolta-se contra o seu destino.',
            'sugere que a vida não tem sentido.',
            'abomina a agitação da vida.',
        ],
        respostaCorreta: 'A',
        explicacao: 'A partir da leitura do poema, podemos compreender que o autor aborda sobre a efemeridade da vida, ou seja, sua qualidade de ser fugaz e que acaba com rapidez para todos, tal qual uma viagem.',
    },
    // Questão 23
    {
        enunciado: 'Em "Memórias Póstumas de Brás Cubas", de Machado de Assis, o narrador é um defunto-autor que relata sua vida depois de morto. Essa escolha narrativa contribui para a obra porque:',
        alternativas: [
            'permite ao narrador adotar um tom sentimental e idealizado, típico do Romantismo.',
            'garante a neutralidade e a objetividade absolutas, características do Naturalismo científico.',
            'reforça o caráter heroico do protagonista, que supera a própria morte por meio da literatura.',
            'permite ao leitor acompanhar a narrativa em ordem cronológica rigorosa, do nascimento à morte.',
            'libera o narrador dos compromissos sociais, possibilitando uma análise irônica, cínica e distanciada da sociedade e de si mesmo.',
        ],
        respostaCorreta: 'E',
        explicacao: 'Brás Cubas, já morto, não tem mais nada a perder e pode expor sem pudor as hipocrisias, vaidades e interesses da elite carioca do século XIX. O romance rompe com a linearidade, usa digressões e dialoga diretamente com o leitor, marcas do Realismo machadiano.',
    },
    // Questão 24
    {
        enunciado: 'O conceito de cultura pode envolver os valores de uma comunidade, as manifestações artísticas e os bens produzidos e compartilhados por diferentes grupos sociais.\n\nCom a expansão da tecnologia digital, surgiram novas formas de circulação e comercialização desses bens. Entretanto, diferentes sociedades possuem tradições e entendimentos próprios sobre conceitos como cópia, originalidade e propriedade coletiva.\n\nCom base nessas ideias, a defesa de uma cultura livre dependeria:',
        alternativas: [
            'da concentração da produção cultural nas instituições responsáveis pelos direitos autorais.',
            'da valorização exclusiva das manifestações culturais produzidas no Ocidente.',
            'da eliminação das tecnologias digitais dos processos de compartilhamento cultural.',
            'da consideração das experiências e dos valores de diferentes culturas.',
            'da transformação de todas as manifestações culturais em produtos comerciais.',
        ],
        respostaCorreta: 'D',
        explicacao: 'O texto destaca que as noções de cultura, propriedade e compartilhamento variam entre as sociedades. Portanto, defender uma cultura livre exige reconhecer e respeitar diferentes experiências e valores culturais.',
    },
    // Questão 25
    {
        enunciado: 'Considere o poema "No meio do caminho", de Carlos Drummond de Andrade, em que a expressão "tinha uma pedra no meio do caminho" é repetida diversas vezes. Esse recurso, somado à linguagem simples e prosaica, produz principalmente o efeito de:',
        alternativas: [
            'enfatizar a obsessão do eu lírico com um obstáculo que se fixa na memória e se torna marcante, quebrando a expectativa do leitor por um lirismo tradicional.',
            'descrever de forma objetiva um fato corriqueiro, sem qualquer valor simbólico.',
            'demonstrar o domínio das formas fixas, como o soneto, por meio de um padrão rígido de rimas.',
            'criar um tom épico, exaltando a superação de dificuldades pelo herói.',
            'reproduzir o estilo parnasiano, caracterizado pelo vocabulário rebuscado.',
        ],
        respostaCorreta: 'A',
        explicacao: 'A repetição insistente cria efeito de ruminação, de um acontecimento que não sai da mente. A linguagem coloquial e a ausência de rebuscamento são marcas do Modernismo e provocaram escândalo na época da publicação, justamente por romperem com o "poético" convencional.',
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
