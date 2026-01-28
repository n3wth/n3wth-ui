import { useEffect, useCallback, useRef } from 'react'

export interface KeyboardShortcut {
  key: string
  ctrl?: boolean
  meta?: boolean
  shift?: boolean
  alt?: boolean
  handler: () => void
  description?: string
}

export interface UseKeyboardShortcutsOptions {
  shortcuts: KeyboardShortcut[]
  enabled?: boolean
}

export function useKeyboardShortcuts({
  shortcuts,
  enabled = true,
}: UseKeyboardShortcutsOptions): void {
  const shortcutsRef = useRef(shortcuts)
  shortcutsRef.current = shortcuts

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled) return

      // Skip if user is typing in an input
      const target = event.target as HTMLElement
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return
      }

      for (const shortcut of shortcutsRef.current) {
        const keyMatch = event.key.toLowerCase() === shortcut.key.toLowerCase()
        const ctrlMatch = shortcut.ctrl ? event.ctrlKey : !event.ctrlKey
        const metaMatch = shortcut.meta ? event.metaKey : !event.metaKey
        const shiftMatch = shortcut.shift ? event.shiftKey : !event.shiftKey
        const altMatch = shortcut.alt ? event.altKey : !event.altKey

        if (keyMatch && ctrlMatch && metaMatch && shiftMatch && altMatch) {
          event.preventDefault()
          shortcut.handler()
          return
        }
      }
    },
    [enabled]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])
}

// Helper to get modifier key based on OS
export function getModifierKey(): 'meta' | 'ctrl' {
  if (typeof navigator === 'undefined') return 'ctrl'
  return navigator.platform.toLowerCase().includes('mac') ? 'meta' : 'ctrl'
}

// Format shortcut for display
export function formatShortcut(shortcut: KeyboardShortcut): string {
  const parts: string[] = []
  const isMac = typeof navigator !== 'undefined' && navigator.platform.toLowerCase().includes('mac')

  if (shortcut.ctrl) parts.push(isMac ? '^' : 'Ctrl')
  if (shortcut.meta) parts.push(isMac ? '⌘' : 'Win')
  if (shortcut.alt) parts.push(isMac ? '⌥' : 'Alt')
  if (shortcut.shift) parts.push(isMac ? '⇧' : 'Shift')
  parts.push(shortcut.key.toUpperCase())

  return parts.join(isMac ? '' : '+')
}
