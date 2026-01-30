import { type HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export interface NoiseOverlayProps extends HTMLAttributes<HTMLDivElement> {
  /** Opacity of the noise texture (0-1) */
  opacity?: number
  /** Whether to use a fixed position overlay */
  fixed?: boolean
}

const noiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`

export function NoiseOverlay({
  opacity = 0.03,
  fixed = true,
  className,
  style,
  ...props
}: NoiseOverlayProps) {
  return (
    <div
      className={cn(
        'inset-0 pointer-events-none z-50',
        fixed ? 'fixed' : 'absolute',
        className
      )}
      style={{
        backgroundImage: noiseSvg,
        opacity,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  )
}
