import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Services from './components/Services'
import WhyChooseMe from './components/WhyChooseMe'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Services />
      <WhyChooseMe />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
