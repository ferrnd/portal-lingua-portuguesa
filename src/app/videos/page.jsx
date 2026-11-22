import Cabecalho from '@/components/Cabecalho';

/*
   PEDIDO PARA A IA - Página de Vídeos (/videos)

   1. Buscar os vídeos do banco com VideoModel.buscarTodos() (src/models/VideoModel.js).
      Cada vídeo tem: titulo, descricao e youtubeId (os 11 caracteres do link do YouTube).
   2. Mostrar em grade (2 ou 3 colunas): o vídeo incorporado em um iframe com
      src="https://www.youtube.com/embed/{youtubeId}", proporção 16:9 (aspect-ratio), e embaixo
      o título e a descrição. Usar title no iframe e allowFullScreen.
   3. Título da página "Vídeos" com uma frase curta de introdução.
   4. Se não houver vídeos, mostrar uma mensagem amigável.
   5. Trocar o href="#" do botão de vídeos da home para /videos, se houver.

   Regras gerais (valem para todas as páginas):
   - Manter o <Cabecalho ativo="..." /> no topo e seguir o visual da home (cards brancos com borda
     #e3e8f2, cantos arredondados de 16px, títulos na fonte Geist em azul #0352af, CSS Modules).
   - Código simples, no nível das aulas: sem bibliotecas novas (só lucide-react para ícones).
   - Página que lê o banco é um componente async com "await connection()" dentro de um <Suspense>,
     igual ao src/components/Noticias.jsx (o projeto usa cacheComponents).
   - Ler o banco direto pelo Model (ex.: VideoModel.buscarTodos()), sem fetch para a própria API.
   - Responsiva (celular, tablet e computador) e sem dados pessoais (LGPD).
*/
export default function Videos() {
    return <Cabecalho ativo="videos" />;
}
