import Noticias from '@/components/Noticias';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.pagina}>
            <main className={styles.conteudo}>
                <h1>Portal de Língua Portuguesa</h1>
                <p>Página inicial em construção.</p>
                <Noticias />
            </main>
        </div>
    );
}
