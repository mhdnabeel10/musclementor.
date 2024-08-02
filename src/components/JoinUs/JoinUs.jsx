import React from 'react'
import "./JoinUs.css"
import { motion } from 'framer-motion';

const JoinUs = ({ishomepage}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 ,delay: 0.4 }}
    >
    <div className={`main ${ishomepage ? 'main' : 'ham-main'}`}>
        <h1 className='h1'>About</h1>
        <h3>"Welcome to your virtual fitness sanctuary – your go-to destination for achieving your health goals from the comfort of home. <br /> Dive into a treasure trove of workout routines, nutrition tips, and motivation to keep you on track. <br /> Join our online community and embark on your journey to a healthier, stronger you, right from your living room."</h3>
    </div>
    </motion.div>
  )
}

export default JoinUs