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
        explicacao: `a digitalização dos textos de José de Alencar terá importante papel na preservação da memória linguística e da identidade nacional.

        A importância de José de Alencar (1829-1877) não se limita somente ao Brasil Imperial (1822-1889). Escritor multifacetado, ele atuou como jornalista, crítico, advogado, dramaturgo e político, sendo uma das figuras mais importantes da literatura romântica nacional.

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
