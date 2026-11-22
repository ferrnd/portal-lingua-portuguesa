import styles from './Rodape.module.css';

export default function Rodape() {
    return (
        <footer className={styles.footer}>
            <div className={styles.conteudo}>
                <div className={styles.marca}>
                    <img src="/logo-branca.png" alt="Letrar" className={styles.logo} />
                    <p>
                        Portal de Língua Portuguesa do Projeto Integrador Final do curso Técnico em Desenvolvimento de
                        Sistemas do SENAI Valinhos.
                    </p>
                </div>
                <div className={styles.coluna}>
                    <h4>Conteúdo</h4>
                    <ul>
                        <li><a href="#">Notícias</a></li>
                        <li><a href="#">Vídeos</a></li>
                        <li><a href="#">Simulado</a></li>
                        <li><a href="#">Dicas</a></li>
                    </ul>
                </div>
                <div className={styles.coluna}>
                    <h4>Navegação</h4>
                    <ul>
                        <li><a href="#">Carreiras</a></li>
                        <li><a href="#">Estágio</a></li>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="https://portal-integrador-senai.vercel.app">Portal Integrador</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.rodape}>
                © 2026 SESI/SENAI · Projeto educacional · Desenvolvido pelo <a href="#">Grupo 4</a>
            </div>
        </footer>
    );
}
