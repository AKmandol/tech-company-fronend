import {
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';

const ThemeContext = createContext(null);

function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'system';
    });

    const [brandColor, setBrandColor] = useState(() => {
        return localStorage.getItem('brand-color') || '#2563eb';
    });

    useEffect(() => {
        const root = document.documentElement;

        const activeTheme =
            theme === 'system'
                ? getSystemTheme()
                : theme;

        root.classList.toggle('dark', activeTheme === 'dark');

        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        document.documentElement.style.setProperty(
            '--brand-color',
            brandColor
        );

        localStorage.setItem('brand-color', brandColor);
    }, [brandColor]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                brandColor,
                setBrandColor,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            'useTheme must be used inside ThemeProvider'
        );
    }

    return context;
}
