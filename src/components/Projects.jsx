import React, { useEffect, useState } from 'react'
import {easeOut, motion} from "framer-motion"
import project from "../data/Project" 
import ProjectInfo from './ProjectInfo'
import { GoDependabot } from "react-icons/go";
import { MdOutlineComputer } from "react-icons/md";
import { FaCameraRetro } from "react-icons/fa";
import { GiShamblingZombie } from "react-icons/gi";

const icons = [
  {
    icon : <GoDependabot className='scale-125' color='pink'/>,
  },
  {
    icon : <MdOutlineComputer className='scale-125' color='pink'/>,
  },
  {
    icon : <GiShamblingZombie className='scale-125' color='pink'/>,
  },
  {
    icon : <FaCameraRetro className='scale-125' color='pink'/>,
  },
]

const Projects = () => {
  const [idx , setIdx] = useState(-1);
  const [headingWithIcon , setHeadingWithIcon] = useState([]);
  const insertIcon = () => {
    const heading = "My Projects".split("");
    const {icon} = icons[idx];
    heading.splice(Math.floor(Math.random()* heading.length),0,icon);
    setHeadingWithIcon(heading);
  }

  useEffect(() => {
    (idx > -1) && insertIcon();
  },[idx])

  return (
    <section className='md:w-[100vw] md:h-[100vh]'>
      <motion.div id="heading" initial={false} animate={{width : 'auto'}} className='h-fit flex justify-center py-5 border-b-[2px]'>
        {idx > -1 ? headingWithIcon.map((char,index) => {
        return <motion.span 
        initial={{opacity : 0}}
        animate={{opacity : 1 , transition : {ease : easeOut, duration: 0.2}}}
        exit={{opacity : 0}}
        key={index} className='text-6xl hero-profile-font text-white font-extrabold mx-2'>
          {char}  
        </motion.span>
      }) : 
      "My Projects".split("").map((char,index) => {
        return <span key={index} className='text-6xl hero-profile-font text-white font-extrabold mx-2'>
          {char}  
        </span>
      })
      
      }
      </motion.div>
      <motion.div className="w-full h-full px-10 pb-5 grid grid-cols-2 place-content-center place-items-center gap-y-5">
          {project.map((item,index) => {
            return <ProjectInfo item={item} index={index} setIdx={setIdx}/>
          })}
      </motion.div>
    </section>
  )
}

export default Projects