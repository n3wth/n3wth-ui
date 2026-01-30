import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export interface UseCountUpOptions {
  /** Animation duration in seconds */
  duration?: number
  /** Delay before animation starts */
  delay?: number
  /** Trigger animation on scroll into view */
  onScroll?: boolean
  /** Suffix to append to value (e.g., '%', '+') */
  suffix?: string
  /** Prefix to prepend to value (e.g., '$') */
  prefix?: string
  /** Callback when animation completes */
  onComplete?: () => void
}

export interface UseCountUpReturn {
  ref: React.RefObject<HTMLElement | null>
  value: number
  displayValue: string
}

/**
 * Hook for animated number counting
 * Creates smooth counter animations with scroll trigger support
 */
export function useCountUp(
  target: number,
  options: UseCountUpOptions = {}
): UseCountUpReturn {
  const {
    duration = 1.5,
    delay = 0,
    onScroll = true,
    suffix = '',
    prefix = '',
    onComplete,
  } = options

  const [value, setValue] = useState(0)
  const ref = useRef<HTMLElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element || hasAnimated.current) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setValue(target)
      onComplete?.()
      return
    }

    const counter = { value: 0 }

    const animate = () => {
      if (hasAnimated.current) return
      hasAnimated.current = true

      gsap.to(counter, {
        value: target,
        duration,
        delay,
        ease: 'power2.out',
        onUpdate: () => {
          setValue(Math.round(counter.value))
        },
        onComplete,
      })
    }

    if (onScroll) {
      ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        onEnter: animate,
        once: true,
      })
    } else {
      animate()
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === element) st.kill()
      })
    }
  }, [target, duration, delay, onScroll, onComplete])

  const displayValue = `${prefix}${value.toLocaleString()}${suffix}`

  return { ref, value, displayValue }
}
