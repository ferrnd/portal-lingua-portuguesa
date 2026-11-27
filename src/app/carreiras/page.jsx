import TopoPagina from '@/components/TopoPagina';
import {
  GraduationCap,
  FileCheck2,
  Languages,
  Newspaper,
  PenTool,
  BookOpen,
  Search,
  Building2,
  Code2,
  Wrench,
  Zap,
  FileText,
  Headphones,
  Presentation,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import styles from './page.module.css';

export default function Carreiras() {
  return (
    <>
      <TopoPagina
        titulo="Carreiras"
        subtitulo="Profissões em que o Português faz diferença."
      />

      <main className={`container ${styles.principal}`}>
        <section className={styles.secao}>
          <p className={styles.introducao}>
            Quem gosta de ler e escrever pode transformar isso em profissão. E não é
            só quem estuda Letras que precisa do português: em qualquer carreira,
            inclusive nas técnicas, saber se comunicar bem faz diferença na hora de
            conseguir um emprego, crescer na empresa e trabalhar em equipe.
          </p>
        </section>

        <section className={styles.secao}>
          <h2 className={styles.tituloSecao}>Profissões ligadas ao português</h2>
          <p className={styles.subtituloSecao}>
            Conheça as principais áreas para quem deseja trabalhar diretamente com a
            leitura, a escrita e a linguagem.
          </p>

          <div className={styles.gradeCards}>
            <article className={styles.cardCinza}>
              <div className={styles.iconeWrapper}>
                <GraduationCap size={24} />
              </div>
              <h3 className={styles.cardTitulo}>Professor de Língua Portuguesa</h3>
              <p className={styles.cardTexto}>
                Ensina gramática, redação e literatura em escolas e cursos.
              </p>
              <span className={styles.cardFormacao}>
                Formação: Licenciatura em Letras
              </span>
            </article>

            <article className={styles.cardCinza}>
              <div className={styles.iconeWrapper}>
                <FileCheck2 size={24} />
              </div>
              <h3 className={styles.cardTitulo}>Revisor de textos</h3>
              <p className={styles.cardTexto}>
                Corrige erros e deixa os textos mais claros em editoras, jornais e
                empresas.
              </p>
              <span className={styles.cardFormacao}>
                Formação: Letras, Jornalismo ou Comunicação
              </span>
            </article>

            <article className={styles.cardCinza}>
              <div className={styles.iconeWrapper}>
                <Languages size={24} />
              </div>
              <h3 className={styles.cardTitulo}>Tradutor e intérprete</h3>
              <p className={styles.cardTexto}>
                Traduz textos e falas de outros idiomas, inclusive em Libras.
              </p>
              <span className={styles.cardFormacao}>
                Formação: Letras ou curso específico de Libras
              </span>
            </article>

            <article className={styles.cardCinza}>
              <div className={styles.iconeWrapper}>
                <Newspaper size={24} />
              </div>
              <h3 className={styles.cardTitulo}>Jornalista</h3>
              <p className={styles.cardTexto}>
                Apura fatos, entrevista pessoas e escreve notícias e reportagens.
              </p>
              <span className={styles.cardFormacao}>Formação: Jornalismo</span>
            </article>

            <article className={styles.cardCinza}>
              <div className={styles.iconeWrapper}>
                <PenTool size={24} />
              </div>
              <h3 className={styles.cardTitulo}>Redator</h3>
              <p className={styles.cardTexto}>
                Cria textos para sites, redes sociais e campanhas de propaganda.
              </p>
              <span className={styles.cardFormacao}>
                Formação: Letras, Jornalismo ou Publicidade
              </span>
            </article>

            <article className={styles.cardCinza}>
              <div className={styles.iconeWrapper}>
                <BookOpen size={24} />
              </div>
              <h3 className={styles.cardTitulo}>Editor de livros</h3>
              <p className={styles.cardTexto}>
                Acompanha a produção de um livro, do texto do autor até a publicação.
              </p>
              <span className={styles.cardFormacao}>
                Formação: Letras, Editoração ou Jornalismo
              </span>
            </article>

            <article className={styles.cardCinza}>
              <div className={styles.iconeWrapper}>
                <Search size={24} />
              </div>
              <h3 className={styles.cardTitulo}>Linguista</h3>
              <p className={styles.cardTexto}>
                Pesquisa como as línguas funcionam e mudam ao longo do tempo.
              </p>
              <span className={styles.cardFormacao}>
                Formação: Letras, com mestrado ou doutorado
              </span>
            </article>
          </div>

          <div className={styles.cardBranco}>
            <div className={styles.cabecalhoCardBranco}>
              <Building2 size={22} className={styles.iconeAzul} />
              <h3 className={styles.tituloCardBranco}>Onde essas pessoas trabalham</h3>
            </div>
            <p className={styles.textoCardBranco}>
              Escolas, universidades, editoras, jornais, emissoras de rádio e TV,
              agências de publicidade e empresas de tecnologia. Muitos profissionais
              da área também trabalham por conta própria, atendendo vários clientes ao
              mesmo tempo, principalmente revisores, tradutores e redatores.
            </p>
            <p className={styles.textoCardBranco}>
              Com a internet, a demanda por bons textos aumentou: sites, aplicativos e
              redes sociais precisam de pessoas que escrevam de forma clara e correta.
            </p>
          </div>
        </section>

        <section className={styles.secao}>
          <div className={styles.cardAzul}>
            <div className={styles.senaiCabecalho}>
              <div>
                <h2 className={styles.tituloSenai}>
                  O português nos cursos do SENAI Valinhos
                </h2>
                <p className={styles.textoSenai}>
                  Nos cursos técnicos do SENAI Valinhos, escrever e ler bem também faz
                  parte do trabalho do dia a dia, mesmo em áreas que parecem distantes
                  da língua portuguesa.
                </p>
              </div>
              <a
                href="https://sp.senai.br/unidade/valinhos/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.botaoContornoBranco}
              >
                <span>Site do SENAI Valinhos</span>
                <ExternalLink size={18} />
              </a>
            </div>

            <div className={styles.gradeSenai}>
              <div className={styles.itemSenai}>
                <div className={styles.itemSenaiTopo}>
                  <Code2 size={20} />
                  <h3>Desenvolvimento de Sistemas</h3>
                </div>
                <p>
                  Documentar o sistema, entender e registrar o que o cliente precisa,
                  escrever manuais e criar mensagens claras para quem vai usar o
                  programa. Um código bem feito, mas mal explicado, é difícil de
                  manter.
                </p>
              </div>

              <div className={styles.itemSenai}>
                <div className={styles.itemSenaiTopo}>
                  <Wrench size={20} />
                  <h3>Mecânica e manutenção</h3>
                </div>
                <p>
                  Preencher ordens de serviço, escrever relatórios sobre o reparo feito
                  e interpretar manuais técnicos e normas de segurança.
                </p>
              </div>

              <div className={styles.itemSenai}>
                <div className={styles.itemSenaiTopo}>
                  <Zap size={20} />
                  <h3>Eletroeletrônica</h3>
                </div>
                <p>
                  Registrar inspeções, escrever laudos e entender normas como a NR-10,
                  que trata da segurança em instalações elétricas.
                </p>
              </div>
            </div>

            <p className={styles.destaqueSenai}>
              Um técnico que escreve bem consegue explicar um problema com clareza,
              registrar o que foi feito sem deixar dúvidas e se comunicar melhor com
              clientes e colegas.
            </p>

            <h3 className={styles.subtituloSenai}>
              Funções que unem a formação técnica com a escrita:
            </h3>

            <div className={styles.gradeSenai}>
              <div className={styles.itemSenai}>
                <div className={styles.itemSenaiTopo}>
                  <FileText size={20} />
                  <h4>Redator técnico</h4>
                </div>
                <p>
                  Escreve manuais, tutoriais e a documentação de produtos e sistemas.
                </p>
              </div>

              <div className={styles.itemSenai}>
                <div className={styles.itemSenaiTopo}>
                  <Headphones size={20} />
                  <h4>Analista de suporte</h4>
                </div>
                <p>
                  Atende clientes e explica soluções de forma simples, por escrito ou
                  por telefone.
                </p>
              </div>

              <div className={styles.itemSenai}>
                <div className={styles.itemSenaiTopo}>
                  <Presentation size={20} />
                  <h4>Instrutor técnico</h4>
                </div>
                <p>
                  Ensina a profissão a outras pessoas, o que exige clareza na fala e na
                  escrita.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.secao}>
          <h2 className={styles.tituloSecao}>Como começar ainda no ensino médio</h2>
          <p className={styles.subtituloSecao}>
            Atitudes práticas para desenvolver a leitura e a escrita desde já.
          </p>

          <div className={styles.cardBranco}>
            <ul className={styles.listaDicas}>
              <li className={styles.itemDica}>
                <CheckCircle2 size={20} className={styles.iconeAzul} />
                <div>
                  <strong>Leia com frequência:</strong> livros, crônicas e reportagens
                  ampliam o vocabulário e ajudam a escrever melhor.
                </div>
              </li>

              <li className={styles.itemDica}>
                <CheckCircle2 size={20} className={styles.iconeAzul} />
                <div>
                  <strong>Escreva todos os dias:</strong> mesmo textos curtos, como um
                  resumo do que você estudou.
                </div>
              </li>

              <li className={styles.itemDica}>
                <CheckCircle2 size={20} className={styles.iconeAzul} />
                <div>
                  <strong>Peça revisão:</strong> mostre seus textos para um professor ou
                  colega e aprenda com as correções.
                </div>
              </li>

              <li className={styles.itemDica}>
                <CheckCircle2 size={20} className={styles.iconeAzul} />
                <div>
                  <strong>Participe de concursos:</strong> a Olimpíada de Língua
                  Portuguesa e os concursos de redação são ótimas oportunidades.
                </div>
              </li>

              <li className={styles.itemDica}>
                <CheckCircle2 size={20} className={styles.iconeAzul} />
                <div>
                  <strong>Treine a redação do Enem:</strong> ela é cobrada em muitos
                  vestibulares e processos seletivos.
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}