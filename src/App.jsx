import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import { motion } from 'framer-motion'

const App = () => {
  return (
    <section className='md:overflow-x-hidden md:overflow-y-hidden'>
    <motion.div 
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100dvw] h-[100dvh] blur-md -z-10 overflow-hidden scale-105">
      <motion.img 
      // animate={{scale : 1.8}}
      src="/images/hero-bg.jpg" className='fixed w-full h-full object-cover' alt="" />
    </motion.div>
    {/* <Hero /> */}
    <About />
    </section>
  )
}

export default App