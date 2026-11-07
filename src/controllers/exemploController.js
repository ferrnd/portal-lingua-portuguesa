import { NextResponse } from 'next/server';
import ExemploModel from '../models/ExemploModel.js';

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

        const { nome, estado, preco } = body;

        if (!nome){
            return NextResponse.json({ error: 'O campo "nome" é obrigatório!' }, { status: 400 });
        }
        if (preco === undefined || preco === null) {
            return NextResponse.json({ error: 'O campo "preco" é obrigatório!' }, { status: 400 });
        }

        const exemplo = new ExemploModel({ nome, estado, preco: parseFloat(preco) });
        const data = await exemplo.criar();

        return NextResponse.json({ message: 'Registro criado com sucesso!', data }, { status: 201 });
    } catch (error) {
        console.error('Erro ao criar:', error);
        return NextResponse.json({ error: 'Erro interno ao salvar o registro.' }, { status: 500 });
    }
};

export const buscarTodos = async (request) => {
    try {
        const filtros = Object.fromEntries(new URL(request.url).searchParams);
        const registros = await ExemploModel.buscarTodos(filtros);

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

        const exemplo = await ExemploModel.buscarPorId(parseInt(id));

        if (!exemplo) {
            return NextResponse.json({ error: 'Registro não encontrado.' }, { status: 404 });
        }

        return NextResponse.json({ data: exemplo }, { status: 200 });
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

        const exemplo = await ExemploModel.buscarPorId(parseInt(id));

        if (!exemplo) {
            return NextResponse.json({ error: 'Registro não encontrado para atualizar.' }, { status: 404 });
        }

        if (body.nome !== undefined) {
            exemplo.nome = body.nome;
        }
        if (body.estado !== undefined) {
            exemplo.estado = body.estado;
        }
        if (body.preco !== undefined) {
            exemplo.preco = parseFloat(body.preco);
        }

        const data = await exemplo.atualizar();

        return NextResponse.json({ message: `O registro "${data.nome}" foi atualizado com sucesso!`, data }, { status: 200 });
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

        const exemplo = await ExemploModel.buscarPorId(parseInt(id));

        if (!exemplo) {
            return NextResponse.json({ error: 'Registro não encontrado para deletar.' }, { status: 404 });
        }

        await exemplo.deletar();

        return NextResponse.json({ message: `O registro "${exemplo.nome}" foi deletado com sucesso!`, deletado: exemplo }, { status: 200 });
    } catch (error) {
        console.error('Erro ao deletar:', error);
        return NextResponse.json({ error: 'Erro ao deletar registro.' }, { status: 500 });
    }
};
