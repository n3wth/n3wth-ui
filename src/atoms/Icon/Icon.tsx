import { type ComponentType, type SVGProps } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  NavArrowRight,
  NavArrowLeft,
  NavArrowDown,
  NavArrowUp,
  Check,
  Xmark,
  Copy,
  Search,
  Menu,
  SunLight,
  HalfMoon,
  ArrowUpRight,
  Github,
  Terminal,
  Code,
  Sparks,
  Plus,
  Minus,
  Settings,
  User,
  Heart,
  Star,
  Mail,
  Calendar,
  Clock,
  Bell,
  Home,
  Folder,
  Page,
  Trash,
  EditPencil,
  Eye,
  EyeClosed,
  Lock,
  LockSlash,
  Link,
  OpenInWindow,
  Download,
  Upload,
  RefreshDouble,
  Filter,
  SortDown,
  ViewGrid,
  List,
  MoreHoriz,
  MoreVert,
  InfoCircle,
  WarningTriangle,
  CheckCircle,
  XmarkCircle,
} from 'iconoir-react'
import { cn } from '../../utils/cn'

// Map of icon names to Iconoir components
const iconComponents = {
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  'arrow-up': ArrowUp,
  'arrow-down': ArrowDown,
  'chevron-right': NavArrowRight,
  'chevron-left': NavArrowLeft,
  'chevron-down': NavArrowDown,
  'chevron-up': NavArrowUp,
  check: Check,
  x: Xmark,
  copy: Copy,
  search: Search,
  menu: Menu,
  sun: SunLight,
  moon: HalfMoon,
  external: ArrowUpRight,
  github: Github,
  terminal: Terminal,
  code: Code,
  sparkles: Sparks,
  plus: Plus,
  minus: Minus,
  settings: Settings,
  user: User,
  heart: Heart,
  star: Star,
  mail: Mail,
  calendar: Calendar,
  clock: Clock,
  bell: Bell,
  home: Home,
  folder: Folder,
  file: Page,
  trash: Trash,
  edit: EditPencil,
  eye: Eye,
  'eye-off': EyeClosed,
  lock: Lock,
  unlock: LockSlash,
  link: Link,
  'external-link': OpenInWindow,
  download: Download,
  upload: Upload,
  refresh: RefreshDouble,
  filter: Filter,
  sort: SortDown,
  grid: ViewGrid,
  list: List,
  'more-horizontal': MoreHoriz,
  'more-vertical': MoreVert,
  info: InfoCircle,
  warning: WarningTriangle,
  success: CheckCircle,
  error: XmarkCircle,
} as const

export type IconName = keyof typeof iconComponents

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  name: IconName
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number
}

const sizeClasses = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
}

const sizePixels = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
}

export function Icon({ name, size = 'md', className, ...props }: IconProps) {
  const IconComponent = iconComponents[name] as ComponentType<SVGProps<SVGSVGElement>>

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  const isNumericSize = typeof size === 'number'
  const pixelSize = isNumericSize ? size : sizePixels[size]

  return (
    <IconComponent
      width={pixelSize}
      height={pixelSize}
      strokeWidth={1.5}
      className={cn(!isNumericSize && sizeClasses[size], className)}
      aria-hidden="true"
      {...props}
    />
  )
}

// Re-export all iconoir icons for direct use
export * from 'iconoir-react'
