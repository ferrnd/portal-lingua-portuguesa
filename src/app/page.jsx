import { Suspense } from 'react';
import { connection } from 'next/server';
import { ArrowRight, ClipboardCheck, Lightbulb, PlayCircle, Plus } from 'lucide-react';
import CartaoVirgula from '@/components/CartaoVirgula';
import NoticiaModel from '@/models/NoticiaModel.js';
import QuestaoModel from '@/models/QuestaoModel.js';
import VideoModel from '@/models/VideoModel.js';
import styles from './page.module.css';

function dataCurta(data) {
    return data.toLocaleDateString('pt-BR', { timeZone: 'UTC', day: 'numeric', month: 'long' });
}

// Notícias do banco: 3 em destaque nos cartões e mais 5 na lista ao lado do simulado
async function NoticiasDaHome() {
    await connection();
    const noticias = await NoticiaModel.buscarTodos();
    const questoes = await QuestaoModel.buscarTodos();
    const videos = await VideoModel.buscarTodos();
    const video = videos[0];
    const [primeira, segunda, terceira] = noticias;
    const maisNoticias = noticias.slice(3, 8);

    return (
        <>
            <section className={`container ${styles.secao}`}>
                <div className={styles.secaoTopo}>
                    <h2>Últimas notícias</h2>
                    <a href="/noticias">
                        Ver todas <ArrowRight size={16} />
                    </a>
                </div>

                <div className={styles.destaques}>
                    {/* Cartão 1: a foto da notícia ocupa o fundo */}
                    <a
                        href={`/noticias/${primeira.id}`}
                        className={styles.destaqueFoto}
                        style={{ backgroundImage: `linear-gradient(rgba(11, 18, 32, 0.1), rgba(11, 18, 32, 0.9)), url(${primeira.urlImagem})` }}
                    >
                        <span className={styles.data}>{dataCurta(primeira.dataPublicacao)}</span>
                        <h3>{primeira.titulo}</h3>
                    </a>

                    {/* Cartão 2: cinza-claro, com a foto em cima */}
                    <a href={`/noticias/${segunda.id}`} className={styles.destaqueClaro}>
                        <img src={segunda.urlImagem} alt={segunda.titulo} className={styles.destaqueImagem} />
                        <span className={styles.data}>{dataCurta(segunda.dataPublicacao)}</span>
                        <h3>{segunda.titulo}</h3>
                        <p>{segunda.resumo}</p>
                        <span className={styles.lerMais}>
                            Ler notícia <ArrowRight size={16} />
                        </span>
                    </a>

                    {/* Cartão 3: azul, com a foto em cima */}
                    <a href={`/noticias/${terceira.id}`} className={styles.destaqueEscuro}>
                        <img src={terceira.urlImagem} alt={terceira.titulo} className={styles.destaqueImagem} />
                        <span className={styles.data}>{dataCurta(terceira.dataPublicacao)}</span>
                        <h3>{terceira.titulo}</h3>
                        <p>{terceira.resumo}</p>
                        <span className={styles.lerMais}>
                            Ler notícia <ArrowRight size={16} />
                        </span>
                    </a>
                </div>
            </section>

            {/* Lista de notícias à esquerda e a coluna lateral à direita, como num portal */}
            <section className={`container ${styles.secao} ${styles.portal}`}>
                <div>
                    <h2 className={styles.subtitulo}>Mais notícias</h2>
                    <div className={styles.lista}>
                        {maisNoticias.map((noticia) => (
                            <a key={noticia.id} href={`/noticias/${noticia.id}`} className={styles.itemLista}>
                                <img src={noticia.urlImagem} alt={noticia.titulo} />
                                <div>
                                    <span className={styles.data}>{dataCurta(noticia.dataPublicacao)}</span>
                                    <h3>{noticia.titulo}</h3>
                                    <p>{noticia.resumo}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <aside className={styles.lateral}>
                    <div className={styles.cartaoSimulado}>
                        <span className={styles.iconeRedondo}>
                            <ClipboardCheck size={22} />
                        </span>
                        <h3>Simulado de vestibular</h3>
                        <p>
                            {questoes.length} questões, uma por vez. No final, você vê a nota e a explicação de cada resposta.
                        </p>
                        <a href="/simulado" className={styles.botaoClaro}>
                            Começar agora <ArrowRight size={16} />
                        </a>
                    </div>

                    <div className={styles.cartaoDica}>
                        <p className={styles.dicaTopo}>
                            <Lightbulb size={16} /> Dica rápida
                        </p>
                        <h3>Mas ou mais?</h3>
                        <p>
                            Se der para trocar por &quot;porém&quot;, use <strong>mas</strong>. Se der ideia de quantidade, use{' '}
                            <strong>mais</strong>.
                        </p>
                        <a href="/dicas">Ver todas as dicas</a>
                    </div>

                    {/* Videoaula em destaque, tocando direto no cartão (completa a coluna até o fim da lista) */}
                    <div className={styles.cartaoVideo}>
                        <div className={styles.videoCapa}>
                            <iframe
                                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                title={video.titulo}
                                loading="lazy"
                                allowFullScreen
                            />
                        </div>
                        <p className={styles.dicaTopo}>
                            <PlayCircle size={16} /> Videoaula
                        </p>
                        <h3>{video.titulo}</h3>
                        <a href="/videos" className={styles.lerMais}>
                            Ver as {videos.length} videoaulas <ArrowRight size={16} />
                        </a>
                    </div>
                </aside>
            </section>
        </>
    );
}

export default function Home() {
    return (
        <main>
            {/* Título grande e centralizado */}
            <section className={`container ${styles.topo}`}>
                <h1>Tudo sobre Língua Portuguesa em um só lugar</h1>
                <p>
                    Notícias, videoaulas, dicas de estudo e um simulado com correção para o Ensino Médio e o vestibular.
                </p>
                <a href="/simulado" className={styles.botaoPrincipal}>
                    Fazer o simulado <ArrowRight size={18} />
                </a>
            </section>

            {/* Bloco arredondado com a foto de livros e o cartão da vírgula */}
            <section className="container">
                <div className={styles.vitrine}>
                    <div className={styles.vitrineCartao}>
                        <CartaoVirgula />
                    </div>
                </div>
            </section>

            {/* Vestibulares das questões do simulado */}
            <section className={`container ${styles.vestibulares}`}>
                <p>Questões dos principais vestibulares do país</p>
                <div>
                    <span>Enem</span>
                    <span>Fuvest</span>
                    <span>Unesp</span>
                    <span>UERJ</span>
                    <span>PUC-SP</span>
                    <span>UEA</span>
                </div>
            </section>

            <Suspense fallback={<p className="container">Carregando notícias...</p>}>
                <NoticiasDaHome />
            </Suspense>

            {/* Cartões com foto e botão "+" */}
            <section className={`container ${styles.secao}`}>
                <div className={styles.secaoTopo}>
                    <h2>Explore o portal</h2>
                </div>
                <div className={styles.explore}>
                    <a href="/dicas" className={styles.exploreCard}>
                        <div className={styles.exploreFoto}>
                            <img src="/noticias/livros-mortatti.webp" alt="" />
                            <span><Plus size={18} /></span>
                        </div>
                        <h3>Dicas</h3>
                        <p>Orientações de estudo e preparação para o vestibular.</p>
                    </a>
                    <a href="/carreiras" className={styles.exploreCard}>
                        <div className={styles.exploreFoto}>
                            <img src="/noticias/placa-machado-de-assis.webp" alt="" />
                            <span><Plus size={18} /></span>
                        </div>
                        <h3>Carreiras</h3>
                        <p>Profissões em que o Português faz diferença.</p>
                    </a>
                    <a href="/estagio" className={styles.exploreCard}>
                        <div className={styles.exploreFoto}>
                            <img src="/noticias/parede-de-livros.webp" alt="" />
                            <span><Plus size={18} /></span>
                        </div>
                        <h3>Estágio</h3>
                        <p>O que é, como funciona e como se preparar.</p>
                    </a>
                    <a href="/videos" className={styles.exploreCard}>
                        <div className={styles.exploreFoto}>
                            <img src="/noticias/enem-2026-cadernos.webp" alt="" />
                            <span><Plus size={18} /></span>
                        </div>
                        <h3>Vídeos</h3>
                        <p>Aulas curtas de gramática, interpretação e redação.</p>
                    </a>
                </div>
            </section>
        </main>
    );
}
