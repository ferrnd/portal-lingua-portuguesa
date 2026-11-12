import { NextResponse } from 'next/server';
import NoticiaModel from '../models/NoticiaModel.js';

async function lerCorpo(request) {
    try {
        return await request.json();
    } catch {
        return null;
    }
}

export const criar = async (request) => {
    try {
        const body = await lerCorpo(request);

        if (!body) {
            return NextResponse.json({ error: 'Corpo da requisição vazio. Envie os dados!' }, { status: 400 });
        }

        const { titulo, resumo, conteudo, dataPublicacao, urlImagem } = body;

        if (!titulo) {
            return NextResponse.json({ error: 'O campo "titulo" é obrigatório!' }, { status: 400 });
        }
        if (!resumo) {
            return NextResponse.json({ error: 'O campo "resumo" é obrigatório!' }, { status: 400 });
        }
        if (!conteudo) {
            return NextResponse.json({ error: 'O campo "conteudo" é obrigatório!' }, { status: 400 });
        }
        if (!dataPublicacao) {
            return NextResponse.json({ error: 'O campo "dataPublicacao" é obrigatório!' }, { status: 400 });
        }
        if (!urlImagem) {
            return NextResponse.json({ error: 'O campo "urlImagem" é obrigatório!' }, { status: 400 });
        }

        const noticia = new NoticiaModel({
            titulo,
            resumo,
            conteudo,
            dataPublicacao: new Date(dataPublicacao),
            urlImagem,
        });
        const data = await noticia.criar();

        return NextResponse.json({ message: 'Registro criado com sucesso!', data }, { status: 201 });
    } catch (error) {
        console.error('Erro ao criar:', error);
        return NextResponse.json({ error: 'Erro interno ao salvar o registro.' }, { status: 500 });
    }
};

export const buscarTodos = async (request) => {
    const filtros = Object.fromEntries(new URL(request.url).searchParams);

    try {
        const registros = await NoticiaModel.buscarTodos(filtros);

        if (!registros || registros.length === 0) {
            return NextResponse.json({ message: 'Nenhum registro encontrado.' }, { status: 400 });
        }

        return NextResponse.json(registros, { status: 200 });
    } catch (error) {
        console.error('Erro ao buscar:', error);
        return NextResponse.json({ error: 'Erro ao buscar registros.' }, { status: 500 });
    }
};

export const buscarPorId = async (request, id) => {
    try {
        if (isNaN(id)) {
            return NextResponse.json({ error: 'O ID enviado não é um número válido.' }, { status: 400 });
        }

        const noticia = await NoticiaModel.buscarPorId(parseInt(id));

        if (!noticia) {
            return NextResponse.json({ error: 'Registro não encontrado.' }, { status: 404 });
        }

        return NextResponse.json({ data: noticia }, { status: 200 });
    } catch (error) {
        console.error('Erro ao buscar:', error);
        return NextResponse.json({ error: 'Erro ao buscar registro.' }, { status: 500 });
    }
};

export const atualizar = async (request, id) => {
    try {
        if (isNaN(id)) {
            return NextResponse.json({ error: 'ID inválido.' }, { status: 400 });
        }

        const body = await lerCorpo(request);

        if (!body) {
            return NextResponse.json({ error: 'Corpo da requisição vazio. Envie os dados!' }, { status: 400 });
        }

        const noticia = await NoticiaModel.buscarPorId(parseInt(id));

        if (!noticia) {
            return NextResponse.json({ error: 'Registro não encontrado para atualizar.' }, { status: 404 });
        }

        if (body.titulo !== undefined) {
            noticia.titulo = body.titulo;
        }
        if (body.resumo !== undefined) {
            noticia.resumo = body.resumo;
        }
        if (body.conteudo !== undefined) {
            noticia.conteudo = body.conteudo;
        }
        if (body.dataPublicacao !== undefined) {
            noticia.dataPublicacao = new Date(body.dataPublicacao);
        }
        if (body.urlImagem !== undefined) {
            noticia.urlImagem = body.urlImagem;
        }

        const data = await noticia.atualizar();

        return NextResponse.json({ message: `O registro "${data.titulo}" foi atualizado com sucesso!`, data }, { status: 200 });
    } catch (error) {
        console.error('Erro ao atualizar:', error);
        return NextResponse.json({ error: 'Erro ao atualizar registro.' }, { status: 500 });
    }
};

export const deletar = async (request, id) => {
    try {
        if (isNaN(id)) {
            return NextResponse.json({ error: 'ID inválido.' }, { status: 400 });
        }

        const noticia = await NoticiaModel.buscarPorId(parseInt(id));

        if (!noticia) {
            return NextResponse.json({ error: 'Registro não encontrado para deletar.' }, { status: 404 });
        }

        await noticia.deletar();

        return NextResponse.json({ message: `O registro "${noticia.titulo}" foi deletado com sucesso!`, deletado: noticia }, { status: 200 });
    } catch (error) {
        console.error('Erro ao deletar:', error);
        return NextResponse.json({ error: 'Erro ao deletar registro.' }, { status: 500 });
    }
};
