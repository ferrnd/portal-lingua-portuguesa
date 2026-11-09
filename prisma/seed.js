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
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
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

async function main() {
    console.log('🌱 Resetando tabela noticia...');

    // Remove todos os registros
    await prisma.noticia.deleteMany();

    console.log('📦 Inserindo novos registros...');

    const preenchidas = noticias.filter((noticia) => noticia.titulo);

    await prisma.noticia.createMany({ data: preenchidas });

    console.log(`✅ Seed concluído! ${preenchidas.length} notícias inseridas.`);
}

main()
    .catch((e) => {
        console.error('❌ Erro no seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
