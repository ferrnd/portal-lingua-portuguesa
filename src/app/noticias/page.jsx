import TopoPagina from '@/components/TopoPagina';
import Noticias from '@/components/Noticias';
import styles from './page.module.css';

export default function PaginaNoticias() {
    return (
        <>
            <TopoPagina titulo="Notícias" subtitulo="Leitura, educação, literatura e vestibulares." />
            <main className={`container ${styles.pagina}`}>
                <Noticias />
            </main>
        </>
    );
}
