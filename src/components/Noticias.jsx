import { Suspense } from 'react';
import { connection } from 'next/server';
import Image from 'next/image';
import NoticiaModel from '@/models/NoticiaModel.js';
import styles from './Noticias.module.css';

async function ListaNoticias() {
    await connection();
    const noticias = await NoticiaModel.buscarTodos();

    return noticias.map((noticia) => (
        <article key={noticia.id} className={styles.noticia}>
            <Image
                src={noticia.urlImagem}
                alt={noticia.titulo}
                width={720}
                height={480}
                className={styles.imagem}
            />
            <div className={styles.texto}>
                <p className={styles.data}>
                    {noticia.dataPublicacao.toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
                </p>
                <h3>{noticia.titulo}</h3>
                <p className={styles.resumo}>{noticia.resumo}</p>
                {noticia.conteudo.split('\n').map((paragrafo, i) => (
                    <p key={i}>{paragrafo}</p>
                ))}
            </div>
        </article>
    ));
}

export default function Noticias() {
    return (
        <section id="noticias" className={styles.secao}>
            <h2>Notícias</h2>
            <Suspense fallback={<p>Carregando...</p>}>
                <ListaNoticias />
            </Suspense>
        </section>
    );
}
