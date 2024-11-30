import { useEffect, useState } from "react";
import {motion,stagger,useAnimate,AnimatePresence} from "framer-motion"
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Nav = ({setPage}) => {
    const [navbar,openNavbar] = useState(false);
    const [navScope, navAnimate] = useAnimate();

    const handleClick = (index) => {
        if(index === 0){
            setPage(-1);
        }
        setPage(index - 1);
    }

    useEffect(() => {
        if (navbar) {
            navAnimate(".heading",
            {x : 0, opacity : 1},
            {ease: 'easeIn',duration:0.5, delay:stagger(0.1)})
        }
    },[navbar])
    
    return <motion.div id='nav' className='fixed md:right-20 md:top-10 right-5 top-5 max-w-[70dvw] max-h-fit z-[9999999]'>
        <motion.div
        onClick={() => openNavbar(!navbar)}
        className={`${navbar ? 'rounded-xl flex flex-col' : 'rounded-full'} backdrop-blur-sm pt-2 hover:cursor-pointer`}>
            {navbar && <motion.div
            ref={navScope}
            initial={{height: 0}}
            animate={{height : '100%'}}
            transition={{duration : 0.4, ease: 'circInOut'}}
            className='flex flex-col light-font overflow-hidden'
            >   
                <AnimatePresence>
                {["Home","About","Projects","Achievements"].map((item,index) => {
                    return <motion.h2
                    onClick={() => handleClick(index)}
                    initial={{x : -200 ,opacity : 0}}
                    whileHover={{scale : 1.1, color : "violet"}}
                    key={index} 
                    className={`heading ${index === 0 && 'border-y-0'} border-b-[1px] border-y-purple-600 text-[5vw] md:text-[2vw] text-center text-white px-3`}>
                        {item}
                    </motion.h2>
                })}
                </AnimatePresence>
            </motion.div>}

            {!navbar ? <motion.div 
            whileHover={{scale : 1.2}}
            className={`text-center p-3 rounded-full ${navbar && 'rounded-full'}`}
            >
                <IoMdMenu className='text-white hover:text-purple-800 text-[6vw] md:text-[40px]' /> </motion.div> :
                <motion.div 
                whileHover={{scale : 1.3, origin : 0}}
                className={`text-center w-full h-full p-3 ${navbar && 'flex justify-center items-center'}`}
                >
                <RxCross1 className='text-white hover:text-purple-800 text-[6vw] md:text-[40px]' />
                </motion.div>
            }
        </motion.div>
    </motion.div>
}

export default Nav;