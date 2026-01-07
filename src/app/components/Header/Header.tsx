'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useTheme } from "../../context/ThemeContext";
import type { ThemeMode } from "../../context/ThemeContext";
import { useEffect, useState } from "react";

export function Header() {
    const { theme, setTheme } = useTheme();
    const [checked, setChecked] = useState(false);
    const [isSystemDark, setIsSystemDark] = useState(false);

    const pathname = usePathname();
    const [showNavList, setShowNavList] = useState(false);

    useEffect(() => {
        if (showNavList) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [showNavList]);  

    useEffect(() => {
        const isDark =
            theme === "dark" ||
            (theme === "system" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches);

        setChecked(isDark);
    }, [theme]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setChecked(isChecked);
        setTheme(isChecked ? "dark" : "light");
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const updateTheme = () => setIsSystemDark(mediaQuery.matches);

        updateTheme();

        mediaQuery.addEventListener("change", updateTheme);

        return () => mediaQuery.removeEventListener("change", updateTheme);
    }, []);    

    if (isSystemDark === null) return null;

    return (
        <header className="header">
            <div className="flex items-center justify-between py-4 px-6 xl:py-4 xl:px-10">
                <Link href="/" className="logo">
                    <span>Agro</span>Tech
                    <p className="copy">By BISC</p>
                </Link>
                <nav className={`flex gap-8 nav-list ${showNavList ? 'show-nav-list' : ''}`}>
                    <h3 className="title-menu-navigation lg:hidden">Menú de Navegación</h3>
                    <Link className={`${pathname === '/' ? 'active-nav-item' : ''} nav-item`} href="/">Inicio</Link>
                    <Link className={`${pathname === '/kpis' ? 'active-nav-item' : ''} nav-item`} href="/kpis">KPIs</Link>
                    <Link className={`${pathname === '/noticias' ? 'active-nav-item' : ''} nav-item`} href="/noticias">Noticias</Link>
                    <Link className={`${pathname === '/tableros' ? 'active-nav-item' : ''} nav-item`} href="/tableros">Tableros</Link>
                    <Link className={`${pathname === '/analisis' ? 'active-nav-item' : ''} nav-item`} href="/analisis">Ánalisis</Link>
                    <Link className={`${pathname === '/documentos' ? 'active-nav-item' : ''} nav-item`} href="/documentos">Documentos</Link>
                    <div className="lg:hidden logo-content">
                        <Link href="/" className="logo">
                            <span>Agro</span>Tech
                            <p className="copy">By BISC</p>
                        </Link>
                    </div>
                </nav>
                <div>
                    <span>Huevo - Pollo</span>
                </div>
                {/* <div>
                    <button
                        onClick={toggleTheme}
                        role="switch"
                        aria-checked={resolvedTheme === "dark"}
                        aria-label="Cambiar tema"
                        className="theme-toggle"
                    >
                        <span className="theme-toggle__icon">
                            {resolvedTheme === "dark" ? "🌙" : "☀️"}
                        </span>
                    </button>
                </div> */}
                {/* <div>
                    <label className="ui-switch">
                        <input type="checkbox" />
                        <div className="slider">
                            <div className="circle"></div>
                        </div>
                    </label>
                </div> */}
                {!isSystemDark
                    &&
                    <div>
                        <label className="ui-switch">
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={handleChange}
                                aria-label="Cambiar tema"
                            />
                            <div className="slider">
                                <div className="circle" />
                            </div>
                        </label>
                    </div>
                }
                <div className="lg:hidden">
                    <div onClick={() => setShowNavList(!showNavList)} className="menu-hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div onClick={() => setShowNavList(!showNavList)} className={`backdrop ${showNavList ? 'show-backdrop' : ''}`}>

            </div>
        </header>
    )

}