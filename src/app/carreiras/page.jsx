import TopoPagina from '@/components/TopoPagina';

/*
   PEDIDO PARA A IA - Página de Carreiras (/carreiras)
   Cole este comentário inteiro na IA, junto com o arquivo conteudo/carreiras.md.

   O QUE FAZER
   1. Montar a página com o texto de conteudo/carreiras.md: profissões ligadas à Língua Portuguesa
      e os cursos do SENAI Valinhos.
   2. Cada profissão em um card da grade (ícone do lucide-react, nome e descrição curta).
   3. Os cursos do SENAI Valinhos num bloco à parte, em um card azul com textura, com um botão
      de contorno levando ao site do SENAI.

   PADRÃO DE DESIGN DO PORTAL (copiar junto, vale para todas as páginas)
   Olhe a página inicial (src/app/page.jsx e page.module.css) e siga o mesmo visual:
   - Fundo branco. Manter o <TopoPagina titulo="..." subtitulo="..." /> no topo (faixa azul).
   - Conteúdo dentro de <main className="container"> com um espaço em cima (padding-top: 48px).
   - Títulos de seção: cor #0b1220, font-weight 700, cerca de 1.6rem a 2.4rem.
   - Texto de apoio: cor var(--cinza), 0.95rem.
   - Cards: border-radius 14px, padding 26px, sem sombra forte. Três estilos, como na home:
       1) cinza-claro com textura de parede:
          background: linear-gradient(rgba(240, 242, 245, 0.55), rgba(240, 242, 245, 0.55)),
                      url('/textura.webp') center / 420px;
          background-color: #eef1f4; background-blend-mode: normal, multiply;
       2) azul com textura (texto branco):
          background: linear-gradient(rgba(37, 99, 235, 0.74), rgba(37, 99, 235, 0.74)),
                      url('/textura-concreto.webp') center / cover;
       3) branco com borda: border: 1px solid var(--borda); background: var(--branco);
   - Fotos: border-radius 10px a 14px, object-fit: cover.
   - Botões: border-radius 10px (nada de pílula). Só um botão principal por tela:
       principal = azul com a textura acima; secundário = contorno (border: 1px solid #c9ced6, texto #0b1220);
       terciário = cinza-escuro #2a3242 que fica preto #0b1220 no hover.
   - Cores: use as variáveis do globals.css (--azul-escuro, --azul-claro, --cinza, --borda, --branco).
   - Ícones só do lucide-react (ex.: Lightbulb, Briefcase, GraduationCap, ArrowRight).
   - Grade de cards: display: grid; repeat(3, 1fr) no computador, 2 no tablet (até 1000px) e 1 no celular (até 600px).

   REGRAS DE CÓDIGO
   - Código simples, no nível das aulas: CSS Modules (page.module.css ao lado da página), sem bibliotecas novas.
   - Texto escrito direto no JSX (esta página não usa banco nem API).
   - Nada de lista + .map para conteúdo fixo: escreva cada card direto no JSX.
   - Condicionais com ternário dentro do JSX.
   - Responsiva (celular, tablet e computador) e sem dados pessoais (LGPD).
*/
export default function Carreiras() {
    return (
        <>
            <TopoPagina titulo="Carreiras" subtitulo="Profissões em que o Português faz diferença." />
            <main className="container"></main>
        </>
    );
}
