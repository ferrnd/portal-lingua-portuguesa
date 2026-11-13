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
        titulo: '10 Curiosidades sobre a Língua Portuguesa',
        descricao: `Neste vídeo, o criador apresenta dez curiosidades sobre a língua portuguesa, abordando as suas características únicas e a sua relevância global. A explicação começa pela origem partilhada com o galego e a complexidade fonética do português, que se destaca pela vasta variedade de vogais, totalizando nove orais e cinco nasais. Ao longo da exposição, são exploradas peculiaridades gramaticais, como o uso do futuro do conjuntivo e a existência do infinitivo pessoal. O autor discute também as variações nos pronomes pessoais e a clara preferência no português europeu por evitar o uso do gerúndio, optando pela estrutura "estar a + infinitivo". Além disso, é detalhada a distinção entre os verbos ser e estar e o emprego do pretérito perfeito composto. O vídeo termina com uma reflexão sobre a dimensão internacional do idioma, que é uma das mais faladas do mundo, contando com mais de 270 milhões de falantes.`,
        youtubeId: 'sNAl1krkVJI',
    },
    // Vídeo 2
    {
        titulo: ' Os 10 erros mais comuns na Língua Portuguesa [Prof. Noslen]',
        descricao: `O vídeo do Professor Noslen apresenta dez erros gramaticais comuns no português para facilitar o uso correto no dia a dia. Ele aborda temas como a regência dos verbos lembrar e assistir, o uso correto de onde e aonde, a aplicação de crase em dias da semana, a diferença entre haja e aja , além de explicar o uso impessoal dos verbos fazer e haver. Por fim, o professor esclarece o emprego do termo o mesmo, a regência de implicar e a distinção entre os pronomes este e esse.`,
        youtubeId: 'tTfkk4-40No',
    },
    // Vídeo 3
    {
        titulo: 'As 10 palavras que quase todo mundo pronuncia errado',
        descricao: `A professora Lara Brenner explica no vídeo como pronunciar corretamente 10 palavras que são frequentemente ditas de forma equivocada no cotidiano. Para garantir a precisão, ela recomenda consultar o Vocabulário Ortográfico da Língua Portuguesa. As correções incluem dizer subsídio com som de 's' em vez de 'z', e usar choramingar no lugar de choromingar. Ela esclarece que o termo correto é asterisco, combatendo o erro comum de adicionar um 'ti' ao final, e que o verbo entreter dá origem a entretida, e não entertida. A professora também ressalta que reivindicar não possui a letra 'n' após o 'i', e que palavras como gratuito, circuito, fortuito e intuito devem ser pronunciadas com o som de 'ui' sem acento. Além disso, ela pontua que inexorável, apesar de ser escrita com 'x', possui som de 'z', destaca a necessidade de manter o som do 'r' em perturbar e supermercado, explica que geminadas é o termo adequado para coisas gêmeas, e encerra orientando que a forma correta é sobrancelha, escrita sem a letra 'm'.`,
        youtubeId: 'AnF6CMvreoI',
    },
    // Vídeo 4
    {
        titulo: 'Como o LATIM evoluiu para o PORTUGUÊS? | História da Língua Portuguesa',
        descricao: `O vídeo explica a formação da língua portuguesa a partir da ocupação romana na Península Ibérica no século III a.C.. Inicialmente, existia o latim clássico, usado em contextos formais e urbanos, e o latim vulgar, falado pelas populações rurais e menos letradas. Foi justamente a partir do latim vulgar, que era mais flexível e realista, que as línguas românicas se desenvolveram após o declínio do Império Romano e as invasões bárbaras no século V. Nesse cenário de mudanças, surgiu o galego-português, dialeto fundamental que deu origem ao português moderno, sendo registrado em obras como as Cantigas de Santa Maria do Rei Afonso X no século XII. O vídeo também aborda os mecanismos linguísticos chamados metaplasmos, ilustrando como palavras latinas se transformaram ao longo do tempo em termos atuais, como pluvia em "chuva" ou memorare em "lembrar", demonstrando que a língua é um organismo vivo em constante evolução.`,
        youtubeId: 'CB0gqy-OcMA',
    },
    // Vídeo 5
    {
        titulo: 'AS 10 PALAVRAS MAIS DIFÍCEIS DO PORTUGUÊS',
        descricao: `Neste vídeo, o professor Pablo Jamilk apresenta uma seleção das 10 palavras mais complexas de se pronunciar na língua portuguesa, destacando termos longos e técnicos. Para facilitar o aprendizado, ele ensina uma técnica eficiente de dividir cada palavra em blocos menores, permitindo que a pronúncia seja feita de forma gradual e correta. Ao longo do conteúdo, ele explora significados e origens de termos fascinantes como o pneumoultramicroscopicossilicovulcanoconiótico, reconhecido como a palavra mais longa do idioma, e a curiosa hipopotomonstrosesquipedaliofobia, que define ironicamente o medo de palavras grandes. O vídeo também aborda termos médicos e jurídicos complexos, como anticonstitucionalissimamente, otorrinolaringologista, cineangiocoronariografia, dacriocistoceletomia, histerossalpingografia, aeropessotermoterápico, coledocoduodenostomia e meningoencefalomielite, reiterando que a paciência na segmentação das sílabas é a chave para dominar a leitura de vocabulários desafiadores.`,
        youtubeId: 'f1yv2vJxZg',
    },
    // Vídeo 6
    {
        titulo: 'Uso da Vírgula! Com Prof. Noslen!',
        descricao: `Neste vídeo, o professor Noslen esclarece que o uso da vírgula não serve para marcar uma pausa para respirar, mas sim para organizar o texto e reproduzir as entonações e intenções da fala de forma gráfica. Ele demonstra como a posição da vírgula pode alterar completamente o sentido de uma frase, criando ou eliminando heróis, vilões e até mudando o valor numérico de expressões. Ao longo da explicação, ele apresenta 11 regras principais para o uso obrigatório da vírgula, que incluem casos como enumerações, vocativos, apostos, adjuntos adverbiais deslocados, elipses verbais e orações coordenadas ou subordinadas. Por fim, o professor destaca quatro situações em que a vírgula nunca deve ser utilizada, como a separação entre sujeito e predicado ou entre verbo e seus complementos, enfatizando que o domínio dessas normas é fundamental para garantir a clareza, a organização e a intenção correta na escrita.`,
        youtubeId: '-uUtlvKifiY',
    },
    // Vídeo 7
    {
        titulo: 'COORDENAÇÃO e SUBORDINAÇÃO: Aula COMPLETA de PERÍODO COMPOSTO ',
        descricao: `Nesta aula, o professor Noslen explica o conceito de período composto na língua portuguesa, que ocorre quando uma estrutura apresenta duas ou mais orações, cada uma contendo um verbo. Ele diferencia as duas formas principais de organizar essas orações: a coordenação e a subordinação. No período composto por coordenação, as orações são sintaticamente independentes, não dependendo uma da outra para que seu sentido seja completo, podendo ser classificadas como assindéticas, quando ligadas apenas por pontuação (como vírgulas), ou sindéticas, quando conectadas por conjunções. Já no período composto por subordinação, existe uma relação de dependência sintática, onde uma oração precisa da outra para que o sentido seja estabelecido. O vídeo finaliza com a resolução de exercícios práticos que ajudam a fixar essas definições e a identificar as estruturas em frases reais.`,
        youtubeId: 'QYP0G1sBOz8',
    },
    // Vídeo 8
    {
        titulo: ' ACENTUAÇÃO: OXÍTONAS, PAROXÍTONAS e PROPAROXÍTONAS || Português do Zero',
        descricao: `Este vídeo explica as regras de acentuação gráfica em português, começando pela identificação da sílaba tônica para classificar as palavras. As proparoxítonas são sempre acentuadas, enquanto as paroxítonas e oxítonas seguem critérios específicos de terminação. O conteúdo aborda ainda os monossílabos tônicos, a mudança ortográfica que retirou acentos de ditongos abertos em paroxítonas e a regra dos hiatos com o uso das letras i e u.`,
        youtubeId: 'vmKggNWVvtU',
    },
    // Vídeo 9
    {
        titulo: 'PALAVRAS IGUAIS, SENTIDO DIFERENTE!',
        descricao: `Neste vídeo, a professora Márcia Macedo apresenta uma aula sobre a riqueza da língua portuguesa, focando em palavras homônimas: termos que possuem a mesma grafia e pronúncia, mas significados distintos dependendo do contexto. Ela demonstra essa variação através de exemplos cotidianos, começando com o termo "manga", que pode se referir à fruta ou à parte de uma peça de vestuário, e "mangueira", que designa tanto a árvore frutífera quanto o utensílio de regar. A explicação prossegue com "canto", explorado como o ato de cantar, um local ou um ângulo, seguido por "cedo", que varia entre um período do dia e o verbo ceder. A professora também aborda "morro" (verbo morrer ou a elevação geográfica), "rio" (cidade, curso d'água ou verbo rir) e "mato" (vegetação ou conjugação do verbo matar). A exploração avança para "marca" (fabricante, sinal, numeral ou verbo), o termo "são" (verbo ser, estado de saúde ou santo), "saia" (vestimenta ou verbo sair), "leve" (verbo levar ou algo sem peso), "banco" (instituição, assento ou elevação no mar) e encerra com "verão" (estação do ano ou futuro do verbo ver). O objetivo central é ilustrar como o vocabulário português é vasto e como o entendimento correto de muitas palavras depende exclusivamente da interpretação contextual.`,
        youtubeId: 'Z9wQLmVCWkw',
    },
    // Vídeo 10
    {
        titulo: 'Método INFALÍVEL pra saber QUANDO usar a CRASE | Professor Noslen',
        descricao: `O vídeo explica o uso da crase, que é a fusão da preposição 'a' com o artigo definido feminino 'a'. O Professor Noslen detalha situações específicas para o seu emprego, começando pelas locuções adverbiais femininas, onde o uso é obrigatório, como em 'à esquerda' ou 'à caneta'. Ele ressalta que não ocorre crase antes de palavras masculinas, como em 'a todos'. Sobre o uso com as palavras 'casa' e 'terra', a crase só é obrigatória se houver um termo que especifique o substantivo. O vídeo também aborda o uso do pronome relativo 'a qual' e pronomes de tratamento como 'dona', 'senhora' e 'senhorita'. Para nomes de cidades, o professor ensina a técnica de substituir o 'vou a' por 'volto da' para identificar se a crase é necessária. Por fim, o conteúdo trata dos casos de crase facultativa, que ocorrem antes de pronomes possessivos femininos, nomes próprios de pessoas e após a palavra 'até'.`,
        youtubeId: 'aS-ZDEQTK5M',
    },
    // Vídeo 11
    {
        titulo: 'COMO AUMENTAR RÁPIDO SEU VOCABULÁRIO com 1 exercício simples (e usar no dia a dia)',
        descricao: `Neste vídeo, Lara Brenner explica que, embora a leitura seja fundamental, ela não garante por si só uma expansão eficaz do vocabulário, sendo necessário transformar o contato passivo com as palavras em um processo ativo e intencional. A autora enfatiza que a motivação correta deve ser a "fome de mundo" — o desejo genuíno de descrever a realidade com mais precisão e clareza — em vez de apenas buscar termos rebuscados para impressionar os outros. Para colocar isso em prática, ela propõe um exercício simples de três etapas: primeiro, ao encontrar uma palavra nova em uma leitura, deve-se recorrer a um dicionário confiável, como o Michaelis, para compreender o significado exato, realizando uma captura de tela. O segundo passo envolve consultar um dicionário de sinônimos para ampliar o repertório e formular uma frase própria com o novo termo, arquivando esses registros em um local organizado, como uma pasta ou grupo no WhatsApp. Por fim, o ponto central do exercício é a aplicação ativa da palavra no cotidiano, na primeira oportunidade disponível; embora o uso possa parecer artificial ou "estranho" no início, a repetição é o que torna o termo uma parte orgânica e natural do vocabulário pessoal do indivíduo. Ao longo do conteúdo, Lara utiliza exemplos literários, como os termos "peralta" e "lúgubre", para ilustrar como a compreensão precisa do contexto é essencial para o domínio lexical.`,
        youtubeId: 'VtMGkOjebxw',
    },
    // Vídeo 12
    {
        titulo: 'A Influência do Árabe no Português',
        descricao: `Este vídeo explora a profunda influência da língua árabe no português, um legado que remonta à presença dos mouros na Península Ibérica entre os séculos VIII e XV . O apresentador explica que essa influência não é apenas histórica, mas está presente no nosso vocabulário quotidiano, manifestando-se frequentemente através do artigo definido árabe "al-", que foi incorporado em muitas palavras, como "algodão", "açúcar" e "almofada". Além de exemplos diretos, o vídeo destaca outras características linguísticas, como a presença frequente de palavras iniciadas por "az-" (ex: "azeite", "azafama") e a substituição de sons latinos por "x" ou "ch" em termos como "enxaqueca" . Ao longo da exposição, é feita uma análise detalhada de diversos grupos de palavras, desde termos científicos e matemáticos até nomes de alimentos e objetos, demonstrando como o árabe contribuiu para enriquecer a língua portuguesa com vocabulário técnico e cultural.`,
        youtubeId: 'AAqc1rBniD0',
    },
    // Vídeo 13
    {
        titulo: 'Qual é o som da letra H?',
        descricao: `Dalla Vecchia explica o funcionamento sonoro da letra H no português. Ela esclarece que, na maioria dos casos, como no início de palavras (ex: homem, herói) ou em interjeições, o H não possui valor fonético ou sonoro, servindo apenas para marcar a etimologia da palavra. No entanto, a especialista aponta exceções importantes, como em termos de origem estrangeira ou nomes próprios, onde a letra pode assumir um som de R, como em handebol ou Haniel. Além disso, o vídeo destaca que o H desempenha um papel fundamental ao compor dígrafos, alterando o som de outras consoantes, como ocorre nas combinações com C, N e L, que resultam nos fonemas específicos de ch, nh e lh. Portanto, conclui-se que afirmar que a letra é inteiramente muda seria uma visão superficial, dada a sua diversidade de funções no sistema da nossa língua .`,
        youtubeId: 'EgSIWzrUeps',
    },
    // Vídeo 14
    {
        titulo: 'Por que o plural de “pão” é “pães” e de “grão” é “grãos”? Professor Noslen',
        descricao: `Neste vídeo, o professor Noslen explica que não existe uma regra gramatical única e universal para formar o plural de substantivos terminados em -ão. Em vez de uma fórmula simples, a variação entre as terminações -ões, -ães e -ãos depende da etimologia e da morfologia da palavra, ou seja, de como elas foram construídas desde o latim até chegarem à língua portuguesa atual. Por isso, o professor enfatiza que o melhor caminho para aprender o plural correto é através da leitura constante e da prática de escrita, que ajudam a fixar a forma visual e correta de cada palavra na memória. Além disso, ele destaca que algumas palavras possuem mais de uma forma aceita para o plural, como é o caso de "anão" (anãos ou anões) e "artesão" (artesãos ou artesões), reforçando que a familiaridade com o vocabulário é fundamental para dominar essas nuances.`,
        youtubeId: 'q-hnLRqG_jk',
    },
    // Vídeo 15
    {
        titulo: '15 palavras que parecem erradas, mas estão certas',
        descricao: `Neste vídeo, a criadora Lara Brenner explora 15 palavras do português que frequentemente causam confusão devido a hábitos populares de fala ou escrita que divergem da norma culta. Ela contextualiza a importância de seguir o registro formal, utilizando exemplos como a polêmica em torno da palavra "recorde", cuja pronúncia correta deve ser paroxítona, e a distinção entre "desenteria" e a forma coloquial incorreta "desinteria". Ao longo da explicação, a autora corrige erros recorrentes de ortografia, como a ausência de acento em "sutil", e de prosódia, como a pronúncia de "gratuito", reforçando que a sílaba tônica não recai sobre o "i". O vídeo também aborda termos técnicos e cotidianos como "cateter", "cabeleireiro", "mister", "rubrica", "fluido", "supérfluo", "fragrância", "bicarbonato", "privilégio" e "poliomielite". O objetivo central é fornecer uma orientação prática para que os falantes possam aprimorar sua comunicação, distanciando-se de vícios de linguagem e aproximando-se da elegância e correção gramatical exigidas no uso formal da língua.`,
        youtubeId: 'ddj8KbfpwZo',
    },
];

const questoes = [
    // Questão 1
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 2
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 3
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 4
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 5
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 6
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 7
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 8
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 9
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 10
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 11
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 12
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 13
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 14
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 15
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 16
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 17
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 18
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 19
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 20
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 21
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 22
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 23
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 24
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
    },
    // Questão 25
    {
        enunciado: '',
        alternativas: [
            '',
            '',
            '',
            '',
            '',
        ],
        respostaCorreta: '',
        explicacao: '',
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
