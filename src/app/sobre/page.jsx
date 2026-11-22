import { Target, Users, Newspaper, SquarePlay, ClipboardCheck, Lightbulb } from 'lucide-react';
import Cabecalho from '@/components/Cabecalho';
import styles from './page.module.css';

export default function Sobre() {
    return (
        <>
            <Cabecalho ativo="sobre" />
            <main className={styles.pagina}>
                <section className={styles.topo}>
                    <h1>Sobre nós</h1>
                    <p>
                        O Letrar é o Portal de Língua Portuguesa criado pelo <strong>Grupo 4</strong> do curso Técnico em
                        Desenvolvimento de Sistemas do <strong>SENAI Valinhos</strong>, como Projeto Integrador final do
                        curso. O portal reúne notícias, videoaulas, dicas e um simulado de Língua Portuguesa para apoiar
                        o estudo de leitura, escrita e interpretação de texto.
                    </p>
                </section>

                <section className={styles.cartoes}>
                    <div className={styles.cartao}>
                        <Target size={28} />
                        <h2>Objetivo</h2>
                        <p>
                            Ajudar os estudantes a aprimorar seus conhecimentos em Língua Portuguesa e a se preparar para
                            provas e vestibulares.
                        </p>
                    </div>
                    <div className={styles.cartao}>
                        <Users size={28} />
                        <h2>Para quem</h2>
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
                            <Newspaper size={24} />
                            <span>Notícias sobre a língua portuguesa</span>
                        </div>
                        <div className={styles.recurso}>
                            <SquarePlay size={24} />
                            <span>Videoaulas de gramática e literatura</span>
                        </div>
                        <div className={styles.recurso}>
                            <ClipboardCheck size={24} />
                            <span>Simulado com questões de vestibular</span>
                        </div>
                        <div className={styles.recurso}>
                            <Lightbulb size={24} />
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
