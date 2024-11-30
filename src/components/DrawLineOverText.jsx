import React from 'react'
import {motion} from "framer-motion"

const DrawLineOverText = () => {
  return (
    <motion.div 
    initial={{width : 0}}
    animate={{width : "100%"}}
    transition={{delay: 1.5, ease : "circInOut", duration : 0.5}}
    className='h-[1px] bg-purple-400'>
    </motion.div>
  )
}

export default DrawLineOverText