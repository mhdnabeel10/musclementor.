import React from 'react'
import "./Cardio.css"

const Cardio = () => {
    const cardio_workouts=[{name:'Mountain Climber',image:'https://fitnessprogramer.com/wp-content/uploads/2021/02/Mountain-climber.gif',reps:'12reps'},
  {name:'Squat Jump',image:'https://homeworkouts.org/wp-content/uploads/anim-jump-squats.gif',reps:'12reps'},
  {name:'Skaters',image:'https://i.pinimg.com/originals/86/ff/da/86ffda19a210f5ba780cab77fbaffda7.gif',reps:'12reps'},
  {name:'Jumping Jacks',image:'https://fitnessprogramer.com/wp-content/uploads/2021/05/Jumping-jack.gif',reps:'12reps'},
  {name:'Jogging',image:'https://cdn.dribbble.com/users/3578417/screenshots/15731460/media/28c6fca1f22751963facec7ff1561c28.gif',reps:'15 min'},
  {name:'Jumping Ropes',image:'https://fitnessprogramer.com/wp-content/uploads/2021/06/Jump-Rope.gif',reps:'1 min'}]
  return (
    <div>
        <h1 className='heading'>CARDIO</h1>
        <div className='workouts'>
          {
            cardio_workouts.map((obj)=>{
              return <><h1>{obj.name}</h1><img className='abs-img' src={obj.image} /><h3>{obj.reps}</h3></>
            })
            }
        </div>
    </div>
  )
}

export default Cardio