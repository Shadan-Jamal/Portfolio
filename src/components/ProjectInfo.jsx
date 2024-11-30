import { useState,useEffect } from "react";
import {motion,useAnimate,stagger} from "framer-motion"
import DrawLineOverText from "./DrawLineOverText"

const ProjectInfo = ({item , index, setIdx}) => {
    const [projectHover, setProjectHover] = useState(false);
    const [scope, projectAnimate] = useAnimate();
    const {name,description,link,src} = item;
  
    useEffect(() => {
      const animateCard = async () => {
        if (projectHover) {
            setIdx(index);
          await projectAnimate("img", 
            { scale: 1.13, filter: "blur(3px)" }, 
            { ease: "circInOut", duration: 0.5 }
          );
  
          await projectAnimate(".char", { y: 0, opacity: 1 }, { ease: "easeInOut",delay : stagger(0.04) });
  
          await projectAnimate("#image-info", 
            { opacity: 1 }, 
            { ease: "circInOut", duration: 1.2 }
          );
        } 
        else {
            setIdx(-1);
          await projectAnimate("img", 
            { scale: 1, filter: "blur(0px)" }, 
            { ease: "circInOut", duration: 0.5 }
          );
        }
      };
    
      animateCard();
    }, [projectHover, projectAnimate]);
  
    return <motion.div
     ref={scope} 
     key={index}
    onHoverStart={() => setProjectHover(true)}
    onHoverEnd={() => setProjectHover(false)} 
     className='col-span-1 w-[70%] max-h-full px-3 py-3  rounded-lg grid place-content-center border-[3px] border-slate-400 border-dotted'>
  
      <motion.div 
       className='image relative'>
        <motion.img
        src={`${src}`} className='w-full object-contain rounded-xl' alt="" 
        />
  
        {projectHover && <motion.div 
        id='heading' 
        className={`${projectHover && 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30  w-full  mb-3 flex flex-col justify-center items-center'}`}>
  
        <motion.div className='flex flex-row justify-center items-center w-full md:mb-5'>
        {name.split("").map((char) => {
          return <motion.span 
            initial={{y : 100, opacity : 0}}
            className='char text-3xl hero-profile-font text-white font-bold'>{char}
            <DrawLineOverText />
            </motion.span>
          })}
        </motion.div>
        
          <motion.p id='image-info'
          initial={{opacity : 0}}
          className='hover:cursor-default text-lg font-extrabold text-white light-font'>
            {description}<br/><br/>
  
          <a href={link} className='hover:text-purple-800 hover:underline hover:font-extrabold text-white hero-profile-font'>
            Check out the live link!
          </a>
          </motion.p>
        </motion.div>
        }
      </motion.div>
    </motion.div>
  }

  export default ProjectInfo;