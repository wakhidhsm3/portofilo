import { createFileRoute } from '@tanstack/react-router'
import About from '../features/profile/components/About'
import Timeline from '../features/experience/components/Timeline'
import AwardsSection from '../features/awards/components/AwardsSection'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <main className="page-wrap pb-16 pt-24 sm:pt-28 space-y-12">
      <About />
      <Timeline />
      <AwardsSection />
    </main>
  )
}
