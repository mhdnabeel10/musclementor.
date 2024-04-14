import React from 'react'
import "./Shoulders.css"

const Shoulders = () => {
    const shoulders_workouts=[{name:'Shoulder Press',image:'https://fitnessprogramer.com/wp-content/uploads/2021/02/Arnold-Press.gif',reps:'12reps'},
  {name:'Lateral Raises',image:'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif',reps:'12reps'},
  {name:'Front Raises',image:'https://fitnessprogramer.com/wp-content/uploads/2021/06/Alternating-Dumbbell-Front-Raise.gif',reps:'12reps'},
  {name:'Upright Row',image:'https://fitnessprogramer.com/wp-content/uploads/2021/02/barbell-uprightrow.gif',reps:'12reps'},
  {name:'Arnold Press',image:'https://fitnessprogramer.com/wp-content/uploads/2021/10/Half-Arnold-Press.gif',reps:'12reps'},
  {name:'Shurgs',image:'https://cdn.shopify.com/s/files/1/0547/0486/5477/files/dumbbell-shrug_480x480.gif?v=1701426774',reps:'12reps'}]
  return (
    <div>
        <h1 className='heading'>SHOULDERS</h1>
        <div className='workouts'>
          {
            shoulders_workouts.map((obj)=>{
              return <><h1>{obj.name}</h1><img className='abs-img' src={obj.image} alt='img' /><h3>{obj.reps}</h3></>
            })
            }
        </div>
    </div>
  )
}

export default Shoulders