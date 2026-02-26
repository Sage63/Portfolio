export default function ProjectNotFound() {
  return (
    <section className="section-shell">
      <div className="glass rounded-3xl p-8 text-center">
        <h1 className="text-3xl font-semibold text-white">Case Study Not Found</h1>
        <p className="mt-3 text-text/75">The requested project page does not exist.</p>
        <a href="/#projects" className="mt-4 inline-block text-accent">
          Back to Projects
        </a>
      </div>
    </section>
  )
}