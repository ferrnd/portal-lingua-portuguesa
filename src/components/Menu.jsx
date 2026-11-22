'use client';

import { useState } from 'react';
import { Menu as IconeMenu, X, House, Newspaper, SquarePlay, ClipboardCheck, Lightbulb, BriefcaseBusiness, GraduationCap, Info, LockKeyhole } from 'lucide-react';
import styles from './Menu.module.css';

export default function Menu({ ativo }) {
    const [aberto, setAberto] = useState(false);

    return (
        <nav className={styles.menu}>
            <button className={styles.botaoMenu} onClick={() => setAberto(!aberto)}>
                {aberto ? <X size={20} /> : <IconeMenu size={20} />}
                Menu
            </button>
            <div className={aberto ? `${styles.links} ${styles.aberto}` : styles.links}>
                <a href="/" className={ativo === 'inicio' ? `${styles.link} ${styles.ativo}` : styles.link}>
                    <House size={18} />
                    Início
                </a>
                <a href="/noticias" className={ativo === 'noticias' ? `${styles.link} ${styles.ativo}` : styles.link}>
                    <Newspaper size={18} />
                    Notícias
                </a>
                <a href="/videos" className={ativo === 'videos' ? `${styles.link} ${styles.ativo}` : styles.link}>
                    <SquarePlay size={18} />
                    Vídeos
                </a>
                <a href="/simulado" className={ativo === 'simulado' ? `${styles.link} ${styles.ativo}` : styles.link}>
                    <ClipboardCheck size={18} />
                    Simulado
                </a>
                <a href="/dicas" className={ativo === 'dicas' ? `${styles.link} ${styles.ativo}` : styles.link}>
                    <Lightbulb size={18} />
                    Dicas
                </a>
                <a href="/carreiras" className={ativo === 'carreiras' ? `${styles.link} ${styles.ativo}` : styles.link}>
                    <BriefcaseBusiness size={18} />
                    Carreiras
                </a>
                <a href="/estagio" className={ativo === 'estagio' ? `${styles.link} ${styles.ativo}` : styles.link}>
                    <GraduationCap size={18} />
                    Estágio
                </a>
                <a href="/sobre" className={ativo === 'sobre' ? `${styles.link} ${styles.ativo}` : styles.link}>
                    <Info size={18} />
                    Sobre nós
                </a>
                <a href="/admin" className={ativo === 'painel' ? `${styles.link} ${styles.painel} ${styles.ativo}` : `${styles.link} ${styles.painel}`}>
                    <LockKeyhole size={18} />
                    Painel
                </a>
            </div>
        </nav>
    );
}
