import React,{useEffect, useState} from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import { motion } from 'framer-motion'

const scaleImage = [1.4,1.6,1.8]

const App = () => {
  const [page , setPage] = useState(-1);
  // const [selectPage,setSelectPage] = useState(<Hero />);

  const pages = [
    <About setPage={setPage} />,
    <Projects setPage={setPage} />,
    <Achievements setPage={setPage} />
  ];

  return (
    <section
    className={`h-auto`}>
    <motion.div
    className="absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-[100dvw] h-full -z-10 overflow-hidden bg-zinc-900">
      <motion.img 
      animate={{scale : `${page > -1 ? scaleImage[page] : 1.1}`}}
      src="/images/hero-bg.jpg" className={`fixed w-full h-full md:object-contain ${page > -1 ? "blur-md object-cover" : "object-cover"}`} alt="" />
    </motion.div>
    {(page === -1) && <Hero setPage={setPage}/>}
    {pages[page]}
    </section>
  )
}

export default App