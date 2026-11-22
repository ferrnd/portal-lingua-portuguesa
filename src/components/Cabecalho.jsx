import Menu from './Menu';
import styles from './Cabecalho.module.css';

export default function Cabecalho({ ativo }) {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.banner}>
                <img src="/header.webp" alt="" className={styles.imagem} />
                <a href="/" className={styles.logo} aria-label="Letrar, página inicial" />
            </div>
            <Menu ativo={ativo} />
        </header>
    );
}
