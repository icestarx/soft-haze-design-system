import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { availableThemes, type ThemeName } from './themes.generated';

export type { ThemeName } from './themes.generated';

type ThemeContextValue = { theme: ThemeName; setTheme: (theme: ThemeName) => void };
const ThemeContext = createContext<ThemeContextValue | null>(null);

export type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: ThemeName;
  storageKey?: string;
};

export function ThemeProvider({ children, defaultTheme = 'soft-haze', storageKey = 'sh-theme' }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeName>(() => {
    if (typeof window === 'undefined') return defaultTheme;
    const saved = window.localStorage.getItem(storageKey);
    return availableThemes.find((item) => item.id === saved)?.id ?? defaultTheme;
  });

  useEffect(() => {
    window.localStorage.setItem(storageKey, theme);
  }, [storageKey, theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <ThemeContext.Provider value={value}>
      <div data-theme={theme} className="sh-theme-root">{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used inside ThemeProvider');
  return context;
}
