import React from 'react'
import "./Back.css"

const Back = () => {
  const back_workouts=[{name:'Single Arm Back Rows',image:'https://newlife.com.cy/wp-content/uploads/2019/11/02921301-Dumbbell-Bent-over-Row_back_Back_360.gif',reps:'12reps'},
        {name:'T Raises',image:'https://fitnessprogramer.com/wp-content/uploads/2021/09/Dumbbell-Incline-T-Raise.gif',reps:'12reps'},
        {name:'Delt Raises',image:'https://fitnessprogramer.com/wp-content/uploads/2021/04/Barbell-Rear-Delt-Raise.gif',reps:'12reps'},
        {name:'Pull Ups',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZFIjuyRPMOOc6cfuRvKGNUZoqjqePNlHji4CfOaDQQ&s',reps:'12reps'},
        {name:'Bent Over Rows',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSslMGvZ0ulu3blWg5YgRgkHoFVlUAVa64VZr057moqeA&s',reps:'12reps'},
        {name:'Deadlift',image:'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif',reps:'12reps'}]
  return (
    <div>
        <h1 className='heading'>BACK</h1>
        <div className='workouts'>
          {
            back_workouts.map((obj)=>{
              return <><h1>{obj.name}</h1><img className='abs-img' src={obj.image} /><h3>{obj.reps}</h3></>
            })
            }
        </div>
    </div>
  )
}

export default Back