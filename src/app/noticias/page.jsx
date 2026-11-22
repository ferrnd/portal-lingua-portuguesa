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
                    O que está acontecendo com a língua portuguesa: leitura, educação, literatura, vestibulares e muito
                    mais.
                </p>
                <Noticias />
            </main>
        </>
    );
}
