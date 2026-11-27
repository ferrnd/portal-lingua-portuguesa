import styles from './Noticias.module.css';

export default function CardNoticia({ noticia }) {
    return (
        <a href={`/noticias/${noticia.id}`} className={styles.card}>
            <div className={styles.capa}>
                <img src={noticia.urlImagem} alt={noticia.titulo} />
            </div>
            <p className={styles.data}>
                {noticia.dataPublicacao.toLocaleDateString('pt-BR', { timeZone: 'UTC', dateStyle: 'long' })}
            </p>
            <h3>{noticia.titulo}</h3>
            <p className={styles.resumo}>{noticia.resumo}</p>
        </a>
    );
}
