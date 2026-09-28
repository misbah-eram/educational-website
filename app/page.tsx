import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Resources } from '@/components/resources'
import { Schedule } from '@/components/schedule'
import { JoinSection } from '@/components/join-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Resources />
        <Schedule />
        <JoinSection />
      </main>
      <SiteFooter />
    </>
  )
}
