import styles from './TopoPagina.module.css';

export default function TopoPagina({ titulo, subtitulo }) {
    return (
        <section className={styles.faixa}>
            <div className="container">
                <h1>{titulo}</h1>
                <p>{subtitulo}</p>
            </div>
        </section>
    );
}
