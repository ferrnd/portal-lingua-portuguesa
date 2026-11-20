import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
    matcher: [
        // Todas as páginas, menos os arquivos internos do Next e os arquivos estáticos
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Caminho interno do Clerk
        '/__clerk/:path*',
        // Rotas da API
        '/(api|trpc)(.*)',
    ],
};
