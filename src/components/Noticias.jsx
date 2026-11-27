import { Suspense } from 'react';
import { connection } from 'next/server';
import NoticiaModel from '@/models/NoticiaModel.js';
import CardNoticia from './CardNoticia';
import styles from './Noticias.module.css';

async function ListaNoticias() {
    await connection();
    const noticias = await NoticiaModel.buscarTodos();

    return (
        <div className={styles.grade}>
            {noticias.map((noticia) => (
                <CardNoticia key={noticia.id} noticia={noticia} />
            ))}
        </div>
    );
}

export default function Noticias() {
    return (
        <Suspense fallback={<p>Carregando...</p>}>
            <ListaNoticias />
        </Suspense>
    );
}
