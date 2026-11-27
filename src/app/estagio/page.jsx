import TopoPagina from '@/components/TopoPagina';
import {
  Briefcase,
  Search,
  FileText,
  Scale,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  ExternalLink,
} from 'lucide-react';
import styles from './page.module.css';

export default function Estagio() {
  return (
    <>
      <TopoPagina
        titulo="Estágio"
        subtitulo="O que é, como funciona e como conseguir o seu."
      />

      <main className={`container ${styles.conteudo}`}>
        <section className={styles.secao}>
          <h2 className={styles.tituloSecao}>Entenda como funciona</h2>
          <p className={styles.subtituloSecao}>
            O estágio é uma atividade supervisionada em que o estudante aplica,
            em um ambiente de trabalho, o que aprendeu na escola.
          </p>

          <div className={styles.grade}>
            <article className={styles.cardCinza}>
              <div className={styles.iconeBox}>
                <Briefcase size={22} />
              </div>
              <h3 className={styles.tituloCard}>O que é estágio</h3>
              <p className={styles.textoCard}>
                É uma ótima forma de ganhar experiência, conhecer a rotina de
                uma profissão e descobrir em qual área você mais gosta de
                trabalhar. Muitas vezes, um bom estágio vira a primeira
                contratação.
              </p>

              <h4 className={styles.subtituloCard}>
                Obrigatório e não obrigatório
              </h4>
              <ul className={styles.lista}>
                <li>
                  <strong>Obrigatório:</strong> faz parte do curso e é
                  necessário para receber o diploma.
                </li>
                <li>
                  <strong>Não obrigatório:</strong> é opcional e feito por
                  escolha do estudante, para ganhar experiência.
                </li>
              </ul>
            </article>

            <article className={styles.cardCinza}>
              <div className={styles.iconeBox}>
                <Search size={22} />
              </div>
              <h3 className={styles.tituloCard}>Onde procurar</h3>
              <ul className={styles.lista}>
                <li>
                  <strong>CIEE:</strong> divulga vagas de estágio e de
                  aprendizagem.{' '}
                  <a
                    href="https://portal.ciee.org.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkExterno}
                  >
                    Acessar site <ExternalLink size={14} />
                  </a>
                </li>
                <li>
                  <strong>Nube:</strong> reúne oportunidades em várias áreas.{' '}
                  <a
                    href="https://www.nube.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkExterno}
                  >
                    Acessar site <ExternalLink size={14} />
                  </a>
                </li>
                <li>
                  <strong>SENAI-SP:</strong> oferece cursos técnicos e de
                  aprendizagem e mantém contato com empresas parceiras.{' '}
                  <a
                    href="https://www.sp.senai.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkExterno}
                  >
                    Acessar site <ExternalLink size={14} />
                  </a>
                </li>
                <li>
                  <strong>Empresas:</strong> muitas divulgam as vagas na própria
                  página de carreiras.
                </li>
              </ul>
            </article>

            <article className={styles.cardCinza}>
              <div className={styles.iconeBox}>
                <FileText size={22} />
              </div>
              <h3 className={styles.tituloCard}>
                O português no processo seletivo
              </h3>
              <ul className={styles.lista}>
                <li>
                  <strong>Currículo:</strong> revise a ortografia, a acentuação
                  e a pontuação. Um erro de português pode eliminar um candidato
                  logo na primeira etapa.
                </li>
                <li>
                  <strong>Entrevista:</strong> organize as ideias antes de
                  responder, fale com calma e evite gírias.
                </li>
                <li>
                  <strong>E-mails:</strong> escreva mensagens curtas, educadas e
                  sem abreviações como &quot;vc&quot; e &quot;tb&quot;.
                </li>
                <li>
                  <strong>Testes de redação:</strong> algumas empresas pedem um
                  texto curto. Leia o tema com atenção e revise antes de
                  entregar.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.secao}>
          <div className={styles.cardAzul}>
            <div className={styles.cabecalhoCard}>
              <div className={styles.iconeAzul}>
                <Scale size={24} />
              </div>
              <div>
                <h2 className={styles.tituloAzul}>
                  O que diz a lei (Lei nº 11.788/2008)
                </h2>
                <p className={styles.subtituloAzul}>
                  O estágio é regulamentado pela Lei nº 11.788/2008, conhecida
                  como Lei do Estágio. Os principais pontos são:
                </p>
              </div>
            </div>

            <div className={styles.grade}>
              <div className={styles.itemLei}>
                <CheckCircle2 size={18} className={styles.iconeLista} />
                <div>
                  <strong className={styles.destaqueLei}>Carga horária</strong>
                  <p className={styles.textoLei}>
                    Até 6 horas por dia e 30 horas por semana para estudantes do
                    ensino médio e de cursos técnicos.
                  </p>
                </div>
              </div>

              <div className={styles.itemLei}>
                <CheckCircle2 size={18} className={styles.iconeLista} />
                <div>
                  <strong className={styles.destaqueLei}>Bolsa</strong>
                  <p className={styles.textoLei}>
                    No estágio não obrigatório, a bolsa e o auxílio-transporte
                    são obrigatórios. No obrigatório, eles são opcionais.
                  </p>
                </div>
              </div>

              <div className={styles.itemLei}>
                <CheckCircle2 size={18} className={styles.iconeLista} />
                <div>
                  <strong className={styles.destaqueLei}>Contrato</strong>
                  <p className={styles.textoLei}>
                    O estágio é formalizado pelo Termo de Compromisso de
                    Estágio, assinado pelo estudante, pela empresa e pela
                    escola.
                  </p>
                </div>
              </div>

              <div className={styles.itemLei}>
                <CheckCircle2 size={18} className={styles.iconeLista} />
                <div>
                  <strong className={styles.destaqueLei}>Recesso</strong>
                  <p className={styles.textoLei}>
                    30 dias de descanso a cada ano de estágio, de preferência
                    nas férias escolares. Se o estágio durar menos de um ano, o
                    recesso é proporcional.
                  </p>
                </div>
              </div>

              <div className={styles.itemLei}>
                <CheckCircle2 size={18} className={styles.iconeLista} />
                <div>
                  <strong className={styles.destaqueLei}>Duração</strong>
                  <p className={styles.textoLei}>
                    O estágio na mesma empresa pode durar no máximo 2 anos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.secao}>
          <article className={styles.cardCinza}>
            <div className={styles.cabecalhoCard}>
              <div className={styles.iconeBox}>
                <ClipboardCheck size={22} />
              </div>
              <div>
                <h2 className={styles.tituloSecao}>
                  Checklist antes de se candidatar
                </h2>
                <p className={styles.subtituloSemMargem}>
                  Confira estes pontos essenciais antes de enviar seu currículo:
                </p>
              </div>
            </div>

            <ul className={styles.listaChecklist}>
              <li>
                <CheckCircle2 size={18} className={styles.iconeCheck} />
                <span>Currículo atualizado e revisado.</span>
              </li>
              <li>
                <CheckCircle2 size={18} className={styles.iconeCheck} />
                <span>Carga horária compatível com os horários do curso.</span>
              </li>
              <li>
                <CheckCircle2 size={18} className={styles.iconeCheck} />
                <span>Valor da bolsa e do auxílio-transporte conferidos.</span>
              </li>
              <li>
                <CheckCircle2 size={18} className={styles.iconeCheck} />
                <span>Atividades da vaga relacionadas ao seu curso.</span>
              </li>
              <li>
                <CheckCircle2 size={18} className={styles.iconeCheck} />
                <span>Pesquisa sobre a empresa feita antes da entrevista.</span>
              </li>
            </ul>
          </article>
        </section>

        <section className={styles.secao}>
          <div className={styles.cardBranco}>
            <div className={styles.cabecalhoCard}>
              <div className={styles.iconeBox}>
                <GraduationCap size={24} />
              </div>
              <div>
                <h2 className={styles.tituloSecao}>
                  Estágio nos cursos do SENAI Valinhos
                </h2>
                <p className={styles.subtituloSemMargem}>
                  Os alunos dos cursos técnicos do SENAI Valinhos, como
                  Desenvolvimento de Sistemas, Mecânica e Eletroeletrônica,
                  também podem fazer estágio. Em todos eles, o português aparece
                  o tempo todo:
                </p>
              </div>
            </div>

            <div className={styles.gradeDupla}>
              <div className={styles.blocoArea}>
                <h3 className={styles.tituloArea}>
                  Desenvolvimento de Sistemas
                </h3>
                <p className={styles.textoCard}>
                  Escrever a documentação de um programa, registrar os erros
                  encontrados nos testes e explicar o sistema para quem vai
                  usá-lo.
                </p>
              </div>

              <div className={styles.blocoArea}>
                <h3 className={styles.tituloArea}>
                  Mecânica e Eletroeletrônica
                </h3>
                <p className={styles.textoCard}>
                  Preencher ordens de serviço, relatar a manutenção realizada e
                  interpretar manuais e normas técnicas.
                </p>
              </div>
            </div>

            <div className={styles.notasSenai}>
              <p className={styles.textoCard}>
                No fim do estágio, muitas vezes o estudante precisa entregar um{' '}
                <strong>relatório</strong>, descrevendo as atividades realizadas
                e o que aprendeu. Um texto organizado e sem erros valoriza todo
                o trabalho feito.
              </p>
              <p className={styles.textoCard}>
                No SENAI também é comum a{' '}
                <strong>aprendizagem industrial</strong> (Jovem Aprendiz),
                regulamentada pela Lei nº 10.097/2000. Ela é diferente do
                estágio: o aprendiz tem contrato de trabalho e estuda no SENAI
                ao mesmo tempo.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.referencias}>
          <h3 className={styles.tituloReferencias}>Referências</h3>
          <ul className={styles.listaReferencias}>
            <li>
              BRASIL. Lei nº 11.788, de 25 de setembro de 2008.{' '}
              <a
                href="https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11788.htm"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkExterno}
              >
                Acessar texto da lei <ExternalLink size={14} />
              </a>
            </li>
            <li>
              BRASIL. Lei nº 10.097, de 19 de dezembro de 2000.{' '}
              <a
                href="https://www.planalto.gov.br/ccivil_03/leis/l10097.htm"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkExterno}
              >
                Acessar texto da lei <ExternalLink size={14} />
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
