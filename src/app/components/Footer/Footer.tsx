import Link from "next/link"

export function Footer() {
    return (
        <footer className="footer py-4 px-8">
            <div className="flex justify-between align-center">
                <Link href="/" className="logo">
                    AgroTech
                </Link>
                <p className="system-state"><span className="indicator-status"></span> Todos los sistemas funcionando correctamente</p>
                <p className="system-update">10/01/2026</p>
            </div>
        </footer>
    )

}