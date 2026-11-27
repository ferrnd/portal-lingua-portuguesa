import { Suspense } from 'react';
import { connection } from 'next/server';
import TopoPagina from '@/components/TopoPagina';
import Simulado from '@/components/Simulado';
import QuestaoModel from '@/models/QuestaoModel.js';
import styles from './page.module.css';

async function QuestoesDoSimulado() {
    await connection();
    const questoes = await QuestaoModel.buscarTodos();

    if (questoes.length === 0) {
        return <p className={styles.vazio}>Nenhuma questão cadastrada ainda. Volte em breve!</p>;
    }

    return <Simulado questoes={questoes} />;
}

export default function PaginaSimulado() {
    return (
        <>
            <TopoPagina titulo="Simulado" subtitulo="25 questões de vestibular com correção e explicação." />
            <main className={`container ${styles.pagina}`}>
                <Suspense fallback={<p>Carregando as questões...</p>}>
                    <QuestoesDoSimulado />
                </Suspense>
            </main>
        </>
    );
}
