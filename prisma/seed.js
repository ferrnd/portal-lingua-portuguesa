import pg from 'pg';
import 'dotenv/config';
import pkg from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const { PrismaClient } = pkg;
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const noticias = [
    // Notícia 1
    {
        titulo: 'Brasil ainda tem 8,4 milhões de pessoas que não sabem ler e escrever',
        resumo: 'Apesar da redução da taxa de analfabetismo no Brasil, 8,4 milhões de pessoas com 15 anos ou mais ainda não sabem ler e escrever. Os dados foram divulgados pelo IBGE em junho de 2026 e mostram que o analfabetismo continua sendo um problema social no país.',
        conteudo: 'De acordo com dados divulgados pelo Instituto Brasileiro de Geografia e Estatística (IBGE), o Brasil tinha 8,4 milhões de pessoas analfabetas em 2025, o equivalente a 4,9% da população com 15 anos ou mais. Apesar de representar a menor taxa desde o início da série histórica, em 2016, o número ainda chama a atenção.\n\nA pesquisa também revelou que a maior parte das pessoas que não sabem ler e escrever tem 60 anos ou mais, representando 58% do total de analfabetos. A região Nordeste concentra 4,8 milhões dessas pessoas.\n\nOutro dado preocupante é a desigualdade entre grupos da população. Entre pessoas pretas ou pardas com 60 anos ou mais, a taxa de analfabetismo chega a 20,6%, enquanto entre pessoas brancas da mesma faixa etária é de 7,3%.\n\nO analfabetismo dificulta atividades cotidianas, como ler documentos, interpretar informações, escrever mensagens e compreender notícias. Por isso, o acesso à alfabetização e à educação é fundamental para garantir melhores oportunidades e participação na sociedade.\n\nFonte: IBGE, PNAD Contínua Educação 2025.\nFoto: Geovana Albuquerque/Agência Brasília (CC BY 2.0).',
        dataPublicacao: new Date('2026-06-19'),
        urlImagem: '/noticias/analfabetismo-ibge.webp',
        urlFonte: 'https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2012-agencia-de-noticias/noticias/47221-analfabetismo-fica-abaixo-de-5-em-2025-mas-8-4-milhoes-ainda-nao-sabem-ler-e-escrever.html',
    },
    // Notícia 2
    {
        titulo: 'Tema da redação do ENEM 2026 é a valorização do SUS',
        resumo: 'O tema da redação do ENEM 2026 foi "A valorização do Sistema Único de Saúde (SUS) como direito universal". O assunto foi divulgado no dia da prova, 8 de novembro, e pediu um texto dissertativo-argumentativo de até 30 linhas.',
        conteudo: 'O tema da redação do Exame Nacional do Ensino Médio (ENEM) de 2026 foi "A valorização do Sistema Único de Saúde (SUS) como direito universal". O assunto foi divulgado pelo Ministério da Educação no próprio dia da prova, 8 de novembro.\n\nComo nas edições anteriores, os participantes tiveram que produzir um texto dissertativo-argumentativo de até 30 linhas, apresentando uma proposta de intervenção para o problema discutido.\n\nSegundo professores de redação, o tema rompe com a tendência dos últimos três anos, em que o exame abordou recortes voltados a grupos específicos da sociedade: o envelhecimento, a herança africana e o trabalho de cuidado.\n\nPara quem vai prestar vestibulares, o tema reforça a importância de acompanhar assuntos ligados à saúde pública, à cidadania e aos direitos garantidos pela Constituição.\n\nFonte: Inep e Agência Gov.\nFoto: Unsplash.',
        dataPublicacao: new Date('2026-11-08'),
        urlImagem: '/noticias/enem-redacao.webp',
        urlFonte: 'https://www.gov.br/inep/pt-br/centrais-de-conteudo/noticias/enem/tema-da-redacao-a-valorizacao-do-sistema-unico-de-saude-sus-como-direito-universal',
    },
    // Notícia 3
    {
        titulo: 'Ruy Castro vence o Prêmio Jabuti 2026 pela segunda vez seguida',
        resumo: 'O escritor Ruy Castro venceu a categoria Livro do Ano do 68º Prêmio Jabuti com "Trincheira tropical: a Segunda Guerra Mundial no Rio". Foi a segunda vez consecutiva que ele conquistou o prêmio principal.',
        conteudo: 'O escritor Ruy Castro venceu a categoria Livro do Ano do 68º Prêmio Jabuti com a obra "Trincheira tropical: a Segunda Guerra Mundial no Rio", publicada pela Companhia das Letras. Foi a segunda vez consecutiva que o autor conquistou o prêmio principal da premiação.\n\nNa categoria Romance, a vencedora foi a escritora Eliana Alves Cruz. A edição também homenageou Lygia Bojunga, escolhida como Personalidade Literária.\n\nA cerimônia de entrega aconteceu em 27 de outubro de 2026, na Sala São Paulo, em São Paulo.\n\nCriado em 1959, o Prêmio Jabuti é um dos mais tradicionais prêmios literários do Brasil e reconhece obras e profissionais do mercado editorial em diversas categorias.\n\nFonte: Folha de Pernambuco.\nFoto: cerimônia do 65º Prêmio Jabuti, em 2023. Sintegrity/Wikimedia Commons (CC BY-SA 4.0).',
        dataPublicacao: new Date('2026-10-27'),
        urlImagem: '/noticias/jabuti-cerimonia.webp',
        urlFonte: 'https://www.folhape.com.br/cultura/ruy-castro-premiojabuti/521164/',
    },
    // Notícia 4
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
    // Notícia 5
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
    // Notícia 6
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
    // Notícia 7
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
    // Notícia 8
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
    // Notícia 9
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
    // Notícia 10
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
    // Notícia 11
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
    // Notícia 12
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
    // Notícia 13
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
    // Notícia 14
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
    // Notícia 15
    {
        titulo: '',
        resumo: '',
        conteudo: '',
        dataPublicacao: new Date('2026-01-01'),
        urlImagem: '',
        urlFonte: '',
    },
];

const videos = [
    // Vídeo 1
    {
        titulo: '',
        descricao: '',
        youtubeId: '',
    },
    // Vídeo 2
    {
        titulo: '',
        descricao: '',
        youtubeId: '',
    },
    // Vídeo 3
    {
        titulo: '',
        descricao: '',
        youtubeId: '',
    },
];

const questoes = [
    // Questão 1
    {
        enunciado: '',
        alternativas: ['', '', '', '', ''],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 2
    {
        enunciado: '',
        alternativas: ['', '', '', '', ''],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 3
    {
        enunciado: '',
        alternativas: ['', '', '', '', ''],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 4
    {
        enunciado: '',
        alternativas: ['', '', '', '', ''],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 5
    {
        enunciado: '',
        alternativas: ['', '', '', '', ''],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 6
    {
        enunciado: '',
        alternativas: ['', '', '', '', ''],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 7
    {
        enunciado: '',
        alternativas: ['', '', '', '', ''],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 8
    {
        enunciado: '',
        alternativas: ['', '', '', '', ''],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 9
    {
        enunciado: '',
        alternativas: ['', '', '', '', ''],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 10
    {
        enunciado: '',
        alternativas: ['', '', '', '', ''],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 11
    {
        enunciado: '',
        alternativas: ['', '', '', '', ''],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 12
    {
        enunciado: '',
        alternativas: ['', '', '', '', ''],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 13
    {
        enunciado: '',
        alternativas: ['', '', '', '', ''],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 14
    {
        enunciado: '',
        alternativas: ['', '', '', '', ''],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 15
    {
        enunciado: '',
        alternativas: ['', '', '', '', ''],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 16
    {
        enunciado:
            'Em "Vidas Secas", de Graciliano Ramos, a cachorra Baleia ocupa um lugar central no enredo. A cena de sua morte é considerada uma das mais marcantes do romance porque:',
        alternativas: [
            'A) revela, por meio de um narrador onisciente, a capacidade do animal de refletir de forma articulada sobre a morte, o que contrasta com a incapacidade verbal dos personagens humanos.',
            'B) simboliza o triunfo da natureza sobre a civilização, já que a morte de Baleia marca o fim da seca e o início de uma fase próspera para a família.',
            'C) representa o rompimento definitivo entre Fabiano e Sinhá Vitória, que passam a culpar um ao outro pela necessidade de sacrificar o animal.',
            'D) humaniza o animal ao dar-lhe sonhos e esperanças, o que o aproxima da condição dos retirantes e evidencia a desumanização a que a família é submetida.',
            'E) expressa o otimismo do autor em relação ao sertão, pois Baleia, mesmo ferida, consegue guiar a família até uma região fértil.',
        ],
        respostaCorreta: 'D',
        explicacao:
            'Em Vidas Secas, Baleia sonha com preás e com um mundo cheio deles antes de morrer, e é a personagem com a vida interior mais rica. Os humanos, por sua vez, são "animalizados" pela miséria e quase não conseguem se comunicar. A inversão entre humanização do bicho e animalização das pessoas é o grande recurso crítico do romance.',
    },
    // Questão 17
    {
        enunciado:
            'Leia o trecho: "O ônibus lotado seguia devagar, e a cidade, indiferente, engolia seus passageiros como quem não sente o gosto do que come." As figuras de linguagem predominantes nesse trecho são, respectivamente:',
        alternativas: [
            'A) personificação e comparação.',
            'B) metáfora e antítese.',
            'C) hipérbole e eufemismo.',
            'D) ironia e paradoxo.',
            'E) metonímia e pleonasmo.',
        ],
        respostaCorreta: 'A',
        explicacao:
            'Atribuir à cidade ações e sentimentos humanos (ser indiferente, engolir) é personificação (prosopopeia). A expressão "como quem não sente o gosto do que come" introduz um termo comparativo explícito ("como"), caracterizando uma comparação.',
    },
    // Questão 18
    {
        enunciado:
            'Assinale a alternativa em que a vírgula está empregada de acordo com a norma-padrão.',
        alternativas: [
            'A) Os alunos que estudaram, foram aprovados, os outros, não.',
            'B) Quando chegou a noite a cidade, finalmente, silenciou.',
            'C) O professor explicou, que a prova seria adiada.',
            'D) Maria, e João, saíram cedo da escola.',
            'E) Machado de Assis, autor de "Dom Casmurro", é considerado o maior nome do Realismo brasileiro.',
        ],
        respostaCorreta: 'E',
        explicacao:
            'A expressão "autor de Dom Casmurro" é um aposto explicativo e deve vir isolada por vírgulas. Nas demais alternativas há erros: vírgula entre verbo e complemento (C), vírgula separando sujeito composto ligado por "e" (D), ausência de vírgula após a oração adverbial deslocada (B) e pontuação inadequada (A).',
    },
    // Questão 19
    {
        enunciado:
            'A Semana de Arte Moderna de 1922 é um marco do Modernismo brasileiro. Entre as principais propostas da chamada "primeira fase" do movimento, destaca-se:',
        alternativas: [
            'A) a valorização rigorosa da métrica e da rima, como forma de preservar a tradição parnasiana.',
            'B) o retorno ao espiritualismo e ao subjetivismo exacerbado típicos do Romantismo.',
            'C) a ruptura com os padrões estéticos tradicionais, o uso do verso livre e a valorização de uma linguagem mais próxima da fala brasileira.',
            'D) a imitação dos modelos clássicos europeus como caminho para elevar a literatura nacional.',
            'E) a defesa de uma literatura exclusivamente voltada para a denúncia da seca no Nordeste.',
        ],
        respostaCorreta: 'C',
        explicacao:
            'A primeira fase modernista (1922-1930) foi marcada pelo espírito de ruptura, pela liberdade formal (verso livre, ausência de rima obrigatória), pelo humor e pela busca de uma identidade nacional, inclusive na linguagem. A denúncia social do Nordeste é característica da segunda fase (Romance de 30).',
    },
    // Questão 20
    {
        enunciado:
            'Em "Os meninos que acabaram de chegar foram recebidos pela diretora", a oração destacada em "que acabaram de chegar" classifica-se como:',
        alternativas: [
            'A) oração subordinada substantiva objetiva direta.',
            'B) oração subordinada adjetiva restritiva.',
            'C) oração subordinada adverbial temporal.',
            'D) oração subordinada adjetiva explicativa.',
            'E) oração coordenada sindética explicativa.',
        ],
        respostaCorreta: 'B',
        explicacao:
            'O "que" é pronome relativo e retoma "meninos", funcionando como adjetivo desse substantivo. Como a oração restringe o sentido do antecedente (apenas os meninos que acabaram de chegar, e não todos), não vem separada por vírgulas e é restritiva.',
    },
    // Questão 21
    {
        enunciado:
            'Considere o poema "No meio do caminho", de Carlos Drummond de Andrade, em que a expressão "tinha uma pedra no meio do caminho" é repetida diversas vezes. Esse recurso, somado à linguagem simples e prosaica, produz principalmente o efeito de:',
        alternativas: [
            'A) enfatizar a obsessão do eu lírico com um obstáculo que se fixa na memória e se torna marcante, quebrando a expectativa do leitor por um lirismo tradicional.',
            'B) descrever de forma objetiva um fato corriqueiro, sem qualquer valor simbólico.',
            'C) demonstrar o domínio das formas fixas, como o soneto, por meio de um padrão rígido de rimas.',
            'D) criar um tom épico, exaltando a superação de dificuldades pelo herói.',
            'E) reproduzir o estilo parnasiano, caracterizado pelo vocabulário rebuscado.',
        ],
        respostaCorreta: 'A',
        explicacao:
            'A repetição insistente cria efeito de ruminação, de um acontecimento que não sai da mente. A linguagem coloquial e a ausência de rebuscamento são marcas do Modernismo e provocaram escândalo na época da publicação, justamente por romperem com o "poético" convencional.',
    },
    // Questão 22
    {
        enunciado: 'Assinale a alternativa em que o uso da crase está CORRETO.',
        alternativas: [
            'A) Fui à pé até a escola.',
            'B) Entreguei o trabalho à ela ontem.',
            'C) O curso começará à partir de segunda-feira.',
            'D) Referiu-se à moça que estava na porta.',
            'E) Não obedeço à ordens injustas.',
        ],
        respostaCorreta: 'D',
        explicacao:
            'O verbo "referir-se" exige a preposição "a" e o substantivo "moça" admite o artigo "a", resultando em "à". Nas demais: não há crase antes de palavra masculina (à pé), antes de pronome pessoal (à ela), em locuções com verbo (à partir) nem antes de palavra no plural sem artigo (à ordens).',
    },
    // Questão 23
    {
        enunciado:
            'Em "Memórias Póstumas de Brás Cubas", de Machado de Assis, o narrador é um defunto-autor que relata sua vida depois de morto. Essa escolha narrativa contribui para a obra porque:',
        alternativas: [
            'A) permite ao narrador adotar um tom sentimental e idealizado, típico do Romantismo.',
            'B) garante a neutralidade e a objetividade absolutas, características do Naturalismo científico.',
            'C) reforça o caráter heroico do protagonista, que supera a própria morte por meio da literatura.',
            'D) permite ao leitor acompanhar a narrativa em ordem cronológica rigorosa, do nascimento à morte.',
            'E) libera o narrador dos compromissos sociais, possibilitando uma análise irônica, cínica e distanciada da sociedade e de si mesmo.',
        ],
        respostaCorreta: 'E',
        explicacao:
            'Brás Cubas, já morto, não tem mais nada a perder e pode expor sem pudor as hipocrisias, vaidades e interesses da elite carioca do século XIX. O romance rompe com a linearidade, usa digressões e dialoga diretamente com o leitor, marcas do Realismo machadiano.',
    },
    // Questão 24
    {
        enunciado: 'Em qual alternativa a concordância verbal está de acordo com a norma-padrão?',
        alternativas: [
            'A) Fazem dois anos que me formei no ensino médio.',
            'B) Devem existir soluções para esse problema.',
            'C) Haviam muitos candidatos na fila do vestibular.',
            'D) Bateu três horas quando o professor chegou.',
            'E) Os Estados Unidos é um país de grande extensão territorial.',
        ],
        respostaCorreta: 'B',
        explicacao:
            'Em locução verbal, o verbo auxiliar concorda com o sujeito: o verbo "existir" é pessoal e seu sujeito é "soluções" (plural), logo "devem existir". Nas demais: "faz dois anos" e "havia muitos" (verbos impessoais ficam no singular), "bateram três horas" (o verbo concorda com o número de horas) e "Os Estados Unidos são" (nome próprio plural com artigo).',
    },
    // Questão 25
    {
        enunciado:
            'Leia o trecho: "A tecnologia aproxima quem está longe, mas distancia quem está perto." Essa construção apresenta, predominantemente, a figura de linguagem denominada:',
        alternativas: [
            'A) eufemismo, pois suaviza uma ideia desagradável.',
            'B) catacrese, pois utiliza um termo por falta de outro mais adequado.',
            'C) antítese, pois aproxima termos de sentidos opostos (longe/perto, aproxima/distancia).',
            'D) metonímia, pois substitui o todo por uma de suas partes.',
            'E) onomatopeia, pois reproduz sons por meio de palavras.',
        ],
        respostaCorreta: 'C',
        explicacao:
            'A antítese consiste na oposição de ideias ou palavras de sentidos contrários no mesmo enunciado. Aqui aparecem dois pares: "aproxima" x "distancia" e "longe" x "perto". Não confundir com paradoxo, que cria uma contradição aparente de ideias, e não só de palavras.',
    },
];

async function main() {
    console.log('🌱 Resetando tabelas noticia, video e questao...');

    // Remove todos os registros
    await prisma.$executeRaw`TRUNCATE TABLE noticia, video, questao RESTART IDENTITY`;

    console.log('📦 Inserindo novos registros...');

    const preenchidas = noticias.filter((noticia) => noticia.titulo);

    await prisma.noticia.createMany({
        data: preenchidas.map((noticia) => ({ ...noticia, urlFonte: noticia.urlFonte || null })),
    });

    const videosPreenchidos = videos.filter((video) => video.titulo);

    await prisma.video.createMany({ data: videosPreenchidos });

    const questoesPreenchidas = questoes.filter((questao) => questao.enunciado);

    await prisma.questao.createMany({ data: questoesPreenchidas });

    console.log(`✅ Seed concluído! ${preenchidas.length} notícias, ${videosPreenchidos.length} vídeos e ${questoesPreenchidas.length} questões inseridos.`);
}

main()
    .catch((e) => {
        console.error('❌ Erro no seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
