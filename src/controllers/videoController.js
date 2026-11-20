import { NextResponse } from 'next/server';
import { exigirLogin } from '../lib/services/autenticacao.js';
import VideoModel from '../models/VideoModel.js';

async function lerCorpo(request) {
    try {
        return await request.json();
    } catch {
        return null;
    }
}

// O id de um vídeo do YouTube tem 11 caracteres: letras, números, "-" e "_".
const youtubeIdValido = (youtubeId) => /^[A-Za-z0-9_-]{11}$/.test(String(youtubeId ?? ''));

export const criar = async (request) => {
    try {
        const naoLogado = await exigirLogin();
        if (naoLogado) {
            return naoLogado;
        }

        const body = await lerCorpo(request);

        if (!body) {
            return NextResponse.json({ error: 'Corpo da requisição vazio. Envie os dados!' }, { status: 400 });
        }

        const { titulo, descricao, youtubeId } = body;

        if (!titulo) {
            return NextResponse.json({ error: 'O campo "titulo" é obrigatório!' }, { status: 400 });
        }
        if (!descricao) {
            return NextResponse.json({ error: 'O campo "descricao" é obrigatório!' }, { status: 400 });
        }
        if (!youtubeIdValido(youtubeId)) {
            return NextResponse.json({ error: 'O campo "youtubeId" deve ter os 11 caracteres do id do vídeo no YouTube!' }, { status: 400 });
        }

        const video = new VideoModel({ titulo, descricao, youtubeId });
        const data = await video.criar();

        return NextResponse.json({ message: 'Registro criado com sucesso!', data }, { status: 201 });
    } catch (error) {
        console.error('Erro ao criar:', error);
        return NextResponse.json({ error: 'Erro interno ao salvar o registro.' }, { status: 500 });
    }
};

export const buscarTodos = async (request) => {
    const filtros = Object.fromEntries(new URL(request.url).searchParams);

    try {
        const registros = await VideoModel.buscarTodos(filtros);

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

        const video = await VideoModel.buscarPorId(parseInt(id));

        if (!video) {
            return NextResponse.json({ error: 'Registro não encontrado.' }, { status: 404 });
        }

        return NextResponse.json({ data: video }, { status: 200 });
    } catch (error) {
        console.error('Erro ao buscar:', error);
        return NextResponse.json({ error: 'Erro ao buscar registro.' }, { status: 500 });
    }
};

export const atualizar = async (request, id) => {
    try {
        const naoLogado = await exigirLogin();
        if (naoLogado) {
            return naoLogado;
        }

        if (isNaN(id)) {
            return NextResponse.json({ error: 'ID inválido.' }, { status: 400 });
        }

        const body = await lerCorpo(request);

        if (!body) {
            return NextResponse.json({ error: 'Corpo da requisição vazio. Envie os dados!' }, { status: 400 });
        }

        const video = await VideoModel.buscarPorId(parseInt(id));

        if (!video) {
            return NextResponse.json({ error: 'Registro não encontrado para atualizar.' }, { status: 404 });
        }

        if (body.youtubeId !== undefined && !youtubeIdValido(body.youtubeId)) {
            return NextResponse.json({ error: 'O campo "youtubeId" deve ter os 11 caracteres do id do vídeo no YouTube!' }, { status: 400 });
        }

        if (body.titulo !== undefined) {
            video.titulo = body.titulo;
        }
        if (body.descricao !== undefined) {
            video.descricao = body.descricao;
        }
        if (body.youtubeId !== undefined) {
            video.youtubeId = body.youtubeId;
        }

        const data = await video.atualizar();

        return NextResponse.json({ message: `O registro "${data.titulo}" foi atualizado com sucesso!`, data }, { status: 200 });
    } catch (error) {
        console.error('Erro ao atualizar:', error);
        return NextResponse.json({ error: 'Erro ao atualizar registro.' }, { status: 500 });
    }
};

export const deletar = async (request, id) => {
    try {
        const naoLogado = await exigirLogin();
        if (naoLogado) {
            return naoLogado;
        }

        if (isNaN(id)) {
            return NextResponse.json({ error: 'ID inválido.' }, { status: 400 });
        }

        const video = await VideoModel.buscarPorId(parseInt(id));

        if (!video) {
            return NextResponse.json({ error: 'Registro não encontrado para deletar.' }, { status: 404 });
        }

        await video.deletar();

        return NextResponse.json({ message: `O registro "${video.titulo}" foi deletado com sucesso!`, deletado: video }, { status: 200 });
    } catch (error) {
        console.error('Erro ao deletar:', error);
        return NextResponse.json({ error: 'Erro ao deletar registro.' }, { status: 500 });
    }
};
