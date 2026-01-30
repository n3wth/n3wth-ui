import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils/cn'

export interface AnimatedTextProps extends HTMLAttributes<HTMLElement> {
  /** Text content or children */
  children: ReactNode
  /** Animation type */
  animation?: 'fade-up' | 'fade-in' | 'slide-up' | 'blur-in'
  /** Delay before animation starts (ms) */
  delay?: number
  /** Duration of animation (ms) */
  duration?: number
  /** HTML tag to render */
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'
  /** Whether to animate on scroll into view */
  animateOnScroll?: boolean
}

const animationStyles = {
  'fade-up': {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0',
  },
  'fade-in': {
    initial: 'opacity-0',
    animate: 'opacity-100',
  },
  'slide-up': {
    initial: 'opacity-0 translate-y-full',
    animate: 'opacity-100 translate-y-0',
  },
  'blur-in': {
    initial: 'opacity-0 blur-sm',
    animate: 'opacity-100 blur-0',
  },
}

export function AnimatedText({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  as: Component = 'span',
  animateOnScroll = true,
  className,
  style,
  ...props
}: AnimatedTextProps) {
  const { initial } = animationStyles[animation]

  // CSS-only animation using animation-timeline for scroll-based
  // Falls back to immediate animation if not supported
  const animationStyle = {
    '--animation-delay': `${delay}ms`,
    '--animation-duration': `${duration}ms`,
    ...style,
  } as React.CSSProperties

  return (
    <Component
      className={cn(
        'transition-all ease-out',
        animateOnScroll ? 'motion-safe:animate-fade-up' : '',
        // Fallback for reduced motion
        'motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:blur-0',
        initial,
        // Apply animate class after mount via CSS animation
        '[animation-fill-mode:forwards]',
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        ...animationStyle,
      }}
      {...props}
    >
      {children}
    </Component>
  )
}
