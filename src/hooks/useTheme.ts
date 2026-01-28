import { useState, useEffect, useCallback } from 'react'

export type Theme = 'dark' | 'light'

export interface UseThemeOptions {
  defaultTheme?: Theme
  storageKey?: string
  attribute?: string
}

export interface UseThemeReturn {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  isDark: boolean
  isLight: boolean
}

export function useTheme(options: UseThemeOptions = {}): UseThemeReturn {
  const {
    defaultTheme = 'dark',
    storageKey = 'n3wth-theme',
    attribute = 'data-theme',
  } = options

  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return defaultTheme

    const stored = localStorage.getItem(storageKey)
    if (stored === 'dark' || stored === 'light') return stored

    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light'
    }

    return defaultTheme
  })

  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme)

      if (typeof window !== 'undefined') {
        localStorage.setItem(storageKey, newTheme)
        document.documentElement.setAttribute(attribute, newTheme)
      }
    },
    [storageKey, attribute]
  )

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  // Initialize theme on mount
  useEffect(() => {
    document.documentElement.setAttribute(attribute, theme)
  }, [attribute, theme])

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')

    const handleChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem(storageKey)
      if (!stored) {
        setTheme(e.matches ? 'light' : 'dark')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [storageKey, setTheme])

  return {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
  }
}
