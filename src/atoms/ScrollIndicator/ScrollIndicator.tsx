import { type HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export interface ScrollIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  /** Label text next to the indicator */
  label?: string
  /** Size of the icon */
  size?: 'sm' | 'md' | 'lg'
  /** Position of the indicator */
  position?: 'bottom-left' | 'bottom-center' | 'bottom-right'
}

const sizeMap = {
  sm: { icon: 12, text: 'text-[10px]' },
  md: { icon: 16, text: 'text-xs' },
  lg: { icon: 20, text: 'text-sm' },
}

const positionMap = {
  'bottom-left': 'bottom-8 left-6 md:left-12',
  'bottom-center': 'bottom-8 left-1/2 -translate-x-1/2',
  'bottom-right': 'bottom-8 right-6 md:right-12',
}

export function ScrollIndicator({
  label = 'Scroll',
  size = 'md',
  position = 'bottom-left',
  className,
  ...props
}: ScrollIndicatorProps) {
  const { icon, text } = sizeMap[size]

  return (
    <div
      className={cn(
        'absolute flex items-center gap-3 text-current opacity-60',
        positionMap[position],
        className
      )}
      {...props}
    >
      <svg
        width={icon}
        height={icon * 1.5}
        viewBox="0 0 16 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-bounce"
      >
        <path d="M8 4v16M4 16l4 4 4-4" />
      </svg>
      {label && (
        <span className={cn('font-mono uppercase tracking-wider', text)}>
          {label}
        </span>
      )}
    </div>
  )
}
