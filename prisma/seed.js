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
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
    // Notícia 5
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
    // Notícia 6
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
    // Notícia 7
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
    // Notícia 8
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
    // Notícia 9
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
    // Notícia 10
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
    // Notícia 11
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
    // Notícia 12
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
    // Notícia 13
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
    // Notícia 14
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
    // Notícia 15
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
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
