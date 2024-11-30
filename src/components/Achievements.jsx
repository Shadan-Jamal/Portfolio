import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import AchievementInfo from './AchievementInfo'
import achievement from "../data/Achievements"
import Nav from "./Nav"

const Achievements = ({setPage}) => {
    const [scrollBar,setScrollBar] = useState(0);
    const [cardInView,setCardInView] = useState(-1);
    useEffect(() => {
        const scrollPercentage = [20,40,60,80,95];
        setScrollBar(scrollPercentage[cardInView]);
    },[cardInView])

  return (
    <section 
    className='w-[100dvw] h-auto'>
        <Nav setPage={setPage}/>
        <motion.div
        className="w-full max-h-[20%] fixed top-0 z-50 backdrop-blur-md">
            <div className='relative w-full h-full'>
                <motion.h1 className='hero-profile-font text-[10vw] md:text-[4vw] text-white text-center py-3'>
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

export default Achievements