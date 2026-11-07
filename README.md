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
├── app/api/exemplos/
│   ├── route.js                # GET (todos) e POST
│   └── [id]/route.js           # GET (por id), PUT e DELETE
├── controllers/
│   └── exemploController.js    # Validações e respostas
├── models/
│   └── ExemploModel.js         # Acesso ao banco com o Prisma
└── lib/services/
    └── prismaClient.js         # Conexão com o PostgreSQL
```

O fluxo segue as camadas **Rota → Controller → Model**.

## Rotas da API

| Método | Rota | O que faz |
| ------ | ---- | --------- |
| GET | `/api/exemplos` | Lista os registros (aceita filtros por query, ex.: `?nome=alpha`) |
| GET | `/api/exemplos/:id` | Busca um registro pelo id |
| POST | `/api/exemplos` | Cria um registro |
| PUT | `/api/exemplos/:id` | Atualiza um registro |
| DELETE | `/api/exemplos/:id` | Exclui um registro |

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
