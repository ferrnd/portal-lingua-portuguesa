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
