import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export interface UseButtonPulseOptions {
  /** Scale on hover */
  hoverScale?: number
  /** Scale on press */
  pressScale?: number
  /** Animation duration in seconds */
  duration?: number
}

/**
 * Hook for subtle button interaction animations
 * Creates depth-aware scale interactions on hover and press
 */
export function useButtonPulse(options: UseButtonPulseOptions = {}) {
  const { hoverScale = 1.02, pressScale = 0.96, duration = 0.2 } = options

  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const button = ref.current
    if (!button) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: hoverScale,
        duration,
        ease: 'cubic.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        duration,
        ease: 'cubic.out',
      })
    }

    const handleMouseDown = () => {
      gsap.to(button, {
        scale: pressScale,
        duration: duration / 2,
        ease: 'cubic.out',
      })
    }

    const handleMouseUp = () => {
      gsap.to(button, {
        scale: hoverScale,
        duration: duration / 2,
        ease: 'cubic.out',
      })
    }

    button.addEventListener('mouseenter', handleMouseEnter)
    button.addEventListener('mouseleave', handleMouseLeave)
    button.addEventListener('mousedown', handleMouseDown)
    button.addEventListener('mouseup', handleMouseUp)

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter)
      button.removeEventListener('mouseleave', handleMouseLeave)
      button.removeEventListener('mousedown', handleMouseDown)
      button.removeEventListener('mouseup', handleMouseUp)
    }
  }, [hoverScale, pressScale, duration])

  return ref
}
