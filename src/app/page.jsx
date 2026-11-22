import { ClipboardCheck } from 'lucide-react';
import Cabecalho from '@/components/Cabecalho';
import Noticias from '@/components/Noticias';
import styles from './page.module.css';

export default function Home() {
    return (
        <>
            <Cabecalho ativo="inicio" />
            <main className={styles.pagina}>
                <section>
                    <div className={styles.tituloSecao}>
                        <h2>Últimas notícias</h2>
                        <a href="/noticias">Ver todas</a>
                    </div>
                    <div className={styles.noticiasLayout}>
                        <Noticias quantidade={6} />
                        <aside className={styles.cardSimulado}>
                            <span className={styles.iconeSimulado}>
                                <ClipboardCheck size={26} />
                            </span>
                            <h3>Simulado</h3>
                            <p>Questões de vestibulares como Enem, Fuvest e Unicamp, com a correção na hora.</p>
                            <div className={styles.numeros}>
                                <div>
                                    <strong>25</strong>
                                    <span>questões</span>
                                </div>
                                <div>
                                    <strong>5</strong>
                                    <span>alternativas</span>
                                </div>
                            </div>
                            <a href="/simulado" className={styles.botaoSimulado}>Começar</a>
                            <img src="/personagens/leitor.png" alt="" className={styles.personagemSimulado} />
                        </aside>
                    </div>
                </section>

                <section>
                    <div className={styles.tituloSecao}>
                        <h2>Destaques</h2>
                    </div>
                    <div className={styles.destaques}>
                        <div className={styles.destaque}>
                            <h3>Vídeo em destaque</h3>
                            <div className={styles.video}>
                                <iframe
                                    src="https://www.youtube.com/embed/aS-ZDEQTK5M"
                                    title="Método infalível pra saber quando usar a crase"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                        <div className={`${styles.destaque} ${styles.destaqueDica}`}>
                            <h3>Dicas rápidas</h3>
                            <ul className={styles.listaDicas}>
                                <li>
                                    <strong>Mas ou mais?</strong> Se der para trocar por &quot;porém&quot;, use mas.
                                </li>
                                <li>
                                    <strong>Mal ou mau?</strong> Mal é o contrário de bem; mau, de bom.
                                </li>
                                <li>
                                    <strong>Há ou a?</strong> Há indica tempo passado: &quot;cheguei há dez minutos&quot;.
                                </li>
                            </ul>
                            <a href="/dicas" className={styles.linkDicas}>Ver todas as dicas</a>
                            <img src="/personagens/pensativo.png" alt="" className={styles.personagemDica} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
