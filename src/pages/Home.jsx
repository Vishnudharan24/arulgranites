import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Factory from '../components/Factory'
import Monuments from '../components/Monuments'
import Colours from '../components/Colours'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Factory />
      <Monuments />
      <Colours />
      <Footer />
    </div>
  )
}
