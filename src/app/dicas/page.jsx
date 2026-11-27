import {
  FileText,
  AlertTriangle,
  BookOpen,
  FileSearch,
  HelpCircle,
} from "lucide-react";
import TopoPagina from "@/components/TopoPagina";
import styles from "./page.module.css";

export default function Dicas() {
  return (
    <>
      <TopoPagina
        titulo="Dicas"
        subtitulo="Como estudar melhor para provas e vestibulares."
      />
      <main className={`container ${styles.conteudo}`}>
        <p className={styles.intro}>
          Pequenos hábitos fazem muita diferença na escrita, na leitura e nas
          provas. Esta página reúne dicas práticas para o dia a dia e para o
          Enem, como complemento aos vídeos e ao simulado do portal.
        </p>

        <section className={styles.cardAzul}>
          <h2 className={styles.titulo}>
            <FileText size={22} /> Redação do Enem
          </h2>
          <p className={styles.texto}>
            A redação do Enem é um texto dissertativo-argumentativo: você
            defende um ponto de vista sobre o tema e propõe uma solução para o
            problema apresentado. A nota vai de 0 a 1.000 e é dividida em cinco
            competências, cada uma valendo até 200 pontos.
          </p>

          <div className={styles.tabelaWrap}>
            <table className={styles.tabela}>
              <thead>
                <tr>
                  <th>Competência</th>
                  <th>O que é avaliado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>1</strong>
                  </td>
                  <td>Domínio da norma-padrão da língua escrita</td>
                </tr>
                <tr>
                  <td>
                    <strong>2</strong>
                  </td>
                  <td>Compreensão do tema e uso do tipo de texto pedido</td>
                </tr>
                <tr>
                  <td>
                    <strong>3</strong>
                  </td>
                  <td>
                    Seleção e organização das informações para defender o ponto
                    de vista
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>4</strong>
                  </td>
                  <td>
                    Uso dos mecanismos de coesão, como conectivos e retomadas
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>5</strong>
                  </td>
                  <td>
                    Proposta de intervenção para o problema, respeitando os
                    direitos humanos
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.subtitulo}>Uma estrutura que funciona bem:</h3>
          <ul className={styles.lista}>
            <li>
              <strong>Introdução:</strong> apresente o tema e deixe clara a sua
              tese, ou seja, a ideia que vai defender.
            </li>
            <li>
              <strong>Desenvolvimento:</strong> use dois parágrafos, cada um com
              um argumento e um exemplo, dado ou referência que o comprove.
            </li>
            <li>
              <strong>Conclusão:</strong> retome a tese e faça a proposta de
              intervenção completa, dizendo o que deve ser feito, quem deve
              fazer, como, por qual meio e com que finalidade.
            </li>
          </ul>
        </section>

        <section className={styles.cardCinza}>
          <h2 className={styles.titulo}>
            <AlertTriangle size={22} /> Erros comuns e como evitá-los
          </h2>

          <div className={styles.tabelaWrap}>
            <table className={styles.tabela}>
              <thead>
                <tr>
                  <th>Dúvida</th>
                  <th>Como usar</th>
                  <th>Exemplo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>mas</strong> ou <strong>mais</strong>
                  </td>
                  <td>
                    "Mas" indica oposição (é o mesmo que "porém"); "mais" indica
                    quantidade.
                  </td>
                  <td>
                    Estudei muito, <strong>mas</strong> quero estudar{" "}
                    <strong>mais</strong>.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>mau</strong> ou <strong>mal</strong>
                  </td>
                  <td>
                    "Mau" é o contrário de "bom"; "mal" é o contrário de "bem".
                  </td>
                  <td>
                    Ele não é um <strong>mau</strong> aluno, só dormiu{" "}
                    <strong>mal</strong>.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>há</strong> ou <strong>a</strong>
                  </td>
                  <td>
                    "Há" indica tempo passado; "a" indica tempo futuro ou
                    distância.
                  </td>
                  <td>
                    Cheguei <strong>há</strong> dez minutos. A prova começa
                    daqui <strong>a</strong> uma hora.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>por que</strong>, <strong>porque</strong>,{" "}
                    <strong>por quê</strong> e <strong>porquê</strong>
                  </td>
                  <td>
                    "Por que" pergunta; "porque" responde; "por quê" aparece no
                    fim da frase; "porquê" é substantivo e vem com artigo.
                  </td>
                  <td>
                    <strong>Por que</strong> você saiu? Saí{" "}
                    <strong>porque</strong> estava cansado. Não sei{" "}
                    <strong>por quê</strong>. Explique o <strong>porquê</strong>
                    .
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>onde</strong> ou <strong>aonde</strong>
                  </td>
                  <td>
                    "Onde" indica lugar em que se está; "aonde" indica
                    movimento, com verbos como "ir".
                  </td>
                  <td>
                    <strong>Onde</strong> você mora? <strong>Aonde</strong> você
                    vai?
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>a fim</strong> ou <strong>afim</strong>
                  </td>
                  <td>
                    "A fim de" indica finalidade; "afim" significa semelhante.
                  </td>
                  <td>
                    Estudo <strong>a fim de</strong> passar no Enem. Temos
                    gostos <strong>afins</strong>.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.nota}>
            Na dúvida, troque por outra palavra: se "porém" couber no lugar, use{" "}
            <strong>mas</strong>; se "bem" for o contrário, use{" "}
            <strong>mal</strong>.
          </p>
        </section>

        <section className={styles.cardCinza}>
          <h2 className={styles.titulo}>
            <BookOpen size={22} /> Como ler mais
          </h2>
          <ul className={styles.lista}>
            <li>
              <strong>Comece pequeno:</strong> dez páginas por dia somam mais de
              um livro por mês.
            </li>
            <li>
              <strong>Escolha pelo interesse:</strong> contos, crônicas,
              quadrinhos e reportagens também contam. O importante é criar o
              hábito.
            </li>
            <li>
              <strong>Leia em voz alta de vez em quando:</strong> ajuda a
              perceber o ritmo das frases e a pontuação.
            </li>
            <li>
              <strong>Anote palavras novas:</strong> procure o significado e
              tente usá-las em uma frase.
            </li>
            <li>
              <strong>Aproveite os clássicos curtos:</strong> contos de Machado
              de Assis, crônicas de Rubem Braga e poemas de Drummond são ótimos
              para começar e caem bastante em vestibulares.
            </li>
          </ul>
        </section>

        <section className={styles.cardCinza}>
          <h2 className={styles.titulo}>
            <FileSearch size={22} /> Interpretação de texto
          </h2>
          <ul className={styles.lista}>
            <li>
              <strong>Leia o enunciado antes do texto:</strong> assim você já
              sabe o que procurar.
            </li>
            <li>
              <strong>Marque as palavras-chave:</strong> termos como "exceto",
              "não" e "segundo o autor" mudam a resposta.
            </li>
            <li>
              <strong>Volte ao texto:</strong> a resposta certa está apoiada no
              que foi escrito, e não na sua opinião sobre o assunto.
            </li>
            <li>
              <strong>Desconfie dos extremos:</strong> alternativas com
              "sempre", "nunca" e "todos" costumam generalizar demais.
            </li>
            <li>
              <strong>Elimine as alternativas erradas:</strong> muitas vezes é
              mais fácil descartar quatro opções do que achar a certa de
              primeira.
            </li>
          </ul>
        </section>

        <section className={styles.cardCinza}>
          <h2 className={styles.titulo}>
            <HelpCircle size={22} /> Onde tirar dúvidas
          </h2>
          <ul className={styles.lista}>
            <li>
              <strong>
                VOLP (Vocabulário Ortográfico da Língua Portuguesa):
              </strong>{" "}
              lista oficial da Academia Brasileira de Letras com a grafia
              correta das palavras. Disponível no site da ABL.
            </li>
            <li>
              <strong>Dicionários on-line confiáveis:</strong> como o Michaelis
              e o Aulete, para conferir significados e sinônimos.
            </li>
            <li>
              <strong>Materiais do Inep:</strong> a Cartilha do Participante do
              Enem traz as regras da redação e exemplos de textos com nota
              máxima.
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
