import Cabecalho from '@/components/Cabecalho';

/*
   PEDIDO PARA A IA - Página de Estágio (/estagio)

   1. Montar a página com o texto de conteudo/estagio.md: o que é estágio, obrigatório e não
      obrigatório, o que diz a Lei 11.788/2008, onde procurar (CIEE, Nube, SENAI-SP, empresas),
      estágio nos cursos do SENAI Valinhos, o português no processo seletivo, checklist e
      referências.
   2. Texto escrito direto no JSX (não precisa banco nem API).
   3. Os pontos da lei em cards pequenos; os sites de "onde procurar" como links que abrem em
      nova aba; o checklist como lista com ícone de check.

   Regras gerais (valem para todas as páginas):
   - Manter o <Cabecalho ativo="..." /> no topo e seguir o visual da home (cards brancos com borda
     #e3e8f2, cantos arredondados de 16px, títulos na fonte Geist em azul #0352af, CSS Modules).
   - Código simples, no nível das aulas: sem bibliotecas novas (só lucide-react para ícones).
   - Página que lê o banco é um componente async com "await connection()" dentro de um <Suspense>,
     igual ao src/components/Noticias.jsx (o projeto usa cacheComponents).
   - Ler o banco direto pelo Model (ex.: VideoModel.buscarTodos()), sem fetch para a própria API.
   - Responsiva (celular, tablet e computador) e sem dados pessoais (LGPD).
*/
export default function Estagio() {
    return <Cabecalho ativo="estagio" />;
}
