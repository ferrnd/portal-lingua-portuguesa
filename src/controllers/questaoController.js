import { NextResponse } from 'next/server';
import { exigirLogin } from '../lib/services/autenticacao.js';
import QuestaoModel from '../models/QuestaoModel.js';

async function lerCorpo(request) {
    try {
        return await request.json();
    } catch {
        return null;
    }
}

const LETRAS = ['A', 'B', 'C', 'D', 'E'];

function alternativasValidas(alternativas) {
    return Array.isArray(alternativas) && alternativas.length === 5 && alternativas.every((a) => typeof a === 'string' && a.trim() !== '');
}

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

        const { enunciado, alternativas, respostaCorreta, explicacao } = body;

        if (!enunciado) {
            return NextResponse.json({ error: 'O campo "enunciado" é obrigatório!' }, { status: 400 });
        }
        if (!alternativasValidas(alternativas)) {
            return NextResponse.json({ error: 'O campo "alternativas" deve ter 5 alternativas preenchidas!' }, { status: 400 });
        }
        if (!LETRAS.includes(respostaCorreta)) {
            return NextResponse.json({ error: 'O campo "respostaCorreta" deve ser uma letra de A a E!' }, { status: 400 });
        }
        if (!explicacao) {
            return NextResponse.json({ error: 'O campo "explicacao" é obrigatório!' }, { status: 400 });
        }

        const questao = new QuestaoModel({ enunciado, alternativas, respostaCorreta, explicacao });
        const data = await questao.criar();

        return NextResponse.json({ message: 'Registro criado com sucesso!', data }, { status: 201 });
    } catch (error) {
        console.error('Erro ao criar:', error);
        return NextResponse.json({ error: 'Erro interno ao salvar o registro.' }, { status: 500 });
    }
};

export const buscarTodos = async (request) => {
    const filtros = Object.fromEntries(new URL(request.url).searchParams);

    try {
        const registros = await QuestaoModel.buscarTodos(filtros);

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

        const questao = await QuestaoModel.buscarPorId(parseInt(id));

        if (!questao) {
            return NextResponse.json({ error: 'Registro não encontrado.' }, { status: 404 });
        }

        return NextResponse.json({ data: questao }, { status: 200 });
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

        const questao = await QuestaoModel.buscarPorId(parseInt(id));

        if (!questao) {
            return NextResponse.json({ error: 'Registro não encontrado para atualizar.' }, { status: 404 });
        }

        if (body.alternativas !== undefined && !alternativasValidas(body.alternativas)) {
            return NextResponse.json({ error: 'O campo "alternativas" deve ter 5 alternativas preenchidas!' }, { status: 400 });
        }
        if (body.respostaCorreta !== undefined && !LETRAS.includes(body.respostaCorreta)) {
            return NextResponse.json({ error: 'O campo "respostaCorreta" deve ser uma letra de A a E!' }, { status: 400 });
        }

        if (body.enunciado !== undefined) {
            questao.enunciado = body.enunciado;
        }
        if (body.alternativas !== undefined) {
            questao.alternativas = body.alternativas;
        }
        if (body.respostaCorreta !== undefined) {
            questao.respostaCorreta = body.respostaCorreta;
        }
        if (body.explicacao !== undefined) {
            questao.explicacao = body.explicacao;
        }

        const data = await questao.atualizar();

        return NextResponse.json({ message: `A questão ${data.id} foi atualizada com sucesso!`, data }, { status: 200 });
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

        const questao = await QuestaoModel.buscarPorId(parseInt(id));

        if (!questao) {
            return NextResponse.json({ error: 'Registro não encontrado para deletar.' }, { status: 404 });
        }

        await questao.deletar();

        return NextResponse.json({ message: `A questão ${questao.id} foi deletada com sucesso!`, deletado: questao }, { status: 200 });
    } catch (error) {
        console.error('Erro ao deletar:', error);
        return NextResponse.json({ error: 'Erro ao deletar registro.' }, { status: 500 });
    }
};
