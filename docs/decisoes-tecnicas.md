# Decisões técnicas

Este documento explica as principais escolhas feitas no desenvolvimento do Portal de Língua Portuguesa (Vocábulo) e o motivo de cada uma.

## Front-end e back-end no mesmo projeto

O site e a API ficam no mesmo projeto Next.js 16. As páginas estão em `src/app` e a API em `src/app/api`, usando os Route Handlers do próprio Next.js. Assim, não foi preciso manter dois projetos separados, e o deploy na Vercel publica tudo de uma vez.

## Organização do back-end

O back-end segue as camadas **Rota → Controller → Model**, como no modelo apresentado pelo professor:

- **Rota** (`src/app/api/...`): recebe a requisição e chama o controller.
- **Controller** (`src/controllers`): valida os dados e monta a resposta.
- **Model** (`src/models`): conversa com o banco de dados pelo Prisma.

Existe um conjunto de rota, controller e model para cada tabela: notícias, vídeos e questões.

## Banco de dados

O banco é um **PostgreSQL** hospedado no **Supabase**, acessado pelo **Prisma 7**. O endereço do banco fica nas variáveis de ambiente (`.env`), que não vão para o GitHub. O arquivo `prisma/seed.js` preenche o banco com as 15 notícias, os 15 vídeos e as 25 questões, e sempre reinicia os ids a partir de 1.

## Login e proteção das rotas

O login é feito com o **Clerk**, exigido pelo projeto. A proteção acontece em dois lugares:

- O arquivo `src/proxy.js` (no Next.js 16, o antigo `middleware.js` passou a se chamar `proxy.js`) manda para a tela de login quem tenta abrir o `/admin` sem estar logado.
- Os controllers verificam o login antes de criar, editar ou excluir qualquer registro. Sem login, a API responde com o erro 401.

As senhas e as sessões ficam por conta do Clerk, que já usa hash para as senhas e tokens para identificar quem está logado. Por isso o projeto não precisa de bibliotecas próprias de criptografia. O cadastro de novos usuários no Clerk fica fechado, e só as contas da equipe acessam o painel.

## Painel administrativo

O painel em `/admin` usa o **Ant Design** para a tabela, os formulários e as janelas de confirmação, e o **React Toastify** para os avisos de sucesso e erro. Uma mesma tela de cadastro (`Crud.jsx`) serve para notícias, vídeos e questões, mudando só a configuração de cada uma.

## Estilo e identidade visual

O estilo é feito com **CSS Modules**, um arquivo de estilo para cada componente. Os ícones vêm da biblioteca **lucide-react**, a mesma usada no Portal Integrador. O visual é limpo, com fundo branco, a fonte Manrope e o azul como cor principal, combinando com os demais portais. O topo de cada página é uma faixa azul com cantos arredondados, e o cabeçalho fica por cima dela em duas abas brancas ligadas à faixa por uma curva. Essa curva é um desenho SVG usado como fundo no CSS, sem biblioteca.

## Imagens e LGPD

As fotos das notícias foram escolhidas em fontes que permitem o uso com crédito, como Wikimedia Commons, MEC, Pexels e Unsplash. Os créditos estão no README. Fotos com pessoas tiveram os rostos e nomes borrados, e os textos citam a equipe apenas pelo primeiro nome, seguindo a LGPD.

## Testes

O fluxo de login e cadastro de notícias é testado com **Cypress**, de ponta a ponta, sem dados falsos (mocks). O teste usa um **banco de teste separado** (um segundo projeto no Supabase, no `.env.test`), para nunca mexer nas notícias de verdade, e uma conta de teste exclusiva no Clerk. Para o Clerk aceitar o login do robô, usamos o pacote oficial `@clerk/testing`, que entra com um token de uso único gerado pelo servidor. O resultado está em `docs/testes/relatorio.md`.
