import { Target, Users, Newspaper, SquarePlay, ClipboardCheck, Lightbulb } from 'lucide-react';
import TopoPagina from '@/components/TopoPagina';
import styles from './page.module.css';

export default function Sobre() {
    return (
        <>
            <TopoPagina titulo="Sobre nós" subtitulo="Quem somos e por que criamos o portal." />
            <main className={`container ${styles.pagina}`}>
                <section className={styles.projeto}>
                    <h2>O projeto</h2>
                    <p>
                        O Vocábulo é o Portal de Língua Portuguesa criado pelo <strong>Grupo 4</strong> do curso
                        Técnico em Desenvolvimento de Sistemas do <strong>SENAI Valinhos</strong>, como Projeto Integrador
                        final do curso. O portal reúne notícias, videoaulas, dicas e um simulado para apoiar o estudo de
                        leitura, escrita e interpretação de texto.
                    </p>
                </section>

                <section className={styles.cartoes}>
                    <div className={styles.cartao}>
                        <span className={styles.icone}><Target size={22} /></span>
                        <h3>Objetivo</h3>
                        <p>
                            Ajudar os estudantes a aprimorar seus conhecimentos em Língua Portuguesa e a se preparar para
                            provas e vestibulares.
                        </p>
                    </div>
                    <div className={styles.cartao}>
                        <span className={styles.icone}><Users size={22} /></span>
                        <h3>Para quem</h3>
                        <p>
                            Estudantes que querem reforçar o que aprenderam na escola, revisar conteúdos e treinar para o
                            Enem e outros vestibulares.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className={styles.titulo}>O que você encontra aqui</h2>
                    <div className={styles.recursos}>
                        <div className={styles.recurso}>
                            <Newspaper size={22} />
                            <span>Notícias sobre a língua portuguesa</span>
                        </div>
                        <div className={styles.recurso}>
                            <SquarePlay size={22} />
                            <span>Videoaulas de gramática e literatura</span>
                        </div>
                        <div className={styles.recurso}>
                            <ClipboardCheck size={22} />
                            <span>Simulado com questões de vestibular</span>
                        </div>
                        <div className={styles.recurso}>
                            <Lightbulb size={22} />
                            <span>Dicas de estudo, carreiras e estágio</span>
                        </div>
                    </div>
                </section>

                <section className={styles.integrador}>
                    <p>
                        Os outros grupos da turma criaram portais de outras disciplinas. Todos se encontram no Portal
                        Integrador.
                    </p>
                    <a href="https://portal-integrador-senai.vercel.app">Conhecer o Portal Integrador</a>
                </section>
            </main>
        </>
    );
}
