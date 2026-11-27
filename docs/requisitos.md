# Requisitos

Requisitos do Portal de Língua Portuguesa (Vocábulo), baseados no documento do Projeto Integrador Final.

## Requisitos funcionais

| Código | Descrição | Prioridade |
| ------ | --------- | ---------- |
| RF01 | O visitante vê, na página inicial, a apresentação da disciplina, os destaques e as notícias mais recentes. | Alta |
| RF02 | O visitante vê a lista de notícias, carregada do banco de dados, com no mínimo 15 notícias. | Alta |
| RF03 | O visitante abre a página de detalhe de cada notícia, com título, imagem, data, conteúdo completo e o link para a reportagem original. | Alta |
| RF04 | O visitante assiste aos vídeos sobre Língua Portuguesa incorporados no próprio site (no mínimo 3). | Alta |
| RF05 | O visitante responde ao simulado, finaliza a atividade e vê o resultado com a explicação de cada questão. | Alta |
| RF06 | O visitante lê a página Carreiras, com profissões ligadas à disciplina e aos cursos do SENAI Valinhos. | Média |
| RF07 | O visitante lê a página Dicas, com orientações de estudo e preparação para vestibulares. | Média |
| RF08 | O visitante lê a página Estágio, com informações sobre estágios ligados aos cursos do SENAI Valinhos. | Média |
| RF09 | O visitante lê a página Sobre nós, com a apresentação do projeto e da equipe, sem dados pessoais. | Média |
| RF10 | O visitante navega entre as páginas pelo menu do cabeçalho. | Alta |
| RF11 | O administrador entra no painel administrativo por meio de login (Clerk). | Alta |
| RF12 | O administrador cadastra, consulta, edita e exclui notícias. | Alta |
| RF13 | O administrador cadastra, consulta, edita e exclui vídeos e questões do simulado. | Média |
| RF14 | O sistema valida os dados enviados e mostra mensagens de erro claras quando algo estiver errado. | Alta |
| RF15 | O sistema mostra avisos (toast) de sucesso ou erro após cada ação no painel. | Média |

## Requisitos não funcionais

| Código | Descrição |
| ------ | --------- |
| RNF01 | A aplicação é feita em Next.js 16, com App Router, pasta `src` e JavaScript, sem TypeScript. |
| RNF02 | Os dados ficam em um banco PostgreSQL próprio da equipe, acessado pelo Prisma ORM. |
| RNF03 | O back-end segue as camadas Rota, Controller e Model e usa os Route Handlers do Next.js. |
| RNF04 | Criar, editar e excluir só funcionam com login, e essa verificação é feita no back-end, não apenas na tela. |
| RNF05 | O cadastro de novos usuários no Clerk fica fechado: só as contas da equipe acessam o painel. |
| RNF06 | Senhas, chaves e endereços do banco ficam em variáveis de ambiente e nunca são enviados ao GitHub. |
| RNF07 | O site funciona em computadores, tablets e celulares (responsivo). |
| RNF08 | A identidade visual conversa com os demais portais e com o Portal Integrador. |
| RNF09 | A navegação é simples, organizada e acessível, com textos alternativos nas imagens. |
| RNF10 | O código usa componentes React reutilizáveis e CSS Modules. |
| RNF11 | O projeto segue a LGPD: sem nomes completos, dados pessoais ou pessoas identificáveis nas imagens. |
| RNF12 | As imagens das notícias são referenciadas por URL, sem upload de arquivos. |
| RNF13 | A aplicação é publicada na Vercel e funciona em ambiente de produção. |
| RNF14 | O fluxo principal é testado de ponta a ponta com Cypress, usando o banco real, sem mocks. |
