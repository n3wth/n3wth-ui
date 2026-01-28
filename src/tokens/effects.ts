export const effects = {
  // Transitions
  transition: {
    fast: '0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    base: '0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    spring: '0.35s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  // Backdrop blur for glass effect
  backdropBlur: {
    sm: '8px',
    md: '12px',
    lg: '20px',
    xl: '40px',
  },
  // Transform scales for hover states (NO shadows!)
  scale: {
    press: '0.96',
    hover: '1.02',
    active: '1.05',
  },
} as const

// NO box-shadow, drop-shadow, or glow effects!
