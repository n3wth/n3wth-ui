export const colors = {
  // Dark mode (default)
  dark: {
    bg: '#000000',
    bgSecondary: '#0a0a0a',
    white: '#ffffff',
    grey: {
      100: '#f5f5f7',
      200: '#e8e8ed',
      300: '#c7c7cc',
      400: '#86868b',
      600: '#6e6e73',
      800: '#1d1d1f',
    },
    accent: '#ffffff',
    accentSoft: 'rgba(255, 255, 255, 0.15)',
    glass: {
      bg: 'rgba(255, 255, 255, 0.05)',
      border: 'rgba(255, 255, 255, 0.1)',
      highlight: 'rgba(255, 255, 255, 0.15)',
    },
    // Category colors (flat, no glow)
    category: {
      sage: '#30d158',
      coral: '#ff6961',
      mint: '#64d2ff',
      gold: '#ffd60a',
    },
  },
  // Light mode
  light: {
    bg: '#ffffff',
    bgSecondary: '#f5f5f7',
    white: '#1d1d1f',
    grey: {
      100: '#1d1d1f',
      200: '#3a3a3c',
      300: '#48484a',
      400: '#636366',
      600: '#8e8e93',
      800: '#e5e5ea',
    },
    accent: '#1d1d1f',
    accentSoft: 'rgba(0, 0, 0, 0.1)',
    glass: {
      bg: 'rgba(0, 0, 0, 0.03)',
      border: 'rgba(0, 0, 0, 0.08)',
      highlight: 'rgba(0, 0, 0, 0.12)',
    },
    category: {
      sage: '#248a3d',
      coral: '#d70015',
      mint: '#0071e3',
      gold: '#b25000',
    },
  },
} as const

export type ColorMode = keyof typeof colors
