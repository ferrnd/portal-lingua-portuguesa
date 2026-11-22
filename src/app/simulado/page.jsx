import Cabecalho from '@/components/Cabecalho';

/*
   PEDIDO PARA A IA - Página do Simulado (/simulado)

   O PDF pede: responder às questões, finalizar a atividade e ver os resultados.

   1. Esta página (servidor) busca as questões com QuestaoModel.buscarTodos()
      (src/models/QuestaoModel.js) dentro de <Suspense> com await connection().
      Cada questão tem: enunciado, alternativas (lista com 5 textos), respostaCorreta (letra A-E)
      e explicacao. O enunciado pode ter vários parágrafos separados por "\n".
   2. Passar as questões para um componente de cliente src/components/Simulado.jsx ('use client')
      que controla as respostas com useState:
      - mostrar as 25 questões em cards numerados, com as alternativas A a E clicáveis;
      - destacar a alternativa escolhida;
      - botão "Finalizar simulado" (avisar se faltar alguma questão);
      - ao finalizar: mostrar a nota (acertos de 25), marcar cada questão de verde (certa) ou
        vermelho (errada), mostrar a resposta correta e a explicação;
      - botão "Refazer" que limpa tudo e volta ao topo.
   3. A correção é feita no próprio componente, comparando a letra escolhida com respostaCorreta.
   4. Usar os personagens de public/personagens (leitor.png, pensativo.png) no topo ou no
      resultado, se ficar bonito.
   5. Trocar os href="#" do card do simulado da home para /simulado.

   Regras gerais (valem para todas as páginas):
   - Manter o <Cabecalho ativo="..." /> no topo e seguir o visual da home (cards brancos com borda
     #e3e8f2, cantos arredondados de 16px, títulos na fonte Geist em azul #0352af, CSS Modules).
   - Código simples, no nível das aulas: sem bibliotecas novas (só lucide-react para ícones).
   - Página que lê o banco é um componente async com "await connection()" dentro de um <Suspense>,
     igual ao src/components/Noticias.jsx (o projeto usa cacheComponents).
   - Ler o banco direto pelo Model (ex.: VideoModel.buscarTodos()), sem fetch para a própria API.
   - Responsiva (celular, tablet e computador) e sem dados pessoais (LGPD).
*/
export default function Simulado() {
    return <Cabecalho ativo="simulado" />;
}
