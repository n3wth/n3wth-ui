import { type HTMLAttributes, type ReactNode, useState } from 'react'
import { cn } from '../../utils/cn'
import { Button } from '../../atoms/Button'
import { Icon } from '../../atoms/Icon'
import { NavLink } from '../../molecules/NavLink'
import { ThemeToggle } from '../../molecules/ThemeToggle'

export interface NavItem {
  label: string
  href: string
  isActive?: boolean
}

export interface NavProps extends HTMLAttributes<HTMLElement> {
  logo?: ReactNode
  items?: NavItem[]
  theme?: 'dark' | 'light'
  onThemeToggle?: () => void
  showThemeToggle?: boolean
  cta?: {
    label: string
    href: string
  }
}

export function Nav({
  logo,
  items = [],
  theme = 'dark',
  onThemeToggle,
  showThemeToggle = true,
  cta,
  className,
  ...props
}: NavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'glass-nav',
        'border-b border-[var(--glass-border)]',
        className
      )}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">{logo}</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {items.map((item) => (
              <NavLink key={item.href} href={item.href} isActive={item.isActive} variant="underline">
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex md:items-center md:gap-4">
            {showThemeToggle && onThemeToggle && (
              <ThemeToggle theme={theme} onToggle={onThemeToggle} size="sm" />
            )}
            {cta && (
              <Button variant="secondary" size="sm" asChild>
                <a href={cta.href}>{cta.label}</a>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              'md:hidden',
              'p-2 rounded-lg',
              'text-[var(--color-grey-400)]',
              'hover:text-[var(--color-white)]',
              'hover:bg-[var(--glass-bg)]',
              'transition-colors duration-200'
            )}
            aria-label="Toggle menu"
          >
            <Icon name={mobileMenuOpen ? 'x' : 'menu'} size="md" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--glass-border)]">
            <div className="flex flex-col gap-2">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'mobile-nav-link',
                    'px-4 py-3 rounded-xl',
                    'text-sm',
                    item.isActive
                      ? 'text-[var(--color-white)]'
                      : 'text-[var(--color-grey-400)]'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center justify-between px-4 pt-4 border-t border-[var(--glass-border)]">
                {showThemeToggle && onThemeToggle && (
                  <ThemeToggle theme={theme} onToggle={onThemeToggle} size="sm" />
                )}
                {cta && (
                  <Button variant="primary" size="sm" asChild>
                    <a href={cta.href}>{cta.label}</a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
