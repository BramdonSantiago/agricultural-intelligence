"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

/* =======================
   Tipos
======================= */
export type ThemeMode = "light" | "dark" | "system";

interface ThemeContextProps {
    theme: ThemeMode;
    setTheme: (theme: ThemeMode) => void;
}

/* =======================
   Context
======================= */
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

/* =======================
   Provider
======================= */
interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<ThemeMode>("system");
    const [mounted, setMounted] = useState(false);

    /* Leer preferencia guardada */
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as ThemeMode | null;
        if (savedTheme) {
            setTheme(savedTheme);
        }
        setMounted(true);
    }, []);

    /* Aplicar tema */
    useEffect(() => {
        if (!mounted) return;

        const root = document.documentElement;
        const systemDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        const shouldUseDark =
            theme === "dark" || (theme === "system" && systemDark);

        root.classList.toggle("dark", shouldUseDark);

        localStorage.setItem("theme", theme);
    }, [theme, mounted]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {mounted && children}
        </ThemeContext.Provider>
    );
}

/* =======================
   Hook
======================= */
export function useTheme(): ThemeContextProps {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme debe usarse dentro de ThemeProvider");
    }

    return context;
}
