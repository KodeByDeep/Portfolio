function Hero() {
  return (
    <section id='home' className='mx-auto min-h-screen max-w-7xl px-6 pt-28 pb-16 flex items-center'>
      <div className='grid items-center gap-10 w-full md:grid-cols-2'>

        {/* Text Content */}
        <div>
          <p className="inline-flex px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium">
            Available for new opportunities
          </p>

          <h1 className='mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight'>
            Full-Stack
            <br />
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400'>
              MERN Developer
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg leading-8 text-white/70 max-w-xl">
            I help businesses build high-performing websites and web applications that generate leads, improve user experience, and drive real growth.
          </p>

          <div className='mt-8 flex flex-wrap items-center gap-4'>
            <a
              href="#projects"
              className='rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-black hover:bg-emerald-500 transition-colors duration-200 shadow-lg'
            >
              View Projects
            </a>
            <a
              href="#contact"
              className='rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200'
            >
              Contact Me
            </a>
          </div>

          <div className='mt-8 space-y-3'>
            <div className='flex items-center gap-3 text-emerald-400'>
              <div className='w-2 h-2 bg-emerald-400 rounded-full shrink-0'></div>
              <span className='text-sm font-medium'>Available for freelance projects</span>
            </div>
            <div className='flex items-center gap-3 text-emerald-400'>
              <div className='w-2 h-2 bg-emerald-400 rounded-full shrink-0'></div>
              <span className='text-sm font-medium'>Open to full-time opportunities</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative mt-8 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 blur-3xl rounded-full" />
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1634836023845-eddbfe9937da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXJrJTIwbGFwdG9wJTIwY29kaW5nJTIwd29ya3NwYWNlJTIwc2V0dXB8ZW58MXx8fHwxNzcyODcwNjI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Modern developer workspace with multiple monitors showing code editor and development tools"
              className="w-full h-64 sm:h-80 md:h-[420px] lg:h-[500px] object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
