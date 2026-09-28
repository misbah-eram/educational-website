import { FlaskConical } from 'lucide-react'
import { Button } from '@/components/ui/button'

const links = [
  { href: '#resources', label: 'Resources' },
  { href: '#schedule', label: 'When & Where' },
  { href: '#join', label: 'Join' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-extrabold text-foreground">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <FlaskConical className="size-5" aria-hidden="true" />
          </span>
          <span className="text-balance leading-tight">Science &amp; Maths Learning Hub</span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button nativeButton={false} render={<a href="#join" />} className="hidden rounded-full font-bold sm:inline-flex">Join the Hub</Button>
      </div>
    </header>
  )
}
