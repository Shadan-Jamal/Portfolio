import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Hero = () => {
  return (
    <section className='w-[100dvw] h-[100dvh] hero-bg md:overflow-hidden'>
        <motion.div id='profile' className='absolute left-10 bottom-10 my-5 max-w-[50dvw] max-h-fit text-wrap'>
            <img src="/images/hero-profile.jpg" className='w-52 h-52 object-cover rounded-full border-[1px] border-purple-700' alt="" />
            <h1 className='hero-profile-font text-[5.4vw] text-white'>Shadan Jamal</h1>
            <motion.h1
            className='hero-profile-font text-[4vw] text-white'>Front End Developer</motion.h1>
        </motion.div>
        <Nav />
    </section>
  )
}

const Nav = () => {
    const [navbar,openNavbar] = useState(false);

    return <motion.div id='nav' className='absolute right-48 bottom-10 my-5 max-w-[40dvw] max-h-fit'>
        <motion.div
        onClick={() => openNavbar(!navbar)}
        className={`${navbar ? 'rounded-xl flex flex-col' : 'rounded-full'} backdrop-blur-lg pt-2 hover:cursor-pointer`}>
            {navbar && <motion.div
            initial={{height: 0}}
            animate={{height : '100%'}}
            transition={{duration : 0.4, ease: 'circInOut'}}
            className='flex flex-col nav-links'
            >
                {["About","Projects","Achievements","Contact"].map((item,index) => {
                    return <motion.h2 key={index} className={`${index === 0 && 'border-y-0'} border-b-[1px] border-y-purple-600 text-[40px] text-center text-white px-3`}>
                        {item}
                    </motion.h2>
                })}
            </motion.div>}

            {!navbar ? <motion.div 
            whileHover={{scale : 1.2}}
            className={`text-center p-3 rounded-full ${navbar && 'rounded-full'}`}
            >
                <IoMdMenu className='text-white hover:text-purple-800' size={"40px"} /> </motion.div> :
                <motion.div 
                whileHover={{scale : 1.3, origin : 0}}
                className={`text-center w-full h-full p-3 ${navbar && 'flex justify-center items-center'}`}
                >
                <RxCross1 className='text-white hover:text-purple-800' size={"40px"} />
                </motion.div>
            }
        </motion.div>
    </motion.div>
}

export default Hero