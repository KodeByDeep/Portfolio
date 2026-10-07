import { REASONS } from '../data/content'

function WhyChooseMe() {
  return (
    <section id='why-choose-me' className='mx-auto max-w-7xl px-6 py-20'>
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Why Choose Me
        </h2>
        <p className='mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-8 text-white/70'>
          A commitment to quality, professionalism, and delivering measurable results.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {REASONS.map(({ icon: Icon, color, border, bg, title, desc }) => (
          <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-all duration-300">
            <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border ${border} ${bg}`}>
              <Icon size={26} className={color} />
            </div>
            <h3 className='text-xl sm:text-2xl font-bold text-white mb-3'>{title}</h3>
            <p className="text-sm sm:text-base leading-7 text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseMe
