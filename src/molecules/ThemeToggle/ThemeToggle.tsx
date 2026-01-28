import { type ButtonHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import { Icon } from '../../atoms/Icon'

export interface ThemeToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  theme: 'dark' | 'light'
  onToggle: () => void
  size?: 'sm' | 'md'
}

export function ThemeToggle({
  theme,
  onToggle,
  size = 'md',
  className,
  ...props
}: ThemeToggleProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
  }

  const iconSizes = {
    sm: 'sm' as const,
    md: 'md' as const,
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        'inline-flex items-center justify-center',
        'rounded-full',
        'border border-[var(--glass-border)]',
        'bg-transparent',
        'text-[var(--color-grey-400)]',
        'transition-all duration-200 ease-out',
        'hover:border-[var(--glass-highlight)]',
        'hover:bg-[var(--glass-bg)]',
        'hover:text-[var(--color-white)]',
        'hover:scale-105',
        'active:scale-95',
        'focus-ring',
        sizes[size],
        className
      )}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      {...props}
    >
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={iconSizes[size]} />
    </button>
  )
}
