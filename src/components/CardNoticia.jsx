import styles from './Noticias.module.css';

export default function CardNoticia({ noticia }) {
    return (
        <a href={`/noticias/${noticia.id}`} className={styles.card}>
            <img src={noticia.urlImagem} alt={noticia.titulo} className={styles.imagem} />
            <div className={styles.texto}>
                <p className={styles.data}>
                    {noticia.dataPublicacao.toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
                </p>
                <h3>{noticia.titulo}</h3>
                <p className={styles.resumo}>{noticia.resumo}</p>
            </div>
        </a>
    );
}
