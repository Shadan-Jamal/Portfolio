import React, { useEffect, useState } from 'react'
import {motion,useMotionValueEvent,useScroll,useSpring} from "framer-motion"
import DrawLineOverText from './DrawLineOverText'
import achievement from "../data/Achievements"

const Achievements = () => {
    const [scrollBar,setScrollBar] = useState(0);
    const [cardInView,setCardInView] = useState(-1);
    useEffect(() => {
        const scrollPercentage = [20,40,60,80,95];
        setScrollBar(scrollPercentage[cardInView]);
    },[cardInView])

  return (
    <section 
    className='w-[100dvw] h-auto'>
        <motion.div
        className="w-full max-h-[20%] fixed top-0 z-50">
            <div className='relative w-full h-full'>
                <motion.h1 className='hero-profile-font md:text-[4vw] text-white text-center py-3'>
                    My Achievements
                </motion.h1>
            <motion.div 
            initial={false}
            animate={{width : `${scrollBar}%` , transition : {ease : "easeOut", type :"spring" ,stiffness : 50}}}
            className={`bg-pink-500 h-1 rounded-full absolute left-1/2 bottom-3 -translate-x-1/2 -translate-y-1/2`}></motion.div>
            </div>
        </motion.div>

        <motion.div className='w-full h-[100vh] flex flex-col justify-start items-start snap-mandatory snap-y overflow-y-scroll'>
            {achievement.map((item,index) => {
                return <AchievementInfo item={item} index={index} setCardInView={setCardInView}/>
            })}
        </motion.div>
    </section>
  )
}

const AchievementInfo = ({item,index, setCardInView}) => {

    return <motion.div
    onViewportEnter={() => setCardInView(index)} 
    key={index} className='snap-center w-full h-[100vh] grid grid-cols-2 place-content-center place-items-center gap-3 my-56 px-10'>

    <motion.div 
    initial={{scale : 0}}
    whileInView={{scale : 1 , transition : {ease : "easeOut", type: 'tween'}}}
    className='rounded-xl max-w-1/2 max-h-[80vh] flex justify-center items-center overflow-hidden mt-10'>
        <img src={item.src} className='max-w-full object-contain brightness-75 border-[2px] border-purple-700' alt={item.clg}/>
    </motion.div>

    <motion.div className='max-w-1/2 h-full flex flex-col justify-center items-center gap-8'>
        <motion.div className='hero-profile-font w-full max-h-fit'>
            <motion.div 
            initial={{scale : 0}}
            whileInView={{scale : 1 , transition : {ease : "easeIn", type : 'tween' ,duration : 0.2}}}
            className='w-full h-fit flex justify-center mb-5'>
                <img src={item.logo} className={`${index === 0 ? "max-w-[60%]" : "max-w-[30%]"} object-contain`} alt={item.clg} />
            </motion.div>
            <motion.h1
            initial={{x:-100, opacity: 0}}
            whileInView={{x : 0, opacity :1 , transition : {duration : 0.5}}}
            className='text-white text-[2.3vw] text-start'>{item.clg}
            <DrawLineOverText />
            </motion.h1>
        </motion.div>
        <motion.div className='w-full max-h-fit light-font overflow-hidden'>
            <motion.p 
            initial={{x: -150, opacity: 0}}
            whileInView={{x : 0, opacity :1 , transition : {duration : 0.8}}}
            className='text-[2vw] text-start whitespace-pre-line text-white'>
                {item.description}
            </motion.p>
        </motion.div>
    </motion.div>
    </motion.div> 
}

export default Achievements