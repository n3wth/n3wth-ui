import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'glass'
  inputSize?: 'sm' | 'md' | 'lg'
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  error?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'default',
      inputSize = 'md',
      leftIcon,
      rightIcon,
      error = false,
      className,
      ...props
    },
    ref
  ) => {
    const wrapperStyles = [
      'relative inline-flex items-center w-full',
      'border rounded-xl',
      'transition-all duration-200',
      'focus-within:border-[var(--color-white)]',
    ]

    const variants = {
      default: [
        'bg-transparent',
        error ? 'border-[var(--color-coral)]' : 'border-[var(--glass-border)]',
        'hover:border-[var(--glass-highlight)]',
      ],
      glass: [
        'bg-[var(--glass-bg)]',
        'backdrop-blur-lg',
        error ? 'border-[var(--color-coral)]' : 'border-[var(--glass-border)]',
        'hover:bg-[rgba(255,255,255,0.08)]',
      ],
    }

    const sizes = {
      sm: 'h-8',
      md: 'h-10',
      lg: 'h-12',
    }

    const inputSizes = {
      sm: 'text-xs px-3',
      md: 'text-sm px-4',
      lg: 'text-base px-5',
    }

    const iconPadding = {
      sm: { left: 'pl-8', right: 'pr-8' },
      md: { left: 'pl-10', right: 'pr-10' },
      lg: { left: 'pl-12', right: 'pr-12' },
    }

    return (
      <div className={cn(wrapperStyles, variants[variant], sizes[inputSize], className)}>
        {leftIcon && (
          <span className="absolute left-3 text-[var(--color-grey-400)] pointer-events-none">
            {leftIcon}
          </span>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full h-full bg-transparent',
            'text-[var(--color-white)]',
            'placeholder:text-[var(--color-grey-600)]',
            'outline-none',
            inputSizes[inputSize],
            leftIcon && iconPadding[inputSize].left,
            rightIcon && iconPadding[inputSize].right
          )}
          {...props}
        />
        {rightIcon && (
          <span className="absolute right-3 text-[var(--color-grey-400)]">{rightIcon}</span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
