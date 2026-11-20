import { Suspense } from 'react';
import { connection } from 'next/server';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Painel from '@/components/admin/Painel';
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
        <main className={styles.pagina}>
            <h1>Painel administrativo</h1>
            <Suspense fallback={<p>Carregando o painel...</p>}>
                <AreaDoPainel />
            </Suspense>
        </main>
    );
}
