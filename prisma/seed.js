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
    },
    // Notícia 2
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
    },
    // Notícia 3
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
    },
    // Notícia 4
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
    },
    // Notícia 5
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
    },
    // Notícia 6
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
    },
    // Notícia 7
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
    },
    // Notícia 8
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
    },
    // Notícia 9
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
    },
    // Notícia 10
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
    },
    // Notícia 11
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
    },
    // Notícia 12
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
    },
    // Notícia 13
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
    },
    // Notícia 14
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
    },
    // Notícia 15
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
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

    await prisma.noticia.createMany({ data: preenchidas });

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
