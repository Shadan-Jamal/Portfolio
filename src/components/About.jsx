import React, { useState, useEffect } from 'react'
import {AnimatePresence, motion, stagger, useAnimate} from 'framer-motion'
import DrawLineOverText from './DrawLineOverText'
import Nav from './Nav'
import skills from "../data/Skills"
import contact from "../data/Contact"


const About = ({setPage}) => {
  const [contacts, setContacts] = useState(false);
  const [scope, linkAnimate] = useAnimate();

  useEffect(() => {
    if(contacts){
      console.log("running")
      linkAnimate("div",{y: 0, opacity : 1 }, {ease : 'circInOut' , delay : stagger(0.06),type : "spring", stiffness : 50})
    }
  },[contacts])

  return (
    <motion.div className='w-[100dvw] h-auto md:h-[100dvh] overflow-auto md:overflow-hidden'>
      <Nav setPage={setPage} />
      <motion.div 
      className='w-full h-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 place-content-between place-items-start md:place-items-center gap-5 md:gap-0 py-10 px-9'>
        <motion.div className='md:col-span-4 md:row-span-1 rounded-full border-purple-800 border-2'>
          <img src="/images/about-pic.jpeg" className='rounded-full border w-[15rem] h-[15rem] object-cover brightness-[0.7]' alt="" />
        </motion.div>

        {/* About Me */}
        <motion.div className='md:col-span-2 md:row-span-3 col-span-1 max-h-full py-3 px-5'>
          <div className='w-fit mb-3'>
            <h1 className='hero-profile-font text-start text-3xl md:text-purple-600 text-purple-500'>About Me</h1>
            <DrawLineOverText />
          </div>
          <p className='light-font text-white text-xl text-wrap whitespace-pre'>
            <span className='font-extrabold text-purple-500 whitespace-pre'>
              &lt;Shadan Jamal&gt;</span> <br/>I am a computer science student currently in the 3rd year of pursuing my UG degree in Bangalore. 
              I am a passionate learner in the field of Front-End Development, having experience in HTML5, CSS3, Javascript, ReactJS and Framer Motion, leveraging this tech stack to build highly responsive and visually appealing web apps.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div 
        transition={{delay: stagger(2)}}
        className='md:col-span-2 md:row-span-3 col-span-1 max-h-screen py-3 grid md:grid-cols-2 grid-cols-1 md:place-content-end md:gap-3 gap-2 px-3 border-2 border-dashed border-purple-800 rounded-xl'>
          {skills.map((skill,index) => {
            return <motion.div key={index} className='flex flex-row items-center flex-wrap gap-4 w-full max-h-fit'>
              {skill.icon ? skill.icon : <h1 className='text-purple-500 md:text-[4rem] text-[12vw] md:w-20 text-center'>C</h1>}
              <p className={`text-white md:text-xl hero-profile-font font-bold w-[200px] ps-1 ${index === 7 && 'md:justify-self-end text-[8vw]'}`}>
                {skill.name}
              <motion.div 
              initial={{width : 0}}
              whileInView={{width : `${skill.level}%`, transition : {ease : "easeIn", duration : 1.2}}}
              className={`h-2 bg-purple-700 md:justify-self-end rounded-lg`}>
              </motion.div>
              </p>
            </motion.div>
          })}
        </motion.div>

        {/* Contacts */}
        {contacts ? 
        <motion.div 
          ref={scope}
        className='md:col-span-2 md:row-span-3 col-span-1 place-self-center flex flex-row justify-center gap-3 h-[7vh]'>
          {contact.map((contact,index) => {
            return <motion.div 
            initial={{y: "100vh" ,opacity : 0}}
            whileTap={{scale : 1.2, color: "purple"}}
            whileHover={{scale : 1.2, color: "purple"}}
            key={index} className='max-w-fit'>
              <motion.span
              className='hover:cursor-pointer'>
                <a target='_blank' onClick={contact.onclick && contact.onclick} href={`${contact.link}`}>
                  {contact.icon}
                </a>
              </motion.span>
            </motion.div>
          })}
        </motion.div>
        : 
        <AnimatePresence>
            <motion.p
              initial={{x : '-100vw'}}
              animate={{x : 0}}
              exit={{x : '-100vw', opacity : 0}}
              transition={{ease : "circInOut" , duration : 0.5}}
              onClick={() => setContacts(true)}
              whileHover={{scale : 1.2, backgroundColor : "whitesmoke"}}
            className='bg-black text-xl text-purple-800 hero-profile-font font-extrabold px-4 py-2 hover:cursor-pointer'>Links</motion.p>  
        </AnimatePresence>
      }
      </motion.div>       
    </motion.div>
  )
}

export default About