import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { Badge } from '../../atoms/Badge'
import { Button } from '../../atoms/Button'

export interface HeroCTA {
  label: string
  href: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

export interface HeroProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  badge?: string
  title: ReactNode
  description?: string
  ctas?: HeroCTA[]
  align?: 'left' | 'center'
  size?: 'default' | 'large'
  gradient?: boolean
}

export function Hero({
  badge,
  title,
  description,
  ctas = [],
  align = 'center',
  size = 'default',
  gradient = true,
  className,
  ...props
}: HeroProps) {
  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center',
  }

  const titleSizes = {
    default: 'text-4xl sm:text-5xl md:text-6xl',
    large: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl',
  }

  return (
    <section
      className={cn(
        'relative',
        'px-6 py-24 md:py-32 lg:py-40',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'mx-auto max-w-4xl',
          'flex flex-col gap-6',
          alignments[align]
        )}
      >
        {badge && (
          <Badge variant="default" size="md" className="animate-in">
            {badge}
          </Badge>
        )}

        <h1
          className={cn(
            'font-display font-semibold tracking-tight',
            titleSizes[size],
            gradient ? 'hero-gradient-text' : 'text-[var(--color-white)]',
            'animate-in'
          )}
          style={{ animationDelay: '0.1s' }}
        >
          {title}
        </h1>

        {description && (
          <p
            className={cn(
              'text-lg md:text-xl',
              'text-[var(--color-grey-400)]',
              'max-w-2xl leading-relaxed',
              'animate-in'
            )}
            style={{ animationDelay: '0.2s' }}
          >
            {description}
          </p>
        )}

        {ctas.length > 0 && (
          <div
            className={cn(
              'flex flex-wrap gap-4 mt-4',
              align === 'center' ? 'justify-center' : 'justify-start',
              'animate-in'
            )}
            style={{ animationDelay: '0.3s' }}
          >
            {ctas.map((cta, index) => (
              <Button
                key={cta.href}
                variant={cta.variant || (index === 0 ? 'primary' : 'secondary')}
                size="lg"
                asChild
              >
                <a href={cta.href}>{cta.label}</a>
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
