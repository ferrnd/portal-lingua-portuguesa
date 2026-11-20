# Portal de Língua Portuguesa

Portal de Língua Portuguesa do Projeto Integrador Final do curso Técnico em Desenvolvimento de Sistemas do SENAI Valinhos.

Front-end e back-end ficam no mesmo projeto Next.js: as páginas ficam em `src/app` e a API fica em `src/app/api`.

## Estrutura do back-end

```
prisma/
├── schema.prisma               # Tabelas do banco
└── seed.js                     # Dados iniciais
prisma.config.js                # Configuração do Prisma
src/
├── app/api/noticias/
│   ├── route.js                # GET (todos) e POST
│   └── [id]/route.js           # GET (por id), PUT e DELETE
├── controllers/
│   └── noticiaController.js    # Validações e respostas
├── models/
│   └── NoticiaModel.js         # Acesso ao banco com o Prisma
└── lib/services/
    └── prismaClient.js         # Conexão com o PostgreSQL
```

O fluxo segue as camadas **Rota → Controller → Model**.

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

# 1. Instalar dependências
- npm i

# 2. Configurar `.env`
- Copie o `.env.example` para `.env`
- DATABASE_URL="postgresql://usuario:senha@localhost:porta/nome_do_banco_db"

# 3. Configurar schema.prisma
- crie suas tabelas

# 4. Gerar SQL
- npx prisma migrate dev --name init
- npx prisma generate

# 5. Semear dados no banco
- npx prisma db seed

# 6. Abrir Prisma Studio
- npx prisma studio

# 7. Rodar o projeto
- npm run dev

## Casos de erros

### Após alterar schema.prisma
- npx prisma migrate dev --name nome_da_alteracao (exemplo: adicionar_tabela_users)
- npx prisma generate

### Banco inconsistente (⚠️ APAGA TUDO)
- npx prisma migrate reset

### Apenas popular dados
- npx prisma db seed

### Dicas
|   Comando       | Apaga dados?    | Cria migrations? | Uso            |
| --------------- | ------------    | ---------------- | -------------- |
| `migrate dev`   | ❌ Não          | ✅ Sim          | Alterar schema |
| `db seed`       | ❌ Não          | ❌ Não          | Popular dados  |
| `migrate reset` | ✅ SIM          | ❌ Não          | DEV only       |

## Clonou repositório e não existe o banco em seu PC?
- npm i
- Siga os passos 2, 4 e 5

## Créditos das imagens
As fotos das notícias ficam em `public/noticias/`. Nas fotos com pessoas, os rostos e os nomes foram borrados.

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
