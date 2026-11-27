# Relatório de testes

Este documento registra os testes do Portal de Língua Portuguesa (Vocábulo): o que foi testado, como e qual foi o resultado.

## Ambiente

| Item | Valor |
| ---- | ----- |
| Data | 25/11/2026 |
| Servidor | Produção local (`npx next build` e `npx next start`) |
| Banco | PostgreSQL real no Supabase, com os dados do `prisma/seed.js` |
| Ferramenta | `curl` no terminal, para chamar a API e as páginas |
| Navegador | Conferência visual no computador (1366×768), no tablet (768×1024) e no celular (375×812) |

A saída completa dos testes da API e das páginas está em [`evidencias/testes-api-e-paginas.txt`](evidencias/testes-api-e-paginas.txt).

## 1. API: leitura

As rotas de leitura são públicas, porque o site precisa delas para mostrar o conteúdo.

| Teste | Esperado | Resultado |
| ----- | -------- | --------- |
| `GET /api/noticias` | 200 e a lista de notícias | ✅ 200, 15 notícias |
| `GET /api/noticias/1` | 200 e a notícia 1 | ✅ 200 |
| `GET /api/noticias/abc` | 400, id inválido | ✅ 400, "O ID enviado não é um número válido." |
| `GET /api/noticias/99999` | 404, não existe | ✅ 404, "Registro não encontrado." |
| `GET /api/noticias?titulo=enem` | 200 e só as notícias com "enem" no título | ✅ 200 |
| `GET /api/videos` | 200 e a lista de vídeos | ✅ 200, 15 vídeos |
| `GET /api/videos/1` | 200 e o vídeo 1 | ✅ 200 |
| `GET /api/questoes` | 200 e a lista de questões | ✅ 200, 25 questões |
| `GET /api/questoes/1` | 200 e a questão 1 | ✅ 200 |

## 2. API: escrita sem login

Criar, editar e excluir só podem funcionar com login, e essa verificação é feita no back-end (RNF04). Sem login, a API deve responder 401 em todas as rotas de escrita.

| Teste | Esperado | Resultado |
| ----- | -------- | --------- |
| `POST /api/noticias` | 401 | ✅ 401, "Faça login para continuar." |
| `PUT /api/noticias/1` | 401 | ✅ 401 |
| `DELETE /api/noticias/1` | 401 | ✅ 401 |
| `POST /api/videos` | 401 | ✅ 401 |
| `PUT /api/videos/1` | 401 | ✅ 401 |
| `DELETE /api/videos/1` | 401 | ✅ 401 |
| `POST /api/questoes` | 401 | ✅ 401 |
| `PUT /api/questoes/1` | 401 | ✅ 401 |
| `DELETE /api/questoes/1` | 401 | ✅ 401 |

Nenhum registro foi alterado ou apagado nesses testes.

## 3. Páginas

| Página | Esperado | Resultado |
| ------ | -------- | --------- |
| `/` | Abre com as últimas notícias do banco | ✅ 200 |
| `/noticias` | Lista as 15 notícias | ✅ 200 |
| `/noticias/1` | Abre o detalhe da notícia | ✅ 200 |
| `/noticias/99999` | Mostra a página de "não encontrada" | ✅ Mostra a página 404 do Next.js |
| `/videos` | Lista os vídeos do banco | ✅ 200 |
| `/sobre` | Abre | ✅ 200 |
| `/simulado`, `/dicas`, `/carreiras`, `/estagio` | Abrem | ✅ 200 (páginas ainda sem conteúdo) |
| `/admin` sem login | Manda para a tela de login | ✅ 307, redireciona para o login do Clerk |

## 4. Responsividade

O site foi aberto no navegador em três tamanhos de tela:

| Tela | O que foi conferido | Resultado |
| ---- | ------------------- | --------- |
| Computador (1366×768) | Cabeçalho com as abas, faixa do topo, notícias em grade, rodapé | ✅ |
| Tablet (768×1024) | Menu vira botão, faixa e abas se ajustam | ✅ |
| Celular (375×812) | Cabeçalho vira uma barra só, menu abre em um cartão, notícias em uma coluna | ✅ |

## 5. Teste automatizado com Cypress

O teste obrigatório do projeto (login e cadastro de uma notícia) está em [`cypress/e2e/cadastro-noticia.cy.js`](../../cypress/e2e/cadastro-noticia.cy.js). Ele roda contra o back-end real e um **PostgreSQL de teste** (um segundo projeto no Supabase, configurado no `.env.test`), sem mocks.

| Passo | O que o Cypress faz | O que ele confere |
| ----- | ------------------- | ----------------- |
| 1 | Abre o site e chama o `/admin` sem login | O link "Painel" leva ao `/admin`, e o `/admin` responde 307 para a tela de login do Clerk |
| 2 | Faz login no Clerk com a conta administrativa de teste (`+cypress`) | O Clerk mostra o usuário logado com o e-mail da conta de teste |
| 3 | Abre o painel | Aparecem o título "Painel" e "Conectado como administrador" |
| 4 | Clica em "Nova notícia", preenche os campos e salva | A API responde 201, aparece o aviso "Registro criado com sucesso!" e a notícia entra na tabela |
| 5 | Busca a notícia em `GET /api/noticias` | Ela está no banco com título, resumo, conteúdo, data e imagem iguais aos enviados |
| 6 | Abre `/noticias` | A notícia aparece na listagem pública |
| 7 | Abre a notícia | Título, data por extenso, os dois parágrafos e a imagem (carregada) estão certos |
| Limpeza | Exclui a notícia pelo painel | Aparece o aviso de exclusão, e a API não encontra mais a notícia |

**Resultado (26/11/2026):** ✅ 2 testes, 2 passaram, em 31 segundos. Logo depois, o banco de teste foi conferido: 15 notícias e nenhuma notícia de teste sobrando.

Evidências:

- Vídeo da execução: [`evidencias/cypress-cadastro-noticia.mp4`](evidencias/cypress-cadastro-noticia.mp4)
- Saída do terminal: [`evidencias/cypress-resultado.txt`](evidencias/cypress-resultado.txt)
- Prints de cada passo, tirados pelo próprio Cypress durante o teste, em [`evidencias/prints/`](evidencias/prints/):

| Print | O que mostra |
| ----- | ------------ |
| `passo-1-portal.png` | Página inicial do portal, antes do login |
| `passo-2-login.png` | Site depois do login com a conta de teste |
| `passo-3-painel.png` | Painel administrativo aberto, com a tabela de notícias do banco |
| `passo-4a-formulario.png` | Formulário de nova notícia preenchido |
| `passo-4b-cadastrada.png` | Aviso "Registro criado com sucesso!" e a notícia na tabela |
| `passo-5-banco.png` | Conferências em verde de que a notícia foi salva no banco com os dados certos |
| `passo-6-lista.png` | A notícia na listagem pública `/noticias` |
| `passo-7-detalhe.png` | Página de detalhe da notícia, com título, data, texto e imagem |
| `limpeza.png` | Aviso de exclusão da notícia de teste |

**Como o login funciona no teste:** o Clerk bloqueia robôs na tela de login. Por isso o teste usa o pacote oficial `@clerk/testing`, que libera o robô só durante o teste. O Cypress pede ao Clerk, pelo servidor (com a chave secreta, que nunca vai para o navegador), um token de login de uso único para a conta de teste, válido por 5 minutos, e entra com ele. O login é real: a sessão é criada pelo Clerk e o servidor libera o `/admin` por causa dela.

**Erro de hidratação ignorado:** o Cypress injeta um script na página para controlá-la, e o React acusa que o HTML ficou diferente do que o servidor mandou (erros 418, 423 e 425). O teste ignora só esses erros. Qualquer outro erro do site faz o teste falhar.

## 6. Simulado (teste manual no navegador)

| Teste | Esperado | Resultado |
| ----- | -------- | --------- |
| Abrir `/simulado` | Mostra as 25 questões do banco, com as alternativas A a E | ✅ |
| Escolher uma alternativa | A alternativa fica marcada e a barra de progresso avança | ✅ |
| Finalizar faltando questões | Aviso "Ainda faltam 24 questões..." e o simulado não é corrigido | ✅ |
| Responder as 25 e finalizar | Mostra a nota (acertos de 25) e uma mensagem conforme o resultado | ✅ |
| Correção | Questões certas com borda verde e "Acertou", erradas com borda vermelha e "Errou"; a alternativa correta fica verde, a errada marcada fica vermelha, e aparece a explicação | ✅ |
| Refazer | Limpa todas as respostas e volta ao topo | ✅ |
| Celular (375×812) | Alternativas em uma coluna e barra de progresso fixa no topo ao rolar | ✅ |

## 7. Pendentes

| Teste | Por que está pendente |
| ----- | --------------------- |
| Editar pelo painel, com login | O Cypress cobre cadastrar e excluir. Editar pode ser testado à mão com a conta logada, guardando os prints em `evidencias/`. |
| Validação com login (ex.: enviar notícia sem título deve dar 400) | Sem login, a API responde 401 antes de validar os campos. Testar junto com o item acima. |

## Conclusão

Os 29 testes pelo terminal e os 2 testes do Cypress passaram. A API devolve os dados do banco real, responde com mensagens claras para id inválido e registro inexistente e bloqueia criar, editar e excluir sem login. O Cypress comprovou o fluxo completo: login no Clerk, cadastro pelo painel, gravação no PostgreSQL, listagem pública e detalhe da notícia. O simulado foi testado à mão no navegador. Falta a validação com login, listada acima.
