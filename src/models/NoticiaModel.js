import prisma from '../lib/services/prismaClient.js';

export default class NoticiaModel {
    constructor({ id = null, titulo, resumo, conteudo, dataPublicacao, urlImagem } = {}) {
        this.id = id;
        this.titulo = titulo;
        this.resumo = resumo;
        this.conteudo = conteudo;
        this.dataPublicacao = dataPublicacao;
        this.urlImagem = urlImagem;
    }

    async criar() {
        return prisma.noticia.create({
            data: {
                titulo: this.titulo,
                resumo: this.resumo,
                conteudo: this.conteudo,
                dataPublicacao: this.dataPublicacao,
                urlImagem: this.urlImagem,
            },
        });
    }

    async atualizar() {
        return prisma.noticia.update({
            where: { id: this.id },
            data: {
                titulo: this.titulo,
                resumo: this.resumo,
                conteudo: this.conteudo,
                dataPublicacao: this.dataPublicacao,
                urlImagem: this.urlImagem,
            },
        });
    }

    async deletar() {
        return prisma.noticia.delete({ where: { id: this.id } });
    }

    static async buscarTodos(filtros = {}) {
        const where = {};

        if (filtros.titulo) {
            where.titulo = { contains: filtros.titulo, mode: 'insensitive' };
        }

        return prisma.noticia.findMany({ where });
    }

    static async buscarPorId(id) {
        const data = await prisma.noticia.findUnique({ where: { id } });
        if (!data) {
            return null;
        }
        return new NoticiaModel(data);
    }
}
