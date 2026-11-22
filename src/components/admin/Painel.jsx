'use client';

import { Tabs } from 'antd';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Crud from './Crud';

const LETRAS = ['A', 'B', 'C', 'D', 'E'];

const noticias = {
    api: '/api/noticias',
    textoNovo: 'Nova notícia',
    colunas: [
        { title: 'Título', dataIndex: 'titulo' },
        { title: 'Data', dataIndex: 'dataPublicacao', width: 120, render: (d) => new Date(d).toLocaleDateString('pt-BR', { timeZone: 'UTC' }) },
    ],
    campos: [
        { nome: 'titulo', rotulo: 'Título' },
        { nome: 'resumo', rotulo: 'Resumo', tipo: 'texto-longo', linhas: 2 },
        { nome: 'conteudo', rotulo: 'Texto da notícia (um parágrafo por linha)', tipo: 'texto-longo', linhas: 8 },
        { nome: 'dataPublicacao', rotulo: 'Data de publicação', tipo: 'data' },
        { nome: 'urlImagem', rotulo: 'Link da imagem (começando com https://)' },
        { nome: 'urlFonte', rotulo: 'Link da reportagem original', opcional: true },
    ],
    paraFormulario: (n) => ({ ...n, dataPublicacao: n.dataPublicacao.slice(0, 10) }),
    paraApi: (v) => ({ ...v, urlFonte: v.urlFonte || null }),
};

const videos = {
    api: '/api/videos',
    textoNovo: 'Novo vídeo',
    colunas: [
        { title: 'Título', dataIndex: 'titulo' },
        { title: 'Id do YouTube', dataIndex: 'youtubeId', width: 150 },
    ],
    campos: [
        { nome: 'titulo', rotulo: 'Título' },
        { nome: 'descricao', rotulo: 'Descrição', tipo: 'texto-longo', linhas: 3 },
        { nome: 'youtubeId', rotulo: 'Id do YouTube (os 11 caracteres depois de "v=" no link)' },
    ],
    paraFormulario: (v) => v,
    paraApi: (v) => v,
};

const questoes = {
    api: '/api/questoes',
    textoNovo: 'Nova questão',
    colunas: [
        { title: 'Nº', dataIndex: 'id', width: 60 },
        { title: 'Enunciado', dataIndex: 'enunciado', render: (e) => (e.length > 120 ? `${e.slice(0, 120)}...` : e) },
        { title: 'Resposta', dataIndex: 'respostaCorreta', width: 90 },
    ],
    campos: [
        { nome: 'enunciado', rotulo: 'Enunciado', tipo: 'texto-longo', linhas: 6 },
        ...LETRAS.map((letra) => ({ nome: `alternativa${letra}`, rotulo: `Alternativa ${letra}` })),
        { nome: 'respostaCorreta', rotulo: 'Resposta correta', tipo: 'opcoes', opcoes: LETRAS },
        { nome: 'explicacao', rotulo: 'Explicação', tipo: 'texto-longo', linhas: 3 },
    ],
    paraFormulario: (q) => ({
        ...q,
        ...Object.fromEntries(LETRAS.map((letra, i) => [`alternativa${letra}`, q.alternativas[i]])),
    }),
    paraApi: (v) => ({
        enunciado: v.enunciado,
        alternativas: LETRAS.map((letra) => v[`alternativa${letra}`]),
        respostaCorreta: v.respostaCorreta,
        explicacao: v.explicacao,
    }),
};

export default function Painel() {
    return (
        <>
            <Tabs
                items={[
                    { key: 'noticias', label: 'Notícias', children: <Crud config={noticias} /> },
                    { key: 'videos', label: 'Vídeos', children: <Crud config={videos} /> },
                    { key: 'questoes', label: 'Questões', children: <Crud config={questoes} /> },
                ]}
            />
            <ToastContainer position="bottom-right" />
        </>
    );
}
