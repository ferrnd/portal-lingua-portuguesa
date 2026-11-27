import { Suspense } from 'react';
import { connection } from 'next/server';
import { UserButton } from '@clerk/nextjs';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Painel from '@/components/admin/Painel';
import TopoPagina from '@/components/TopoPagina';
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
            <TopoPagina titulo="Painel" subtitulo="Cadastre, edite e exclua notícias, vídeos e questões." />
            <main className={`container ${styles.pagina}`}>
                <div className={styles.usuario}>
                    <span>Conectado como administrador</span>
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
