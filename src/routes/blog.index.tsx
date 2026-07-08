import { createFileRoute } from '@tanstack/react-router'
import BlogPage from '../features/blog/components/BlogPage'

export const Route = createFileRoute('/blog/')({
  component: BlogIndexRoute,
})

function BlogIndexRoute() {
  return (
    <main className="page-wrap pb-16 pt-24 sm:pt-28">
      <BlogPage />
    </main>
  )
}
