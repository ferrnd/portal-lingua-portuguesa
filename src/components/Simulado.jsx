'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, CircleCheck, CircleX, RotateCcw } from 'lucide-react';
import styles from './Simulado.module.css';

const LETRAS = ['A', 'B', 'C', 'D', 'E'];

export default function Simulado({ questoes }) {
    // respostas guarda a letra escolhida em cada questão: { 3: 'B', 7: 'E', ... }
    const [respostas, setRespostas] = useState({});
    // atual é a posição da questão que está na tela (0 = primeira)
    const [atual, setAtual] = useState(0);
    const [finalizado, setFinalizado] = useState(false);
    const [aviso, setAviso] = useState('');

    const respondidas = Object.keys(respostas).length;
    const acertos = questoes.filter((q) => respostas[q.id] === q.respostaCorreta).length;
    const porcentagem = Math.round((acertos / questoes.length) * 100);
    const ultima = atual === questoes.length - 1;

    // Respondendo: só a questão atual. Depois de finalizar: todas, para revisar.
    const naTela = finalizado ? questoes : [questoes[atual]];

    function escolher(idQuestao, letra) {
        if (finalizado) return;
        // Usa o valor anterior para não perder respostas em cliques rápidos
        setRespostas((anteriores) => ({ ...anteriores, [idQuestao]: letra }));
        setAviso('');
    }

    function avancar() {
        if (!respostas[questoes[atual].id]) {
            setAviso('Escolha uma alternativa para avançar.');
            return;
        }
        setAtual(atual + 1);
        setAviso('');
    }

    function voltar() {
        setAtual(atual - 1);
        setAviso('');
    }

    function finalizar() {
        const faltam = questoes.length - respondidas;

        if (faltam > 0) {
            setAviso(`Ainda ${faltam === 1 ? 'falta 1 questão' : `faltam ${faltam} questões`}. Responda todas para ver o resultado.`);
            return;
        }

        setFinalizado(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function refazer() {
        setRespostas({});
        setAtual(0);
        setFinalizado(false);
        setAviso('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className={styles.simulado}>
            {finalizado ? (
                <section className={styles.resultado}>
                    <p className={styles.rotulo}>Seu resultado</p>
                    <p className={styles.nota}>
                        {acertos} <span>de {questoes.length}</span>
                    </p>
                    <p className={styles.mensagem}>
                        {porcentagem >= 70
                            ? 'Mandou muito bem! Você está preparado para as provas.'
                            : porcentagem >= 50
                              ? 'Bom resultado! Revise as explicações das questões que errou.'
                              : 'Continue estudando! Leia as explicações abaixo para entender cada resposta.'}
                    </p>
                    <button className={styles.botaoClaro} onClick={refazer}>
                        <RotateCcw size={18} /> Refazer o simulado
                    </button>
                </section>
            ) : (
                <div className={styles.progresso}>
                    <p>
                        Questão <strong>{atual + 1}</strong> de {questoes.length}
                    </p>
                    <div className={styles.barra}>
                        <div style={{ width: `${((atual + 1) / questoes.length) * 100}%` }}></div>
                    </div>
                </div>
            )}

            {naTela.map((questao, i) => {
                const indice = finalizado ? i : atual;
                const escolhida = respostas[questao.id];
                const acertou = escolhida === questao.respostaCorreta;

                return (
                    <article
                        key={questao.id}
                        className={finalizado ? (acertou ? styles.questaoCerta : styles.questaoErrada) : styles.questao}
                    >
                        <div className={styles.cabecalhoQuestao}>
                            <span className={styles.numero}>Questão {indice + 1}</span>
                            {finalizado ? (
                                acertou ? (
                                    <span className={styles.selo}>
                                        <CircleCheck size={18} /> Acertou
                                    </span>
                                ) : (
                                    <span className={styles.seloErro}>
                                        <CircleX size={18} /> Errou
                                    </span>
                                )
                            ) : null}
                        </div>

                        <div className={styles.enunciado}>
                            {questao.enunciado.split('\n').map((paragrafo, i) => (
                                <p key={i}>{paragrafo}</p>
                            ))}
                        </div>

                        <div className={styles.alternativas}>
                            {questao.alternativas.map((texto, i) => {
                                const letra = LETRAS[i];
                                const correta = letra === questao.respostaCorreta;

                                return (
                                    <button
                                        key={letra}
                                        className={
                                            finalizado
                                                ? correta
                                                    ? styles.alternativaCorreta
                                                    : letra === escolhida
                                                      ? styles.alternativaErrada
                                                      : styles.alternativaApagada
                                                : letra === escolhida
                                                  ? styles.alternativaEscolhida
                                                  : styles.alternativa
                                        }
                                        onClick={() => escolher(questao.id, letra)}
                                        disabled={finalizado}
                                    >
                                        <span className={styles.letra}>{letra}</span>
                                        {texto}
                                    </button>
                                );
                            })}
                        </div>

                        {finalizado ? (
                            <div className={styles.explicacao}>
                                <strong>Resposta correta: {questao.respostaCorreta}.</strong> {questao.explicacao}
                            </div>
                        ) : null}
                    </article>
                );
            })}

            {finalizado ? (
                <button className={styles.botao} onClick={refazer}>
                    <RotateCcw size={18} /> Refazer o simulado
                </button>
            ) : (
                <div className={styles.final}>
                    {aviso ? <p className={styles.aviso}>{aviso}</p> : null}
                    <div className={styles.navegacao}>
                        {atual > 0 ? (
                            <button className={styles.botaoVoltar} onClick={voltar}>
                                <ArrowLeft size={18} /> Anterior
                            </button>
                        ) : (
                            <span></span>
                        )}
                        {ultima ? (
                            <button className={styles.botao} onClick={finalizar}>
                                Finalizar simulado
                            </button>
                        ) : (
                            <button className={styles.botao} onClick={avancar}>
                                Avançar <ArrowRight size={18} />
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
