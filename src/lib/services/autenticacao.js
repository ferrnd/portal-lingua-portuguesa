import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Devolve uma resposta 401 se não houver login, ou null se estiver tudo certo.
export async function exigirLogin() {
    const { userId } = await auth();

    if (!userId) {
        return NextResponse.json({ error: 'Faça login para continuar.' }, { status: 401 });
    }

    return null;
}
