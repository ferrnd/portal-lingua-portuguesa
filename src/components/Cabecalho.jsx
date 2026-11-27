'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Lock, Menu, X } from 'lucide-react';
import styles from './Cabecalho.module.css';

export default function Cabecalho() {
    const [aberto, setAberto] = useState(false);
    const caminho = usePathname();

    return (
        <header className={styles.cabecalho}>
            <div className={`container ${styles.conteudo}`}>
                <a href="/" className={styles.logo}>
                    <img src="/logo.png" alt="" className={styles.icone} />
                    Vocábulo
                </a>

                <nav className={aberto ? styles.aberto : styles.nav}>
                    <a href="/" className={caminho === '/' ? styles.ativo : styles.link}>Início</a>
                    <a href="/noticias" className={caminho.startsWith('/noticias') ? styles.ativo : styles.link}>Notícias</a>
                    <a href="/carreiras" className={caminho === '/carreiras' ? styles.ativo : styles.link}>Carreiras</a>
                    <a href="/dicas" className={caminho === '/dicas' ? styles.ativo : styles.link}>Dicas</a>
                    <a href="/estagio" className={caminho === '/estagio' ? styles.ativo : styles.link}>Estágio</a>
                    <a href="/simulado" className={caminho === '/simulado' ? styles.ativo : styles.link}>Simulado</a>
                    <a href="/videos" className={caminho === '/videos' ? styles.ativo : styles.link}>Vídeos</a>
                    <a href="/sobre" className={caminho === '/sobre' ? styles.ativo : styles.link}>Sobre nós</a>
                    <a href="/admin" className={styles.painelCelular}>
                        <Lock size={16} /> Painel
                    </a>
                </nav>

                <a href="/admin" className={styles.painel}>
                    <Lock size={16} /> Painel
                </a>

                <button className={styles.botaoMenu} onClick={() => setAberto(!aberto)} aria-label="Abrir menu">
                    {aberto ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>
        </header>
    );
}
