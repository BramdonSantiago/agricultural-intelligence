'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

export function Header() {
    const pathname = usePathname();
    return (
        <header className="header">
            <div className="flex items-center justify-between py-4 px-10">
                <Link href="/" className="logo">
                    <span>Agro</span>Tech
                </Link>
                <nav className="flex gap-8 nav-list">
                    <Link className={`${pathname === '/' ? 'active-nav-item' : ''} nav-item`} href="/">Inicio</Link>
                    <Link className={`${pathname === '/kpis' ? 'active-nav-item' : ''} nav-item`} href="/kpis">KPIs</Link>
                    <Link className={`${pathname === '/noticias' ? 'active-nav-item' : ''} nav-item`} href="/noticias">Noticias</Link>
                    <Link className={`${pathname === '/tableros' ? 'active-nav-item' : ''} nav-item`} href="/tableros">Tableros</Link>
                    <Link className={`${pathname === '/analisis' ? 'active-nav-item' : ''} nav-item`} href="/analisis">Ánalisis</Link>
                    <Link className={`${pathname === '/documentos' ? 'active-nav-item' : ''} nav-item`} href="/documentos">Documentos</Link>
                </nav>
                <div>
                    <span>Huevo | Pollo</span>
                </div>
                <div>
                    <label className="ui-switch">
                        <input type="checkbox" />
                            <div className="slider">
                                <div className="circle"></div>
                            </div>
                    </label>

                </div>
            </div>
        </header>
    )

}