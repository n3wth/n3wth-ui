import { useState } from 'react'
import { Button } from '../src/atoms/Button'
import { Badge } from '../src/atoms/Badge'
import { Input } from '../src/atoms/Input'
import { Icon } from '../src/atoms/Icon'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../src/molecules/Card'
import { NavLink } from '../src/molecules/NavLink'
import { CommandBox } from '../src/molecules/CommandBox'
import { ThemeToggle } from '../src/molecules/ThemeToggle'
import { Nav } from '../src/organisms/Nav'
import { Hero } from '../src/organisms/Hero'
import { Footer } from '../src/organisms/Footer'
import { Section, SectionHeader } from '../src/organisms/Section'
import { useTheme } from '../src/hooks/useTheme'

export function App() {
  const { theme, toggleTheme } = useTheme()
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-white)]">
      {/* Nav */}
      <Nav
        logo={<span className="font-display text-xl font-semibold">@n3wth/ui</span>}
        items={[
          { label: 'Atoms', href: '#atoms', isActive: true },
          { label: 'Molecules', href: '#molecules' },
          { label: 'Organisms', href: '#organisms' },
        ]}
        theme={theme}
        onThemeToggle={toggleTheme}
        cta={{ label: 'GitHub', href: '#' }}
      />

      {/* Hero */}
      <Hero
        badge="v0.1.0"
        title={<>Flat. Minimal. <span style={{ opacity: 0.5 }}>Beautiful.</span></>}
        description="A shared atomic design system for skills.newth.ai and newth.ai. No shadows, no glows — just clean glass morphism."
        ctas={[
          { label: 'Get Started', href: '#atoms' },
          { label: 'View Source', href: '#', variant: 'secondary' },
        ]}
      />

      {/* Atoms Section */}
      <Section id="atoms">
        <SectionHeader
          title="Atoms"
          description="The building blocks of the design system"
        />

        <div className="space-y-12">
          {/* Buttons */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-[var(--color-grey-400)]">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="glass">Glass</Button>
              <Button variant="primary" isLoading>Loading</Button>
              <Button variant="secondary" leftIcon={<Icon name="github" size="sm" />}>
                With Icon
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* Badges */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-[var(--color-grey-400)]">Badges</h3>
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="sage">Sage</Badge>
              <Badge variant="coral">Coral</Badge>
              <Badge variant="mint">Mint</Badge>
              <Badge variant="gold">Gold</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>

          {/* Inputs */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-[var(--color-grey-400)]">Inputs</h3>
            <div className="flex flex-col gap-4 max-w-sm">
              <Input
                placeholder="Default input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                variant="glass"
                placeholder="Glass input"
                leftIcon={<Icon name="search" size="sm" />}
              />
              <Input
                placeholder="With error"
                error="This field is required"
              />
            </div>
          </div>

          {/* Icons */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-[var(--color-grey-400)]">Icons</h3>
            <div className="flex flex-wrap gap-4">
              {(['arrow-right', 'arrow-left', 'arrow-up', 'arrow-down', 'chevron-right', 'chevron-down', 'check', 'x', 'copy', 'search', 'menu', 'sun', 'moon', 'external', 'github', 'terminal', 'code', 'sparkles', 'plus', 'minus'] as const).map((name) => (
                <div key={name} className="flex flex-col items-center gap-2 p-3 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)]">
                  <Icon name={name} size="md" />
                  <span className="text-xs text-[var(--color-grey-400)]">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Molecules Section */}
      <Section id="molecules" variant="alternate">
        <SectionHeader
          title="Molecules"
          description="Combinations of atoms forming functional UI patterns"
        />

        <div className="space-y-12">
          {/* Cards */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-[var(--color-grey-400)]">Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Default Card</CardTitle>
                  <CardDescription>A simple card component</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--color-grey-400)]">
                    Cards contain content and actions about a single subject.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" variant="secondary">Learn More</Button>
                </CardFooter>
              </Card>

              <Card variant="glass">
                <CardHeader>
                  <CardTitle>Glass Card</CardTitle>
                  <CardDescription>With backdrop blur effect</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--color-grey-400)]">
                    Glass morphism variant with subtle transparency.
                  </p>
                </CardContent>
              </Card>

              <Card variant="interactive">
                <CardHeader>
                  <CardTitle>Interactive Card</CardTitle>
                  <CardDescription>Hover to see the effect</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--color-grey-400)]">
                    This card responds to hover interactions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* NavLinks */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-[var(--color-grey-400)]">NavLinks</h3>
            <div className="flex gap-6">
              <NavLink href="#" variant="underline" isActive>Active</NavLink>
              <NavLink href="#" variant="underline">Inactive</NavLink>
              <NavLink href="#" variant="pill">Pill Style</NavLink>
              <NavLink href="#" variant="pill" isActive>Active Pill</NavLink>
            </div>
          </div>

          {/* CommandBox */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-[var(--color-grey-400)]">CommandBox</h3>
            <div className="max-w-md">
              <CommandBox command="npm install @n3wth/ui" />
            </div>
          </div>

          {/* ThemeToggle */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-[var(--color-grey-400)]">ThemeToggle</h3>
            <div className="flex gap-4 items-center">
              <ThemeToggle theme={theme} onToggle={toggleTheme} size="sm" />
              <ThemeToggle theme={theme} onToggle={toggleTheme} size="md" />
              <span className="text-sm text-[var(--color-grey-400)]">Current: {theme}</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Organisms Section */}
      <Section id="organisms">
        <SectionHeader
          title="Organisms"
          description="Complex UI components composed of molecules and atoms"
        />

        <div className="space-y-8">
          <p className="text-[var(--color-grey-400)]">
            The Nav, Hero, and Footer components are demonstrated in this page layout.
            Scroll up to see the Nav, or down to see the Footer.
          </p>

          <div className="p-6 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)]">
            <h4 className="font-medium mb-2">Included Organisms:</h4>
            <ul className="list-disc list-inside text-[var(--color-grey-400)] space-y-1">
              <li><strong>Nav</strong> - Fixed navigation with mobile menu</li>
              <li><strong>Hero</strong> - Hero section with badge, title, description, CTAs</li>
              <li><strong>Footer</strong> - Multi-column footer with sections</li>
              <li><strong>Section</strong> - Content section wrapper with header</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <Footer
        logo={<span className="font-display text-lg font-semibold">@n3wth/ui</span>}
        description="A flat, minimal design system for modern web applications."
        sections={[
          {
            title: 'Resources',
            links: [
              { label: 'Documentation', href: '#' },
              { label: 'Components', href: '#atoms' },
              { label: 'GitHub', href: '#' },
            ],
          },
          {
            title: 'Community',
            links: [
              { label: 'Discord', href: '#' },
              { label: 'Twitter', href: '#' },
            ],
          },
        ]}
        copyright="2025 Oliver Newth. All rights reserved."
        theme={theme}
        onThemeToggle={toggleTheme}
      />
    </div>
  )
}
