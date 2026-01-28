import { type SVGProps } from 'react'
import { cn } from '../../utils/cn'

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export type IconName =
  | 'arrow-right'
  | 'arrow-left'
  | 'arrow-up'
  | 'arrow-down'
  | 'chevron-right'
  | 'chevron-left'
  | 'chevron-down'
  | 'chevron-up'
  | 'check'
  | 'x'
  | 'copy'
  | 'search'
  | 'menu'
  | 'sun'
  | 'moon'
  | 'external'
  | 'github'
  | 'terminal'
  | 'code'
  | 'sparkles'

const icons: Record<IconName, string> = {
  'arrow-right': 'M5 12h14m-4-4 4 4-4 4',
  'arrow-left': 'M19 12H5m4 4-4-4 4-4',
  'arrow-up': 'M12 19V5m-4 4 4-4 4 4',
  'arrow-down': 'M12 5v14m4-4-4 4-4-4',
  'chevron-right': 'm9 18 6-6-6-6',
  'chevron-left': 'm15 18-6-6 6-6',
  'chevron-down': 'm6 9 6 6 6-6',
  'chevron-up': 'm18 15-6-6-6 6',
  check: 'M5 13l4 4L19 7',
  x: 'M6 18 18 6M6 6l12 12',
  copy: 'M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M16 4h2a2 2 0 0 1 2 2v2M8 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z',
  search: 'M21 21l-4.35-4.35M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z',
  menu: 'M4 6h16M4 12h16M4 18h16',
  sun: 'M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z',
  moon: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z',
  external: 'M7 17 17 7m0 0H7m10 0v10',
  github:
    'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10Z',
  terminal: 'M4 17l6-6-6-6m8 14h8',
  code: 'm8 7-4 5 4 5m8-10 4 5-4 5',
  sparkles:
    'M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Zm6 12l.75 2.25L21 18l-2.25.75L18 21l-.75-2.25L15 18l2.25-.75L18 15ZM4 15l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z',
}

const sizes = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
}

export function Icon({ name, size = 'md', className, ...props }: IconProps) {
  const path = icons[name]

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(sizes[size], className)}
      aria-hidden="true"
      {...props}
    >
      <path d={path} />
    </svg>
  )
}
