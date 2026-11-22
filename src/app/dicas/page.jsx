import Cabecalho from '@/components/Cabecalho';

/*
   PEDIDO PARA A IA - Página de Dicas (/dicas)

   1. Montar a página com o texto de conteudo/dicas.md (redação do Enem, erros comuns,
      como ler mais, interpretação de texto, onde tirar dúvidas e fontes).
   2. Texto escrito direto no JSX (não precisa banco nem API).
   3. Cada seção em um card; a tabela das 5 competências do Enem e a tabela de erros comuns
      como tabelas simples e legíveis no celular.
   4. Pode usar o personagem pensativo (public/personagens/pensativo.png) em um canto.

   Regras gerais (valem para todas as páginas):
   - Manter o <Cabecalho ativo="..." /> no topo e seguir o visual da home (cards brancos com borda
     #e3e8f2, cantos arredondados de 16px, títulos na fonte Geist em azul #0352af, CSS Modules).
   - Código simples, no nível das aulas: sem bibliotecas novas (só lucide-react para ícones).
   - Página que lê o banco é um componente async com "await connection()" dentro de um <Suspense>,
     igual ao src/components/Noticias.jsx (o projeto usa cacheComponents).
   - Ler o banco direto pelo Model (ex.: VideoModel.buscarTodos()), sem fetch para a própria API.
   - Responsiva (celular, tablet e computador) e sem dados pessoais (LGPD).
*/
export default function Dicas() {
    return <Cabecalho ativo="dicas" />;
}
