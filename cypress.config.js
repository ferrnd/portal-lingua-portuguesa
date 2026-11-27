import dotenv from 'dotenv';
import { defineConfig } from 'cypress';

// Lê o .env da pasta do projeto, mesmo se o comando rodar de outra pasta
dotenv.config({ path: new URL('./.env', import.meta.url) });
import { clerkSetup } from '@clerk/testing/cypress';

export default defineConfig({
    e2e: {
        // Site rodando com o banco de teste (npm run start:teste)
        baseUrl: 'http://localhost:3001',
        video: true,
        screenshotOnRunFailure: true,
        // O painel usa o Ant Design, que demora um pouco para montar a tabela
        defaultCommandTimeout: 15000,
        env: {
            // A conta de teste fica no .env (nunca no código)
            email: process.env.CYPRESS_EMAIL,
        },
        setupNodeEvents(on, config) {
            on('task', {
                // Pede ao Clerk um token de login de uso único para a conta de teste.
                // Roda no Node (fora do navegador), então a chave secreta nunca vai para o teste.
                async tokenDeLogin() {
                    const cabecalhos = {
                        Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
                        'Content-Type': 'application/json',
                    };
                    const email = encodeURIComponent(process.env.CYPRESS_EMAIL);
                    const usuarios = await fetch(`https://api.clerk.com/v1/users?email_address=${email}`, {
                        headers: cabecalhos,
                    }).then((r) => r.json());

                    if (!Array.isArray(usuarios) || usuarios.length === 0) {
                        throw new Error('Conta de teste não encontrada no Clerk.');
                    }

                    const token = await fetch('https://api.clerk.com/v1/sign_in_tokens', {
                        method: 'POST',
                        headers: cabecalhos,
                        body: JSON.stringify({ user_id: usuarios[0].id, expires_in_seconds: 300 }),
                    }).then((r) => r.json());

                    return token.token;
                },
            });
            // Pega no Clerk um "token de teste" que libera o login do robô
            return clerkSetup({
                config,
                options: { publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY },
            });
        },
    },
});
