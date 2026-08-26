import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Factory from '../components/Factory'
import Monuments from '../components/Monuments'
import Colours from '../components/Colours'
import Footer from '../components/Footer'

import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Arul Granites Pvt Ltd | Premium Granite Exporters</title>
        <meta name="description" content="Leading manufacturer and exporter of premium Indian granite monuments, headstones, and stone products based in Tamil Nadu." />
        <link rel="canonical" href="https://www.arulgranites.com/" />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Factory />
        <Monuments />
        <Colours />
      </main>
      <Footer />
    </div>
  )
}
