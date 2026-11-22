import Cabecalho from '@/components/Cabecalho';

/*
   PEDIDO PARA A IA - Página de Carreiras (/carreiras)

   1. Montar a página com o texto de conteudo/carreiras.md: introdução, tabela de profissões
      ligadas ao português, onde trabalham, o português nos cursos do SENAI Valinhos
      (Desenvolvimento de Sistemas, Mecânica e Eletroeletrônica) e "como começar".
   2. Texto escrito direto no JSX (não precisa banco nem API).
   3. Profissões em cards com ícone (lucide-react) em vez de tabela, se ficar melhor no celular.
   4. A parte do SENAI Valinhos em destaque (card azul claro).

   Regras gerais (valem para todas as páginas):
   - Manter o <Cabecalho ativo="..." /> no topo e seguir o visual da home (cards brancos com borda
     #e3e8f2, cantos arredondados de 16px, títulos na fonte Geist em azul #0352af, CSS Modules).
   - Código simples, no nível das aulas: sem bibliotecas novas (só lucide-react para ícones).
   - Página que lê o banco é um componente async com "await connection()" dentro de um <Suspense>,
     igual ao src/components/Noticias.jsx (o projeto usa cacheComponents).
   - Ler o banco direto pelo Model (ex.: VideoModel.buscarTodos()), sem fetch para a própria API.
   - Responsiva (celular, tablet e computador) e sem dados pessoais (LGPD).
*/
export default function Carreiras() {
    return <Cabecalho ativo="carreiras" />;
}
