import { TECH_STACK } from '../data/content'

function TechStack() {
  return (
    <section id='techstack' className='mx-auto max-w-7xl px-6 py-20'>
      <div className='text-center'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white'>
          Tech Stack
        </h2>
        <p className='mx-auto mt-4 max-w-2xl text-base sm:text-lg text-white/70'>
          My primary tools for building full-stack applications and modern web experiences.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {TECH_STACK.map(({ icon: Icon, label, color }) => (
          <div
            key={label}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center hover:bg-white/10 transition-all duration-300 group"
          >
            <Icon size={28} className={`mb-4 mx-auto ${color} group-hover:scale-110 transition-transform duration-300`} />
            <h3 className="text-base font-semibold text-white">{label}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
