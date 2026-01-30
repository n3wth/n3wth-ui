import { type HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Skeleton variant */
  variant?: 'text' | 'circular' | 'rectangular'
  /** Width of the skeleton */
  width?: string | number
  /** Height of the skeleton */
  height?: string | number
  /** Enable shimmer animation */
  animate?: boolean
}

/**
 * Skeleton loading placeholder
 * Uses CSS custom properties for consistent theming
 */
export function Skeleton({
  variant = 'text',
  width,
  height,
  animate = true,
  className,
  style,
  ...props
}: SkeletonProps) {
  const baseStyles = [
    'bg-[var(--glass-highlight)]',
    animate && 'animate-pulse',
  ]

  const variants = {
    text: 'rounded h-4',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  }

  return (
    <div
      className={cn(baseStyles, variants[variant], className)}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        ...style,
      }}
      {...props}
    />
  )
}

export interface CardSkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of text lines to show */
  lines?: number
  /** Show header indicator */
  showHeader?: boolean
  /** Show tags row */
  showTags?: boolean
}

/**
 * Pre-composed card skeleton for common use cases
 */
export function CardSkeleton({
  lines = 2,
  showHeader = true,
  showTags = true,
  className,
  ...props
}: CardSkeletonProps) {
  return (
    <div
      className={cn(
        'p-5 md:p-6 rounded-2xl border',
        'bg-[var(--glass-bg)] border-[var(--glass-border)]',
        className
      )}
      {...props}
    >
      {showHeader && (
        <div className="mb-3 md:mb-4">
          <Skeleton variant="circular" width={12} height={12} />
        </div>
      )}

      <Skeleton width="70%" height={20} className="mb-2" />

      <div className="space-y-2 mb-3 md:mb-4">
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton
            key={i}
            width={i === lines - 1 ? '85%' : '100%'}
            height={14}
            className="bg-[var(--glass-bg)]"
          />
        ))}
      </div>

      {showTags && (
        <div className="flex flex-wrap gap-2">
          {[50, 60, 70].map((width, i) => (
            <Skeleton
              key={i}
              width={width}
              height={12}
              className="bg-[var(--glass-bg)]"
            />
          ))}
        </div>
      )}
    </div>
  )
}
