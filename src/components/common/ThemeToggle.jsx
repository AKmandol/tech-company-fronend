import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const nextTheme =
        theme === 'light'
            ? 'dark'
            : theme === 'dark'
                ? 'light'
                : 'light';

    const Icon =
        theme === 'light'
            ? Sun
            : theme === 'dark'
                ? Moon
                : Monitor;

    return (
        <button
            type="button"
            onClick={() => setTheme(nextTheme)}
            title={`Theme: ${theme}`}
            className="inline-flex size-10 items-center justify-center rounded-xl border bg-background transition hover:bg-muted"
        >
            <Icon size={18} />
        </button>
    );
}
