import { createFileRoute } from '@tanstack/react-router'
import Hero from '../features/profile/components/Hero'
import SocialLinks from '../features/profile/components/SocialLinks'
import CodingActivity from '../features/profile/components/CodingActivity'
import SkillsSection from '../features/skills/components/SkillsSection'
import ProjectsSection from '../features/projects/components/ProjectsSection'
import BlogSection from '../features/blog/components/BlogSection'
import ContactForm from '../features/contact/components/ContactForm'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main className="page-wrap pb-16 pt-24 sm:pt-28 space-y-12">
      {/* Hero Landing */}
      <Hero />

      {/* Social Links matching abdulrehmanwaseem.me */}
      <SocialLinks />

      {/* Coding Activity stats */}
      <CodingActivity />


      {/* Skills Grid */}
      <SkillsSection />

      {/* Project Case Studies */}
      <ProjectsSection />

      {/* Blog & Articles Section */}
      <BlogSection />

      {/* Contact Form */}
      <ContactForm />
    </main>
  )
}
