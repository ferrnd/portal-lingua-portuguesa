'use client';

import { useState } from 'react';
import styles from './CartaoVirgula.module.css';

export default function CartaoVirgula() {
    const [comVirgula, setComVirgula] = useState(false);

    return (
        <div className={styles.caderno}>
            <p className={styles.topo}>Uma vírgula muda tudo</p>

            <p className={styles.frase}>
                {comVirgula ? <>Não<span>,</span> queremos saber.</> : 'Não queremos saber.'}
            </p>

            <p className={styles.explicacao}>
                {comVirgula
                    ? 'Com vírgula: a pessoa diz "não" para outra coisa e quer saber, sim.'
                    : 'Sem vírgula: ninguém quer saber de nada.'}
            </p>

            <button className={styles.botao} onClick={() => setComVirgula(!comVirgula)}>
                {comVirgula ? 'Tirar a vírgula' : 'Colocar a vírgula'}
            </button>
        </div>
    );
}
