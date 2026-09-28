import { CalendarDays, Globe, MapPin } from 'lucide-react'

const details = [
  { label: 'When', value: 'Monday–Friday', icon: CalendarDays },
  { label: 'Where', value: 'Room 102', icon: MapPin },
  { label: 'Online', value: 'Online Resources', icon: Globe },
]

export function Schedule() {
  return (
    <section id="schedule" className="scroll-mt-16 bg-secondary/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">When &amp; where we meet</p>
          <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {'Monday–Friday | Room 102 & Online Resources'}
          </h2>
        </div>
        <dl className="mt-12 grid gap-5 md:grid-cols-3">
          {details.map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex items-center gap-4 rounded-2xl bg-card p-6 shadow-sm">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <div>
                <dt className="text-sm font-semibold text-muted-foreground">{label}</dt>
                <dd className="text-xl font-extrabold text-foreground">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
