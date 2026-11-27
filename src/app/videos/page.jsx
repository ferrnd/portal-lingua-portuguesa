import { Suspense } from 'react';
import { connection } from 'next/server';
import TopoPagina from '@/components/TopoPagina';
import VideoModel from '@/models/VideoModel.js';
import styles from './page.module.css';

async function ListaVideos() {
    await connection();
    const videos = await VideoModel.buscarTodos();

    if (videos.length === 0) {
        return <p className={styles.vazio}>Nenhum vídeo cadastrado ainda. Volte em breve!</p>;
    }

    return (
        <div className={styles.grade}>
            {videos.map((video) => (
                <article key={video.id} className={styles.card}>
                    <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.titulo}
                        loading="lazy"
                        allowFullScreen
                        className={styles.video}
                    />
                    <div className={styles.texto}>
                        <h3>{video.titulo}</h3>
                        <p>{video.descricao}</p>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default function Videos() {
    return (
        <>
            <TopoPagina titulo="Vídeos" subtitulo="Aulas curtas de gramática, interpretação e redação." />
            <main className={`container ${styles.pagina}`}>
                <Suspense fallback={<p>Carregando...</p>}>
                    <ListaVideos />
                </Suspense>
            </main>
        </>
    );
}
