import {motion} from "framer-motion"
import DrawLineOverText from './DrawLineOverText'

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

export default AchievementInfo;