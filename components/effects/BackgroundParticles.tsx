const particles = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  delay: `${(index * 0.3) % 3}s`,
  duration: `${5 + (index % 4)}s`
}))

export default function BackgroundParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle absolute bottom-[-10px] h-1.5 w-1.5 rounded-full bg-accent/40"
          style={{ left: particle.left, animationDelay: particle.delay, animationDuration: particle.duration }}
        />
      ))}
    </div>
  )
}