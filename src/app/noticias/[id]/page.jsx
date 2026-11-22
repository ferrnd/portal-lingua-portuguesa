import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Cabecalho from '@/components/Cabecalho';
import NoticiaModel from '@/models/NoticiaModel.js';
import styles from './page.module.css';

async function Detalhe({ params }) {
    const { id } = await params;

    if (isNaN(id)) {
        notFound();
    }

    const noticia = await NoticiaModel.buscarPorId(parseInt(id));

    if (!noticia) {
        notFound();
    }

    return (
        <article className={styles.noticia}>
            <a href="/noticias" className={styles.voltar}>
                <ArrowLeft size={18} />
                Voltar para notícias
            </a>
            <p className={styles.data}>
                {noticia.dataPublicacao.toLocaleDateString('pt-BR', { timeZone: 'UTC', dateStyle: 'long' })}
            </p>
            <h1>{noticia.titulo}</h1>
            <p className={styles.resumo}>{noticia.resumo}</p>
            <img src={noticia.urlImagem} alt={noticia.titulo} className={styles.imagem} />
            <div className={styles.conteudo}>
                {noticia.conteudo.split('\n').map((paragrafo, i) => (
                    <p key={i}>{paragrafo}</p>
                ))}
            </div>
            {noticia.urlFonte && (
                <a href={noticia.urlFonte} target="_blank" rel="noopener noreferrer" className={styles.fonte}>
                    Ler a reportagem original
                    <ExternalLink size={18} />
                </a>
            )}
        </article>
    );
}

export default function PaginaNoticia({ params }) {
    return (
        <>
            <Cabecalho ativo="noticias" />
            <main className={styles.pagina}>
                <Suspense fallback={<p>Carregando...</p>}>
                    <Detalhe params={params} />
                </Suspense>
            </main>
        </>
    );
}
