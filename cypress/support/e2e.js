import { addClerkCommands } from '@clerk/testing/cypress';

// Adiciona o comando cy.clerkSignIn(), que faz o login real com a conta de teste
addClerkCommands({ Cypress, cy });

// O Cypress injeta um script na página para controlá-la, e o React acusa que o HTML
// ficou diferente do que o servidor mandou (erros 418, 423 e 425 de hidratação).
// Ignoramos só esses; qualquer outro erro do site continua derrubando o teste.
Cypress.on('uncaught:exception', (erro) => {
    if (/Minified React error #(418|423|425)/.test(erro.message)) {
        return false;
    }
});

// Só para o vídeo ficar legível: esconde do registro (lado esquerdo) as linhas das
// requisições internas do Clerk (e os redirecionamentos com códigos de sessão). Não muda nada no teste, só o que aparece na tela.
const registro = window.top.document;
if (!registro.querySelector('#esconde-clerk')) {
    const marcador = registro.createElement('meta');
    marcador.id = 'esconde-clerk';
    registro.head.appendChild(marcador);

    new MutationObserver(() => {
        registro.querySelectorAll('li.command').forEach((linha) => {
            const texto = linha.textContent;
            // Linhas do Clerk ou com códigos gigantes de sessão na URL
            if (/clerk|handshake/i.test(texto) || texto.length > 300) {
                linha.style.display = 'none';
            }
        });
    }).observe(registro.body, { childList: true, subtree: true });
}
