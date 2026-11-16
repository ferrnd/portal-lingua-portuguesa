import prisma from '../lib/services/prismaClient.js';

export default class QuestaoModel {
    constructor({ id = null, enunciado, alternativas, respostaCorreta, explicacao } = {}) {
        this.id = id;
        this.enunciado = enunciado;
        this.alternativas = alternativas;
        this.respostaCorreta = respostaCorreta;
        this.explicacao = explicacao;
    }

    async criar() {
        return prisma.questao.create({
            data: {
                enunciado: this.enunciado,
                alternativas: this.alternativas,
                respostaCorreta: this.respostaCorreta,
                explicacao: this.explicacao,
            },
        });
    }

    async atualizar() {
        return prisma.questao.update({
            where: { id: this.id },
            data: {
                enunciado: this.enunciado,
                alternativas: this.alternativas,
                respostaCorreta: this.respostaCorreta,
                explicacao: this.explicacao,
            },
        });
    }

    async deletar() {
        return prisma.questao.delete({ where: { id: this.id } });
    }

    static async buscarTodos(filtros = {}) {
        const where = {};

        if (filtros.enunciado) {
            where.enunciado = { contains: filtros.enunciado, mode: 'insensitive' };
        }

        return prisma.questao.findMany({ where, orderBy: { id: 'asc' } });
    }

    static async buscarPorId(id) {
        const data = await prisma.questao.findUnique({ where: { id } });
        if (!data) {
            return null;
        }
        return new QuestaoModel(data);
    }
}
