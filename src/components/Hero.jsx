import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Nav from "./Nav"
import DrawLineOverText from './DrawLineOverText'

const Hero = ({setPage}) => {
  return (
    <section className={`w-[100dvw] h-[100dvh] hero-bg md:bg-cover bg-no-repeat md:overflow-x-hidden`}>
        <motion.div id='profile' className='absolute left-10 bottom-10 my-5 max-w-[50dvw] max-h-fit text-wrap'>
            <img src="/images/hero-profile.jpg" className='md:w-52 md:h-52 w-44 h-44 object-cover rounded-full border-[1px] border-purple-700' alt="" />
            <h1 className='max-w-fit hero-profile-font text-nowrap text-[10vw] md:text-[5.4vw] text-white'>Shadan Jamal</h1>
            <motion.h1
            className='hero-profile-font text-nowrap text-[6vw] md:text-[4vw] text-white'>Front End Developer</motion.h1>
            <DrawLineOverText />
        </motion.div>
        <Nav setPage={setPage}/>
    </section>
  )
}



export default Hero