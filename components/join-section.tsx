import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const email = 'misbaheram78@gmail.com'

export function JoinSection() {
  return (
    <section id="join" className="scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground shadow-xl shadow-primary/20 sm:px-12">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-primary-foreground/15">
            <Mail className="size-7" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-bold uppercase tracking-wider text-primary-foreground/80">How to join</p>
            <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">Contact your teacher</h2>
            <p className="break-all text-lg font-semibold text-primary-foreground/90">{email}</p>
          </div>
          <Button
            nativeButton={false}
            render={<a href={`mailto:${email}`} />}
            size="lg"
            variant="secondary"
            className="rounded-full bg-card font-bold text-primary hover:bg-card/90"
          >
            <Mail aria-hidden="true" />
            Email the Teacher
          </Button>
        </div>
      </div>
    </section>
  )
}
