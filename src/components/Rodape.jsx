import styles from './Rodape.module.css';

// Mesmo rodapé do Portal Integrador, com os links deste portal
export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.conteudo}>
                <div className={styles.marca}>
                    <p className={styles.nome}>
                        <img src="/logo-branca.png" alt="" className={styles.logo} />
                        Vocábulo
                    </p>
                    <p>
                        Portal de Língua Portuguesa do Projeto Integrador Final do curso Técnico em Desenvolvimento de Sistemas
                        do SENAI Valinhos.
                    </p>
                </div>

                <div className={styles.coluna}>
                    <h4>Conteúdo</h4>
                    <ul>
                        <li><a href="/noticias">Notícias</a></li>
                        <li><a href="/videos">Vídeos</a></li>
                        <li><a href="/simulado">Simulado</a></li>
                        <li><a href="/dicas">Dicas</a></li>
                    </ul>
                </div>

                <div className={styles.coluna}>
                    <h4>Navegação</h4>
                    <ul>
                        <li><a href="/carreiras">Carreiras</a></li>
                        <li><a href="/estagio">Estágio</a></li>
                        <li><a href="/sobre">Sobre nós</a></li>
                        <li><a href="https://portal-integrador-senai.vercel.app">Portal Integrador</a></li>
                    </ul>
                </div>
            </div>

            <div className={styles.final}>
                © 2026 SESI/SENAI · Projeto educacional · Desenvolvido pelo{' '}
                <a href="https://github.com/ferrnd/portal-lingua-portuguesa" target="_blank" rel="noopener noreferrer">
                    Grupo 4
                </a>
            </div>
        </footer>
    );
}
