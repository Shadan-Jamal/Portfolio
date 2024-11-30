import {motion} from "framer-motion"
import DrawLineOverText from './DrawLineOverText'

const AchievementInfo = ({item,index, setCardInView}) => {

    return <motion.div
    onViewportEnter={() => setCardInView(index)} 
    key={index} className='snap-center w-full h-[100vh] grid md:grid-cols-2 grid-cols-1 place-content-center place-items-center gap-3 my-20 md:my-56 px-5 md:px-10'>

    <motion.div 
    initial={{scale : 0}}
    whileInView={{scale : 1 , transition : {ease : "easeOut", type: 'tween'}}}
    className='rounded-xl max-w-1/2 max-h-[30vh] md:max-h-[80vh] flex justify-center items-center overflow-hidden mt-10'>
        <img src={item.src} className={`${index === 3 ? "" : "max-w-full"} object-contain brightness-75 border-[2px] border-purple-700`} alt={item.clg}/>
    </motion.div>

    <motion.div className='max-w-1/2 h-full md:flex md:flex-col md:justify-center md:items-center md:gap-8 grid grid-rows-2 gap-2'>
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
            className='text-white text-[7vw] md:text-[2.3vw] text-start'>{item.clg}
            <DrawLineOverText />
            </motion.h1>
        </motion.div>
        <motion.div className='w-full max-h-fit light-font overflow-hidden'>
            <motion.p 
            initial={{x: -150, opacity: 0}}
            whileInView={{x : 0, opacity :1 , transition : {duration : 0.8}}}
            className='text-[4.5vw] md:text-[2vw] text-start text-wrap whitespace-pre-line text-white'>
                {item.description}
            </motion.p>
        </motion.div>
    </motion.div>
    </motion.div> 
}

export default AchievementInfo;