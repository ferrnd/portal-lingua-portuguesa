// Teste obrigatório do Projeto Integrador: login e cadastro de uma notícia.
// Roda contra o back-end real e o PostgreSQL de teste, sem mocks.

// Título único, para o teste nunca confundir (nem apagar) uma notícia de verdade
const titulo = `Notícia de teste Cypress ${Date.now()}`;

const noticia = {
    titulo,
    resumo: 'Resumo criado automaticamente pelo teste do Cypress.',
    conteudo: 'Primeiro parágrafo do teste.\nSegundo parágrafo do teste.',
    dataPublicacao: '2026-12-31',
    urlImagem: 'https://raw.githubusercontent.com/ferrnd/portal-lingua-portuguesa/main/public/noticias/mapa-brasil.webp',
};

// Login real no Clerk com a conta administrativa de teste (+cypress).
// O token de uso único vem do Clerk e só vale por 5 minutos.
function entrarComContaDeTeste() {
    cy.window().its('Clerk.loaded').should('eq', true);
    cy.window().then((janela) => {
        // Se já estiver logado (por exemplo, na limpeza depois do teste), não entra de novo
        if (janela.Clerk.user) return;
        cy.task('tokenDeLogin').then((ticket) => {
            cy.clerkSignIn({ strategy: 'ticket', ticket });
        });
    });
    cy.window().its('Clerk.user').should('exist');
    // Confere que entrou com a conta de teste, sem mostrar o e-mail no vídeo (LGPD)
    cy.window().then((janela) => {
        const email = janela.Clerk.user.primaryEmailAddress.emailAddress;
        if (email !== Cypress.env('email')) {
            throw new Error('O login não foi feito com a conta de teste.');
        }
        cy.log('Logado com a conta de teste');
    });
}

describe('Login e cadastro de uma notícia', () => {
    // 1. Acessar o portal e ir para o login administrativo.
    // Sem login, o /admin manda para a tela de login do Clerk.
    // (Teste separado: o Cypress limpa os cookies antes do próximo.)
    it('sem login, o painel manda para a tela de login', () => {
        cy.log('**Passo 1: abrir o portal e tentar entrar no painel sem login**');
        cy.visit('/');
        cy.contains('a', 'Painel').should('have.attr', 'href', '/admin');
        cy.request({ url: '/admin', followRedirect: false }).then((resposta) => {
            expect(resposta.status).to.eq(307);
            expect(resposta.headers.location).to.contain('sign-in');
        });
        cy.screenshot('passo-1-portal', { capture: 'viewport', overwrite: true });
    });

    it('cadastra uma notícia pelo painel e ela aparece no site', () => {
        cy.visit('/');

        // 2. Login com o Clerk, usando a conta administrativa de teste
        cy.log('**Passo 2: fazer login no Clerk com a conta de teste**');
        entrarComContaDeTeste();

        cy.screenshot('passo-2-login', { capture: 'viewport', overwrite: true });

        // 3. Acessar o painel administrativo (área protegida)
        cy.log('**Passo 3: abrir o painel administrativo**');
        cy.visit('/admin');
        cy.contains('h1', 'Painel').should('be.visible');
        cy.contains('Conectado como administrador').should('be.visible');
        cy.get('.ant-table-row').should('have.length.greaterThan', 0);
        cy.screenshot('passo-3-painel', { capture: 'viewport', overwrite: true });

        // 4. Cadastrar uma nova notícia (espera a tabela carregar do banco antes)
        cy.log('**Passo 4: cadastrar uma nova notícia**');
        cy.get('.ant-table-row').should('have.length.greaterThan', 0);
        cy.contains('button', 'Nova notícia').click();
        cy.get('.ant-modal').should('be.visible');
        cy.get('#titulo').type(noticia.titulo);
        cy.get('#resumo').type(noticia.resumo);
        cy.get('#conteudo').type(noticia.conteudo);
        cy.get('#dataPublicacao').type(noticia.dataPublicacao);
        cy.get('#urlImagem').type(noticia.urlImagem);
        cy.screenshot('passo-4a-formulario', { capture: 'viewport', overwrite: true });
        cy.intercept('POST', '/api/noticias').as('cadastro');
        cy.contains('button', 'Salvar').click();
        // intercept só observa a requisição: ela vai de verdade para o back-end
        cy.wait('@cadastro').its('response.statusCode').should('eq', 201);
        cy.contains('Registro criado com sucesso!').should('be.visible');
        cy.contains('td', noticia.titulo).should('be.visible');
        cy.screenshot('passo-4b-cadastrada', { capture: 'viewport', overwrite: true });

        // 5. Validar que a notícia foi salva no PostgreSQL (pela API, que usa o Prisma)
        cy.log('**Passo 5: conferir que a notícia foi salva no banco**');
        cy.request(`/api/noticias?titulo=${encodeURIComponent(noticia.titulo)}`).then((resposta) => {
            expect(resposta.status).to.eq(200);
            expect(resposta.body).to.have.length(1);
            expect(resposta.body[0]).to.include({
                titulo: noticia.titulo,
                resumo: noticia.resumo,
                conteudo: noticia.conteudo,
                urlImagem: noticia.urlImagem,
            });
            expect(resposta.body[0].dataPublicacao).to.contain(noticia.dataPublicacao);
        });

        // Print da tela inteira do Cypress: mostra as conferências do banco em verde
        cy.screenshot('passo-5-banco', { capture: 'runner', overwrite: true });

        // 6. Consultar a notícia na listagem pública
        cy.log('**Passo 6: procurar a notícia na lista pública**');
        cy.visit('/noticias');
        cy.contains('h3', noticia.titulo).should('be.visible').scrollIntoView();
        cy.screenshot('passo-6-lista', { capture: 'viewport', overwrite: true });

        // 7. Abrir a notícia e conferir o detalhe
        cy.log('**Passo 7: abrir a notícia e conferir os dados**');
        cy.contains('h3', noticia.titulo).click();
        cy.location('pathname').should('match', /^\/noticias\/\d+$/);
        cy.contains('h1', noticia.titulo).should('be.visible');
        cy.contains('31 de dezembro de 2026').should('be.visible');
        cy.contains('Primeiro parágrafo do teste.').should('be.visible');
        cy.contains('Segundo parágrafo do teste.').should('be.visible');
        cy.get(`img[alt="${noticia.titulo}"]`)
            .should('have.attr', 'src', noticia.urlImagem)
            .and(($img) => expect($img[0].naturalWidth).to.be.greaterThan(0));
        cy.screenshot('passo-7-detalhe', { capture: 'viewport', overwrite: true });
    });

    // Limpeza: apaga a notícia criada, pelo painel, mesmo se o teste acima falhar no meio
    after(() => {
        cy.log('**Limpeza: apagar a notícia de teste**');
        cy.visit('/');
        entrarComContaDeTeste();
        cy.request({ url: `/api/noticias?titulo=${encodeURIComponent(titulo)}`, failOnStatusCode: false }).then((resposta) => {
            if (!Array.isArray(resposta.body) || resposta.body.length === 0) return;

            cy.visit('/admin');
            cy.contains('tr', titulo).contains('button', 'Excluir').click();
            cy.contains('.ant-popconfirm button', 'Excluir').click();
            cy.contains('foi deletado com sucesso').should('be.visible');
            cy.screenshot('limpeza', { capture: 'viewport', overwrite: true });
            cy.request({ url: `/api/noticias?titulo=${encodeURIComponent(titulo)}`, failOnStatusCode: false })
                .its('body')
                .should('not.be.an', 'array');
        });
    });
});
