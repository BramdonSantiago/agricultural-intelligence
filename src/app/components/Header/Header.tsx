import Link from "next/link"

export function Header() {
    return(
        <header className="header">
            <nav className="flex items-center justify-between py-4 px-10">
                <Link href="/" className="logo">
                    <span>Agro</span>Tech
                </Link>
                <ul className="flex gap-8 nav-list">
                    <li>
                        <Link href="/dashboard">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/about">KPIs</Link>
                    </li>
                    <li>
                        <Link href="/about">Noticias</Link>
                    </li>
                    <li>
                        <Link href="/about">Tableros</Link>
                    </li>
                    <li>
                        <Link href="/about">Ánalisis</Link>
                    </li>
                    <li>
                        <Link href="/about">Documentos</Link>
                    </li>
                </ul>
                <div>
                    <span>Huevo | Pollo</span>
                </div>
            </nav>
        </header>
    )

}