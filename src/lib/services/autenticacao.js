import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function exigirLogin() {
    const { userId } = await auth();

    if (!userId) {
        return NextResponse.json({ error: 'Faça login para continuar.' }, { status: 401 });
    }

    return null;
}
