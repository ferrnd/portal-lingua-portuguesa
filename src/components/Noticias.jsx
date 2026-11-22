import { Suspense } from 'react';
import { connection } from 'next/server';
import NoticiaModel from '@/models/NoticiaModel.js';
import CardNoticia from './CardNoticia';
import styles from './Noticias.module.css';

async function ListaNoticias({ quantidade }) {
    await connection();
    const noticias = await NoticiaModel.buscarTodos();
    const lista = quantidade ? noticias.slice(0, quantidade) : noticias;

    return (
        <div className={styles.grade}>
            {lista.map((noticia) => (
                <CardNoticia key={noticia.id} noticia={noticia} />
            ))}
        </div>
    );
}

export default function Noticias({ quantidade }) {
    return (
        <Suspense fallback={<p>Carregando...</p>}>
            <ListaNoticias quantidade={quantidade} />
        </Suspense>
    );
}
