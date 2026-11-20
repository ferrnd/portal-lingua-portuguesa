'use client';

import { useEffect, useState } from 'react';
import { Button, Form, Input, Modal, Popconfirm, Select, Space, Table } from 'antd';
import { toast } from 'react-toastify';

export default function Crud({ config }) {
    const [registros, setRegistros] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [editando, setEditando] = useState(null);
    const [salvando, setSalvando] = useState(false);
    const [form] = Form.useForm();

    async function carregar() {
        setCarregando(true);
        try {
            const resposta = await fetch(config.api);
            const dados = await resposta.json();
            setRegistros(Array.isArray(dados) ? dados : []);
        } catch {
            toast.error('Não foi possível carregar os registros.');
        }
        setCarregando(false);
    }

    useEffect(() => {
        carregar();
    }, [config.api]);

    function abrir(registro) {
        setEditando(registro);
        form.resetFields();
        form.setFieldsValue(registro.id ? config.paraFormulario(registro) : {});
    }

    async function salvar(valores) {
        setSalvando(true);
        const novo = !editando.id;
        try {
            const resposta = await fetch(novo ? config.api : `${config.api}/${editando.id}`, {
                method: novo ? 'POST' : 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(config.paraApi(valores)),
            });
            const dados = await resposta.json();

            if (!resposta.ok) {
                toast.error(dados.error || 'Erro ao salvar.');
            } else {
                toast.success(dados.message);
                setEditando(null);
                carregar();
            }
        } catch {
            toast.error('Erro de conexão ao salvar.');
        }
        setSalvando(false);
    }

    async function excluir(registro) {
        try {
            const resposta = await fetch(`${config.api}/${registro.id}`, { method: 'DELETE' });
            const dados = await resposta.json();

            if (!resposta.ok) {
                toast.error(dados.error || 'Erro ao excluir.');
            } else {
                toast.success(dados.message);
                carregar();
            }
        } catch {
            toast.error('Erro de conexão ao excluir.');
        }
    }

    const colunas = [
        ...config.colunas,
        {
            title: 'Ações',
            key: 'acoes',
            width: 180,
            render: (_, registro) => (
                <Space>
                    <Button onClick={() => abrir(registro)}>Editar</Button>
                    <Popconfirm
                        title="Excluir este registro?"
                        description="Essa ação não pode ser desfeita."
                        okText="Excluir"
                        cancelText="Cancelar"
                        onConfirm={() => excluir(registro)}
                    >
                        <Button danger>Excluir</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Button type="primary" onClick={() => abrir({})} style={{ marginBottom: 16 }}>
                {config.textoNovo}
            </Button>

            <Table rowKey="id" columns={colunas} dataSource={registros} loading={carregando} pagination={{ pageSize: 10 }} />

            <Modal
                title={editando?.id ? 'Editar' : config.textoNovo}
                open={editando !== null}
                onCancel={() => setEditando(null)}
                onOk={() => form.submit()}
                okText="Salvar"
                cancelText="Cancelar"
                confirmLoading={salvando}
                width={720}
                destroyOnHidden
            >
                <Form form={form} layout="vertical" onFinish={salvar}>
                    {config.campos.map((campo) => (
                        <Form.Item
                            key={campo.nome}
                            name={campo.nome}
                            label={campo.rotulo}
                            rules={campo.opcional ? [] : [{ required: true, message: 'Campo obrigatório' }]}
                        >
                            {campo.tipo === 'texto-longo' ? (
                                <Input.TextArea rows={campo.linhas || 4} />
                            ) : campo.tipo === 'opcoes' ? (
                                <Select options={campo.opcoes.map((o) => ({ value: o, label: o }))} />
                            ) : (
                                <Input type={campo.tipo === 'data' ? 'date' : 'text'} />
                            )}
                        </Form.Item>
                    ))}
                </Form>
            </Modal>
        </>
    );
}
