import React from 'react'
import "./Chest.css"

const Chest = () => {
    const chest_workouts=[{name:'Push Ups',image:'https://fitnessprogramer.com/wp-content/uploads/2021/06/Push-Up-Plus.gif',reps:'12reps'},
        {name:'Diamond Push Ups',image:'https://i.pinimg.com/originals/00/2f/9a/002f9a315be7db7b0f0a79ca81e1f5d5.gif',reps:'12reps'},
        {name:'Chest Fly',image:'https://newlife.com.cy/wp-content/uploads/2019/11/03021301-Dumbbell-Decline-Fly_Chest_360.gif',reps:'12reps'},
        {name:'Chest Press',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqoXSsaPPHfXzidVsT0tJhzbYJWfWsIhx1_D47jv8LZg&s',reps:'12reps'},
        {name:'Incline Chest Press',image:'https://i.pinimg.com/originals/c8/a0/d4/c8a0d4548d0d1249c2c0317b6f55b90f.gif',reps:'12reps'}]
  return (
    <div>
        <h1 className='heading'>CHEST</h1>
        <div className='workouts'>
          {
            chest_workouts.map((obj)=>{
              return <><h1>{obj.name}</h1><img className='abs-img' src={obj.image} /><h3>{obj.reps}</h3></>
            })
            }
        </div>
    </div>
  )
}

export default Chest