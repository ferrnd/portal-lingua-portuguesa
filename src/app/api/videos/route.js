import * as controller from '@/controllers/videoController.js';

export async function POST(request) {
    return controller.criar(request);
}

export async function GET(request) {
    return controller.buscarTodos(request);
}
