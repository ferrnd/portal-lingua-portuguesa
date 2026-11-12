import * as controller from '@/controllers/noticiaController.js';

export async function GET(request, { params }) {
    const { id } = await params;
    return controller.buscarPorId(request, id);
}

export async function PUT(request, { params }) {
    const { id } = await params;
    return controller.atualizar(request, id);
}

export async function DELETE(request, { params }) {
    const { id } = await params;
    return controller.deletar(request, id);
}
