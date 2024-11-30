import React,{useEffect, useState} from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import { motion } from 'framer-motion'

const scaleImage = [1.4,1.6,1.8]

const App = () => {
  const [page , setPage] = useState(-1);
  const [selectPage,setSelectPage] = useState(<Hero />);

  const pages = [
    <About setPage={setPage} />,
    <Projects setPage={setPage} />,
    <Achievements setPage={setPage} />
  ];

  return (
    <section
    className='md:overflow-hidden'>
    <motion.div
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100dvw] h-[100dvh] -z-10 overflow-hidden bg-zinc-900">
      <motion.img 
      animate={{scale : `${page > -1 ? scaleImage[page] : 1.1}`}}
      src="/images/hero-bg.jpg" className={`fixed w-full h-full object-scale-down ${page > -1 && "blur-md"}`} alt="" />
    </motion.div>
    {(page === -1) && <Hero setPage={setPage}/>}
    {pages[page]}
    </section>
  )
}

export default App