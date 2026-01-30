import { Component, type ReactNode } from 'react'
import { cn } from '../../utils/cn'

export interface ErrorBoundaryProps {
  /** Child components to wrap */
  children: ReactNode
  /** Custom fallback UI */
  fallback?: ReactNode
  /** Callback when error is caught */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

/**
 * Error boundary component that catches JavaScript errors in child components
 * Displays fallback UI and optionally reports errors via callback
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.props.onError?.(error, errorInfo)
  }

  handleRetry = (): void => {
    this.setState({ hasError: false, error: null })
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center p-8">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--color-coral)]/10 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-[var(--color-coral)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-[var(--color-white)] mb-2">
              Something went wrong
            </h2>
            <p className="text-[var(--color-grey-400)] mb-6">
              We encountered an unexpected error. Please try again.
            </p>
            <button
              onClick={this.handleRetry}
              className={cn(
                'px-6 py-3 rounded-full font-medium',
                'bg-[var(--glass-bg)] border border-[var(--glass-border)]',
                'hover:bg-[var(--glass-highlight)] transition-colors'
              )}
            >
              Try Again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export interface ErrorFallbackProps {
  /** Error title */
  title?: string
  /** Error message */
  message?: string
  /** Show reload button */
  showReload?: boolean
  /** Show home link */
  showHomeLink?: boolean
  /** Home URL (default: /) */
  homeUrl?: string
  /** Additional class names */
  className?: string
}

/**
 * Standalone error fallback component for full-page errors
 */
export function ErrorFallback({
  title = 'Page Error',
  message = 'This page encountered an error and could not be displayed.',
  showReload = true,
  showHomeLink = true,
  homeUrl = '/',
  className,
}: ErrorFallbackProps) {
  return (
    <div
      className={cn(
        'min-h-screen flex items-center justify-center p-8',
        className
      )}
    >
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[var(--color-coral)]/10 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-[var(--color-coral)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold text-[var(--color-white)] mb-3">
          {title}
        </h1>
        <p className="text-[var(--color-grey-400)] mb-8">{message}</p>
        <div className="flex gap-4 justify-center">
          {showReload && (
            <button
              onClick={() => window.location.reload()}
              className={cn(
                'px-6 py-3 rounded-full font-medium',
                'bg-[var(--glass-bg)] border border-[var(--glass-border)]',
                'hover:bg-[var(--glass-highlight)] transition-colors'
              )}
            >
              Reload Page
            </button>
          )}
          {showHomeLink && (
            <a
              href={homeUrl}
              className={cn(
                'px-6 py-3 rounded-full font-medium',
                'bg-[var(--glass-bg)] border border-[var(--glass-border)]',
                'hover:bg-[var(--glass-highlight)] transition-colors'
              )}
            >
              Go Home
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
