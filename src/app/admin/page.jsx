import { Suspense } from 'react';
import { connection } from 'next/server';
import { UserButton } from '@clerk/nextjs';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Painel from '@/components/admin/Painel';
import Cabecalho from '@/components/Cabecalho';
import styles from './page.module.css';

async function AreaDoPainel() {
    await connection();
    return (
        <AntdRegistry>
            <Painel />
        </AntdRegistry>
    );
}

export default function AdminPage() {
    return (
        <>
            <Cabecalho ativo="painel" />
            <main className={styles.pagina}>
                <div className={styles.topo}>
                    <h1>Painel administrativo</h1>
                    <Suspense>
                        <UserButton />
                    </Suspense>
                </div>
                <Suspense fallback={<p>Carregando o painel...</p>}>
                    <AreaDoPainel />
                </Suspense>
            </main>
        </>
    );
}
