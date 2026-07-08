import { createFileRoute } from '@tanstack/react-router'
import ProjectsPage from '../features/projects/components/ProjectsPage'

export const Route = createFileRoute('/projects')({
  component: ProjectsRoute,
})

function ProjectsRoute() {
  return (
    <main className="page-wrap pb-16 pt-24 sm:pt-28">
      <ProjectsPage />
    </main>
  )
}
