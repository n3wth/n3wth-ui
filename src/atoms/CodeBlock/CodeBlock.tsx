import { useMemo } from 'react'
import { cn } from '../../utils/cn'

export interface CodeBlockProps {
  /** Code string to display */
  code: string
  /** Programming language for syntax highlighting */
  language?: 'javascript' | 'typescript' | 'json' | 'bash' | 'css'
  /** Show line numbers */
  showLineNumbers?: boolean
  /** Additional class names */
  className?: string
}

interface Token {
  type:
    | 'keyword'
    | 'string'
    | 'number'
    | 'comment'
    | 'property'
    | 'punctuation'
    | 'text'
  value: string
}

const COLORS = {
  keyword: 'var(--color-coral)',
  string: 'var(--color-mint)',
  number: 'var(--color-gold)',
  comment: 'var(--color-grey-500)',
  property: 'var(--color-sage)',
  punctuation: 'var(--color-grey-400)',
  text: 'var(--color-grey-200)',
}

function tokenize(code: string): Token[] {
  const tokens: Token[] = []
  let remaining = code

  const patterns: [RegExp, Token['type']][] = [
    [/^\/\/.*$/m, 'comment'],
    [/^\/\*[\s\S]*?\*\//, 'comment'],
    [/^#.*$/m, 'comment'], // bash comments
    [/^'[^']*'/, 'string'],
    [/^"[^"]*"/, 'string'],
    [/^`[^`]*`/, 'string'],
    [
      /^\b(const|let|var|function|return|if|else|for|while|import|export|from|default|class|extends|new|this|true|false|null|undefined|async|await|try|catch|throw|finally|typeof|instanceof|in|of|yield|switch|case|break|continue|do|with|debugger|delete|void)\b/,
      'keyword',
    ],
    [/^\b\d+(\.\d+)?\b/, 'number'],
    [/^[a-zA-Z_][a-zA-Z0-9_]*(?=\s*:)/, 'property'],
    [/^[{}[\](),;:=<>!&|?+\-*/%^~]/, 'punctuation'],
    [/^\s+/, 'text'],
    [/^[^\s{}[\](),;:'"`=<>!&|?+\-*/%^~]+/, 'text'],
  ]

  while (remaining.length > 0) {
    let matched = false

    for (const [pattern, type] of patterns) {
      const match = remaining.match(pattern)
      if (match) {
        tokens.push({ type, value: match[0] })
        remaining = remaining.slice(match[0].length)
        matched = true
        break
      }
    }

    if (!matched) {
      tokens.push({ type: 'text', value: remaining[0] })
      remaining = remaining.slice(1)
    }
  }

  return tokens
}

/**
 * Lightweight syntax highlighting code block
 * No external dependencies, uses CSS custom properties for theming
 */
export function CodeBlock({
  code,
  language: _language = 'javascript',
  showLineNumbers = false,
  className,
}: CodeBlockProps) {
  const tokens = useMemo(() => tokenize(code), [code])
  const lines = useMemo(() => code.split('\n'), [code])

  return (
    <pre
      className={cn(
        'text-sm font-mono whitespace-pre overflow-x-auto',
        'bg-[var(--glass-bg)] rounded-lg p-4',
        'border border-[var(--glass-border)]',
        className
      )}
      style={{ color: 'var(--color-grey-200)' }}
    >
      <code className={showLineNumbers ? 'flex' : undefined}>
        {showLineNumbers && (
          <span className="select-none pr-4 text-[var(--color-grey-600)] border-r border-[var(--glass-border)] mr-4">
            {lines.map((_, i) => (
              <span key={i} className="block">
                {i + 1}
              </span>
            ))}
          </span>
        )}
        <span className={showLineNumbers ? 'flex-1' : undefined}>
          {tokens.map((token, i) => (
            <span key={i} style={{ color: COLORS[token.type] }}>
              {token.value}
            </span>
          ))}
        </span>
      </code>
    </pre>
  )
}
