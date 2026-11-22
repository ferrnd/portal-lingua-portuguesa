import Cabecalho from '@/components/Cabecalho';
import Noticias from '@/components/Noticias';
import styles from './page.module.css';

export default function PaginaNoticias() {
    return (
        <>
            <Cabecalho ativo="noticias" />
            <main className={styles.pagina}>
                <h1>Notícias</h1>
                <p className={styles.introducao}>
                    Notícias sobre leitura, educação, literatura e vestibulares, com o link para a reportagem original.
                </p>
                <Noticias />
            </main>
        </>
    );
}
