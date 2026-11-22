'use client';

import { useEffect, useState } from 'react';
import styles from './BarraRolagem.module.css';

export default function BarraRolagem() {
    const [barra, setBarra] = useState({ altura: 0, topo: 0 });

    useEffect(() => {
        function atualizar() {
            const tela = window.innerHeight;
            const pagina = document.documentElement.scrollHeight;

            if (pagina <= tela) {
                setBarra({ altura: 0, topo: 0 });
                return;
            }

            const altura = Math.max((tela / pagina) * tela, 40);
            const topo = (window.scrollY / (pagina - tela)) * (tela - altura);
            setBarra({ altura, topo });
        }

        atualizar();
        window.addEventListener('scroll', atualizar);
        window.addEventListener('resize', atualizar);
        const observador = new ResizeObserver(atualizar);
        observador.observe(document.body);

        return () => {
            window.removeEventListener('scroll', atualizar);
            window.removeEventListener('resize', atualizar);
            observador.disconnect();
        };
    }, []);

    function arrastar(evento) {
        evento.preventDefault();
        const inicioMouse = evento.clientY;
        const inicioRolagem = window.scrollY;
        const tela = window.innerHeight;
        const pagina = document.documentElement.scrollHeight;
        const proporcao = (pagina - tela) / (tela - barra.altura);

        function mover(e) {
            window.scrollTo(0, inicioRolagem + (e.clientY - inicioMouse) * proporcao);
        }

        function soltar() {
            window.removeEventListener('mousemove', mover);
            window.removeEventListener('mouseup', soltar);
        }

        window.addEventListener('mousemove', mover);
        window.addEventListener('mouseup', soltar);
    }

    if (barra.altura === 0) {
        return null;
    }

    return (
        <div className={styles.trilho}>
            <div className={styles.barra} style={{ height: barra.altura, top: barra.topo }} onMouseDown={arrastar} />
        </div>
    );
}
