# Vocábulo · Portal de Língua Portuguesa

Portal de Língua Portuguesa do **Grupo 4** no Projeto Integrador Final do curso Técnico em Desenvolvimento de Sistemas do SENAI Valinhos. Reúne notícias, videoaulas, dicas de estudo e simulado para o Ensino Médio e o vestibular.

Front-end e back-end ficam no mesmo projeto Next.js: as páginas ficam em `src/app` e a API em `src/app/api`.

## Funcionalidades

- Página inicial com a notícia mais recente em destaque, as últimas notícias, o convite para o simulado, um vídeo e dicas rápidas.
- Lista de notícias e página de detalhe de cada uma, com o link para a reportagem original.
- Página de vídeos, com as aulas incorporadas do YouTube.
- Simulado com 25 questões de vestibular: responder, finalizar e ver a nota, com a resposta certa e a explicação de cada questão.
- Cartão interativo "Uma vírgula muda tudo" na página inicial.
- Painel administrativo com login (Clerk) para cadastrar, editar e excluir notícias, vídeos e questões, com avisos de sucesso e erro.
- Layout responsivo para computador, tablet e celular.

**Em desenvolvimento:** Dicas, Carreiras e Estágio.

## Tecnologias

| Tecnologia | Uso |
| ---------- | --- |
| Next.js 16 | Framework (App Router, pasta `src`, JavaScript) |
| React 19 | Componentes da interface |
| PostgreSQL (Supabase) | Banco de dados |
| Prisma 7 | Acesso ao banco |
| Clerk | Login do painel administrativo |
| Ant Design | Tabela e formulários do painel |
| React Toastify | Avisos de sucesso e erro |
| lucide-react | Ícones |
| CSS Modules | Estilo por componente |
| Cypress | Teste automatizado de ponta a ponta |
| Vercel | Publicação |

## Estrutura

```
prisma/
├── schema.prisma          # Tabelas do banco
├── migrations/            # Histórico de alterações do banco
└── seed.js                # 15 notícias, 15 vídeos e 25 questões
src/
├── app/                   # Páginas (/, /noticias, /videos, /admin...)
│   └── api/               # Rotas da API (notícias, vídeos e questões)
├── controllers/           # Validações e respostas
├── models/                # Acesso ao banco com o Prisma
├── components/            # Componentes do site (cabeçalho, rodapé, cards...)
├── lib/services/          # Conexão com o banco e verificação de login
└── proxy.js               # Protege o /admin com o Clerk
conteudo/                  # Textos das páginas (Carreiras, Dicas, Estágio, Sobre nós)
docs/                      # Requisitos, backlog, decisões técnicas, Scrum e testes
```

O back-end segue as camadas **Rota → Controller → Model**. Criar, editar e excluir exigem login, e essa verificação é feita no back-end: sem login, a API responde 401.

## Rotas da API

| Método | Rota | O que faz |
| ------ | ---- | --------- |
| GET | `/api/noticias` | Lista as notícias (aceita filtro por título, ex.: `?titulo=enem`) |
| GET | `/api/noticias/:id` | Busca uma notícia pelo id |
| POST | `/api/noticias` | Cria uma notícia |
| PUT | `/api/noticias/:id` | Atualiza uma notícia |
| DELETE | `/api/noticias/:id` | Exclui uma notícia |
| GET | `/api/questoes` | Lista as questões do simulado |
| GET | `/api/questoes/:id` | Busca uma questão pelo id |
| POST | `/api/questoes` | Cria uma questão (5 alternativas e resposta de A a E) |
| PUT | `/api/questoes/:id` | Atualiza uma questão |
| DELETE | `/api/questoes/:id` | Exclui uma questão |
| GET | `/api/videos` | Lista os vídeos (aceita filtro por título, ex.: `?titulo=crase`) |
| GET | `/api/videos/:id` | Busca um vídeo pelo id |
| POST | `/api/videos` | Cria um vídeo (o `youtubeId` tem 11 caracteres) |
| PUT | `/api/videos/:id` | Atualiza um vídeo |
| DELETE | `/api/videos/:id` | Exclui um vídeo |

## Como rodar

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Copie o `.env.example` para `.env` e preencha as variáveis do banco (`DATABASE_URL` e `DIRECT_URL`) e do Clerk. O `.env` nunca vai para o GitHub.

3. Crie as tabelas e preencha o banco:

   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

4. Rode o projeto e abra http://localhost:3000:

   ```bash
   npm run dev
   ```

### Comandos úteis do Prisma

| Comando | Apaga dados? | Uso |
| ------- | ------------ | --- |
| `npx prisma migrate dev --name nome` | Não | Depois de alterar o `schema.prisma` |
| `npx prisma db seed` | Não | Preencher o banco com os dados iniciais |
| `npx prisma studio` | Não | Ver e editar os dados no navegador |
| `npx prisma migrate reset` | **Sim** | Recriar o banco do zero (só em desenvolvimento) |

## Teste automatizado (Cypress)

O teste faz login no Clerk com a conta de teste, cadastra uma notícia pelo painel, confere no banco, na lista pública e no detalhe, e apaga a notícia no final. Ele usa um **banco de teste** separado, para não mexer nas notícias de verdade.

1. Crie o `.env.test` com `DATABASE_URL` e `DIRECT_URL` do banco de teste e prepare o banco:

   ```bash
   node --env-file=.env.test node_modules/prisma/build/index.js migrate deploy
   node --env-file=.env.test node_modules/prisma/build/index.js db seed
   ```

2. No `.env`, preencha `CYPRESS_EMAIL` com o e-mail da conta de teste do Clerk.

3. Gere o build e suba o site com o banco de teste (porta 3001):

   ```bash
   npm run build
   npm run start:teste
   ```

4. Em outro terminal, rode o teste:

   ```bash
   npm run test:e2e
   ```

## Documentação

| Documento | Conteúdo |
| --------- | -------- |
| [Requisitos](docs/requisitos.md) | Requisitos funcionais e não funcionais |
| [Product Backlog](docs/product-backlog.md) | Histórias de usuário e status |
| [Decisões técnicas](docs/decisoes-tecnicas.md) | O que foi escolhido e por quê |
| [Divisão de tarefas](docs/scrum/divisao-tarefas.md) | Quem fez o quê |
| [Atas](docs/scrum/atas/) | Registro das reuniões |
| [Relatório de testes](docs/testes/relatorio.md) | Testes feitos e resultados |

O quadro completo das tarefas está no Trello da equipe.

## Equipe

Grupo 4: Fernando, Luiz, Piva, Rebeca, Tupi e Yasmin. Seguindo a LGPD, a equipe aparece só pelo primeiro nome ou apelido.

## Créditos das imagens
As notícias usam a imagem por link externo, como pede o projeto. Sempre que possível, o link aponta para a fonte original (Wikimedia Commons, MEC, Jornal da Unesp, Jornal da USP, Pexels). As fotos que editamos, ou que não têm link original disponível, ficam em `public/noticias/` e são usadas pelo link raw do GitHub. Nas fotos com pessoas, os rostos e os nomes foram borrados.

| Notícia | Arquivo | Crédito | Licença |
| ------- | ------- | ------- | ------- |
| 1 | `analfabetismo-ibge.webp` | Geovana Albuquerque/Agência Brasília | CC BY 2.0 |
| 2 | `enem-2026-cadernos.webp` | Bruna Araújo/MEC | Uso com crédito |
| 3 | `jabuti-cerimonia.webp` | Sintegrity/Wikimedia Commons | CC BY-SA 4.0 |
| 4 | `theatro-da-paz-belem.webp` | Prburley/Wikimedia Commons | CC BY 4.0 |
| 5 | `parede-de-livros.webp` | Robert Anasch/Unsplash | Licença Unsplash |
| 6 | `monumento-camoes.webp` | Vitor Oliveira/Wikimedia Commons | CC BY-SA 2.0 |
| 7 | `livros-mortatti.webp` | Jornal da Unesp | Uso com crédito |
| 8 | `estacao-vila-das-belezas.webp` | Geogast/Wikimedia Commons | CC BY 4.0 |
| 9 | `feira-de-santana.webp` | Ricardo Patrese Soares Lima/Wikimedia Commons | CC BY-SA 4.0 |
| 10 | `mapa-brasil.webp` | Jornal da USP | Uso com crédito |
| 11 | `araraquara.webp` | Yuri Sabino/Wikimedia Commons | Domínio público |
| 12 | `enem-2026-linguagens.webp` | Bruna Araújo/MEC (recorte) | Uso com crédito |
| 13 | `placa-machado-de-assis.webp` | Jonathan Borba/Pexels | Licença Pexels |
| 14 | `bienal-livro-sp-2026.webp` | Alesp (rostos borrados) | Uso com crédito |
| 15 | `formacao-de-leitores.webp` | SME/Prefeitura de São Paulo (rostos e nomes borrados) | Uso com crédito |

### Outras imagens

| Arquivo | Onde aparece | Crédito |
| ------- | ------------ | ------- |
| `hero.webp` | Fundo do topo da página inicial | Unsplash (foto "vintage books collection"), em preto e branco |
| `anuncio.webp` | Fundo do anúncio do simulado, na página inicial | Unsplash (foto de um gabarito sendo preenchido), em preto e branco |
| `textura.webp` | Fundo do cartão da vírgula | Textura de parede escolhida pela equipe, clareada |
| `textura-concreto.webp` | Botão principal e cartão azul da página inicial | Textura de concreto escolhida pela equipe |
