import React, { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import { motion } from 'framer-motion'

const App = () => {
  return (
    <section
    className='md:overflow-hidden'>
    <motion.div
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100dvw] h-[100dvh] -z-10 overflow-hidden bg-zinc-900">
      <motion.img 
      animate={{scale : 1.1}}
      src="/images/hero-bg.jpg" className='fixed w-full h-full object-scale-down blur-md' alt="" />
    </motion.div>
    {/* <Hero /> */}
    {/* <About /> */}
    {/* <Projects /> */}
    <Achievements />
    </section>
  )
}

export default App