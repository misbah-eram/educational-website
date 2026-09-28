import Image from 'next/image'
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-secondary/60">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="w-fit rounded-full bg-card px-4 py-1.5 text-sm font-bold text-primary shadow-sm">
            Your classroom learning hub
          </span>
          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
            Science &amp; Maths <span className="text-primary">Learning Hub</span>
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            A digital resource center for students to access weekly study guides, interactive science
            experiment breakdowns, maths problem sets, and homework updates.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button nativeButton={false} render={<a href="#join" />} size="lg" className="rounded-full font-bold">
                How to Join
                <ArrowRight aria-hidden="true" />
              </Button>
            <Button nativeButton={false} render={<a href="#resources" />} size="lg" variant="outline" className="rounded-full bg-card font-bold">Explore Resources</Button>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-foreground">
            <li className="flex items-center gap-2">
              <CalendarDays className="size-4 text-primary" aria-hidden="true" />
              {'Monday–Friday'}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              {'Room 102 & Online Resources'}
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border-4 border-card bg-card shadow-xl shadow-primary/10">
          <Image
            src="/images/hero.png"
            alt="Illustration of a desk with a science flask, microscope, maths notebook, ruler, protractor and calculator"
            width={1408}
            height={768}
            priority
            className="h-auto w-full rounded-[1.25rem]"
          />
        </div>
      </div>
    </section>
  )
}
