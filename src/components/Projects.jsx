import React, { useEffect, useState } from 'react'
import {motion, useAnimate, stagger} from "framer-motion"
import project from "../data/Project"

const Projects = () => {
  return (
    <section className='md:w-[100vw] md:h-[100vh]'>
      <motion.div id="heading" className='w-full h-fit flex justify-center py-5 border-b-[2px]'>
        {"My Projects".split("").map(char => (
        <span className='text-6xl hero-profile-font text-white font-extrabold mx-1'>{char}</span>))}
      </motion.div>
      <motion.div className="w-full h-full px-10 pb-5 grid grid-cols-2 place-content-center place-items-center gap-y-5">
          {project.map((item,index) => {
            return <ProjectInfo item={item} index={index}/>
          })}
      </motion.div>
    </section>
  )
}

const ProjectInfo = ({item , index}) => {
  const [projectHover, setProjectHover] = useState(false);
  const [scope, projectAnimate] = useAnimate();
  const {name,description,link,src} = item;

  useEffect(() => {
    const animateCard = async () => {
      if (projectHover) {
        await projectAnimate("span", { y: 0 }, { ease: "backOut" });
        // await projectAnimate("img", 
        //   { scale: 1.13, filter: "blur(3px)" }, 
        //   { ease: "circInOut", duration: 0.5 }
        // );
        await projectAnimate("#image-info", 
          { opacity: 1 }, 
          { ease: "backOut", duration: 1.2 }
        );
      } 
      else {
        await projectAnimate("span", { y: 100 }, { ease: "backIn" });
        // await projectAnimate("img", 
        //   { scale: 0, filter: "blur(0px)" }, 
        //   { ease: "circInOut", duration: 0.5 }
        // );
        await projectAnimate("#image-info", 
          { opacity: 0 }, 
          { ease: "backIn", duration: 0.8 }
        );
      }
    };
  
    animateCard();
  }, [projectHover, projectAnimate]);
  

  console.log(projectHover)

  return <motion.div
   ref={scope} 
   key={index}
   onHoverStart={() => setProjectHover(true)}
    onHoverEnd={() => setProjectHover(false)} 
   className='col-span-1 w-[70%] max-h-full px-3 py-3  rounded-lg grid place-content-center border-[3px] border-slate-400 border-dotted'>
    <motion.div id='heading' className={`${projectHover && 'mb-3 transition-all ease-in-out'}`}>
      {projectHover && name.split("").map((char) => {
        return <motion.span 
        initial={{y : 100}}
        className='text-xl hero-profile-font text-white font-bold'>{char}</motion.span>
      })}
    </motion.div>

    <motion.div 
     className='image relative'>
      <motion.img 
      whileHover={{scale : 1.13, filter : "blur(2px)"}}
      src={`${src}`} className='w-full object-contain' alt="" 
      />

      {projectHover && <motion.p id='image-info'
      initial={{opacity : 0}}
      className='absolute hover:cursor-default top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full text-lg font-extrabold text-white light-font'>{description}<br/><br/>
      <a href={link} className='hover:text-purple-800 hover:underline hover:font-extrabold text-white hero-profile-font'>Check out the live link!</a>
      </motion.p>}
    </motion.div>
  </motion.div>
}

export default Projects