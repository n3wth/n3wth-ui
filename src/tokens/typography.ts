export const typography = {
  fontFamily: {
    display: "'Mona Sans', system-ui, sans-serif",
    sans: "'Geist Sans', system-ui, sans-serif",
    mono: "'Geist Mono', ui-monospace, 'SF Mono', Menlo, Monaco, monospace",
  },
  fontSize: {
    xs: '0.6875rem', // 11px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '2rem', // 32px
    '4xl': '2.5rem', // 40px
    '5xl': '3rem', // 48px
    '6xl': '4rem', // 64px
    '7xl': '5rem', // 80px
    '8xl': '6rem', // 96px
    '9xl': '8rem', // 128px
    '10xl': '10rem', // 160px
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.08em',
  },
  lineHeight: {
    none: '1',
    tight: '1.1',
    snug: '1.25',
    normal: '1.5',
    relaxed: '1.625',
  },
} as const
