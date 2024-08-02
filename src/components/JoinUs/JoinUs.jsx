import React from 'react'
import "./JoinUs.css"


const JoinUs = ({ishomepage}) => {
  return (
    <div className={`main ${ishomepage ? 'main' : 'ham-main'}`}>
        <h1 className='h1'>About</h1>
        <h3>"Welcome to your virtual fitness sanctuary – your go-to destination for achieving your health goals from the comfort of home. <br /> Dive into a treasure trove of workout routines, nutrition tips, and motivation to keep you on track. <br /> Join our online community and embark on your journey to a healthier, stronger you, right from your living room."</h3>
    </div>
    
  )
}

export default JoinUs