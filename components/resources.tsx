import { BookOpen, Calculator, ClipboardList, FlaskConical, type LucideIcon } from 'lucide-react'

const resources: { title: string; icon: LucideIcon }[] = [
  { title: 'Weekly Study Guides', icon: BookOpen },
  { title: 'Interactive Science Experiment Breakdowns', icon: FlaskConical },
  { title: 'Maths Problem Sets', icon: Calculator },
  { title: 'Homework Updates', icon: ClipboardList },
]

export function Resources() {
  return (
    <section id="resources" className="scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">What we do</p>
          <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Everything you need to learn, in one place
          </h2>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map(({ title, icon: Icon }) => (
            <li
              key={title}
              className="flex flex-col gap-4 rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="text-pretty text-lg font-bold leading-snug text-foreground">{title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
