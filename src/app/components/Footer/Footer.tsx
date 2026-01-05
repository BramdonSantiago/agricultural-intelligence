import Link from "next/link"

export function Footer() {
    return (
        <footer className="footer py-4 px-10 mt-10">
            <div className="flex gap-4 flex-col xl:flex-row justify-between align-center text-center xl:text-left">
                <Link href="/" className="logo">
                    AgroTech
                </Link>
                <p className="system-state"><span className="indicator-status"></span> Todos los sistemas funcionando correctamente</p>
                <p className="system-update">10/01/2026</p>
            </div>
        </footer>
    )

}