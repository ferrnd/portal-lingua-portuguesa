import prisma from '../lib/services/prismaClient.js';

export default class VideoModel {
    constructor({ id = null, titulo, descricao, youtubeId } = {}) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.youtubeId = youtubeId;
    }

    async criar() {
        return prisma.video.create({
            data: {
                titulo: this.titulo,
                descricao: this.descricao,
                youtubeId: this.youtubeId,
            },
        });
    }

    async atualizar() {
        return prisma.video.update({
            where: { id: this.id },
            data: {
                titulo: this.titulo,
                descricao: this.descricao,
                youtubeId: this.youtubeId,
            },
        });
    }

    async deletar() {
        return prisma.video.delete({ where: { id: this.id } });
    }

    static async buscarTodos(filtros = {}) {
        const where = {};

        if (filtros.titulo) {
            where.titulo = { contains: filtros.titulo, mode: 'insensitive' };
        }

        return prisma.video.findMany({ where, orderBy: { id: 'asc' } });
    }

    static async buscarPorId(id) {
        const data = await prisma.video.findUnique({ where: { id } });
        if (!data) {
            return null;
        }
        return new VideoModel(data);
    }
}
