# Divisão de tarefas

Quem fez o quê no Portal de Língua Portuguesa (Vocábulo). Seguindo a LGPD, a equipe aparece só pelo primeiro nome ou apelido.

O quadro completo, com todos os cartões e o histórico, está no Trello da equipe.

## Equipe

| Integrante | Papel principal |
| ---------- | --------------- |
| Fernando | Desenvolvimento do site e da API, banco de dados, login, publicação e documentação |
| Yasmin | Protótipo visual do site |
| Rebeca | Notícias |
| Luiz | Questões do simulado e página Carreiras |
| Piva | Questões de vestibular do simulado |
| Tupi | Vídeos e página Estágio |

## Tarefas

| Tarefa | Responsável | Entrega |
| ------ | ----------- | ------- |
| Criar o projeto Next.js e a estrutura de pastas | Fernando | `src/`, `docs/`, `conteudo/` |
| Modelar o banco (notícias, vídeos e questões) | Fernando | `prisma/schema.prisma` e migrations |
| API com Rota, Controller e Model para as três tabelas | Fernando | `src/app/api`, `src/controllers`, `src/models` |
| Login com Clerk e proteção das rotas no back-end | Fernando | `src/proxy.js`, `src/lib/services/autenticacao.js` |
| Painel administrativo com Ant Design e Toastify | Fernando | `src/app/admin` |
| Protótipo visual do site | Yasmin | Protótipo usado como base do design |
| Pesquisar e cadastrar as 15 notícias no seed | Rebeca | `prisma/seed.js` |
| Questões 1 a 15 do simulado | Piva | `prisma/seed.js` |
| Questões 16 a 25 do simulado | Luiz | `prisma/seed.js` |
| Selecionar os 15 vídeos | Tupi | `prisma/seed.js` |
| Texto da página Carreiras | Luiz | `conteudo/carreiras.md` |
| Texto da página Estágio | Tupi | `conteudo/estagio.md` |
| Texto da página Sobre nós | Equipe | `conteudo/sobre-nos.md` |
| Fotos das notícias, créditos e LGPD (rostos borrados) | Fernando | `public/noticias/`, README |
| Front-end: páginas, componentes e responsividade | Fernando | `src/app`, `src/components` |
| Publicação na Vercel | Fernando | Site no ar |
| Teste automatizado com Cypress e banco de teste | Fernando | `cypress/`, `docs/testes/` |
| Documentação (requisitos, backlog, decisões técnicas, testes) | Fernando | `docs/` |

## Em andamento

| Tarefa | Responsável |
| ------ | ----------- |
| Página do simulado | A definir |
| Páginas Dicas, Carreiras e Estágio (montar a partir dos textos de `conteudo/`) | A definir |
