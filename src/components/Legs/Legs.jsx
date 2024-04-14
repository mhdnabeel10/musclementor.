import React from 'react'
import "./Legs.css"

const Legs = () => {
    const leg_workouts=[{name:'Squats',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgDM_4_1Mhb0uBbICpfce-9X9vmdDd9VCxGya2VghTQmRcZ2NOv53vaI-FgSVxy0Uh28&usqp=CAU',reps:'12reps'},
  {name:'Leg Press',image:'https://fitnessprogramer.com/wp-content/uploads/2015/11/Leg-Press.gif',reps:'12reps'},
  {name:'lunges',image:'https://fitnessprogramer.com/wp-content/uploads/2023/10/Static-Lunge.gif',reps:'12reps'},
  {name:'Calf Raise',image:'https://i.pinimg.com/originals/fd/19/2b/fd192bb6ef1ff52e0babb696c59500f1.gif',reps:'12reps'},
  {name:'Leg Extensions',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS05IiRIAlmij1fu-7ZrgZOQLs014CvPVmGqfiEHTDz4g&s',reps:'12reps'},
  {name:'Hamstring Curls',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtuIUnYzjr3KES2lsxg5yaGKBl_tmBX2aUuCPmXzKIMw&s',reps:'12reps'}]
  return (
    <div>
        <h1 className='heading'>LEGS</h1>
        <div className='workouts'>
          {
            leg_workouts.map((obj)=>{
              return <><h1>{obj.name}</h1><img className='abs-img' src={obj.image} alt='img' /><h3>{obj.reps}</h3></>
            })
            }
        </div>
    </div>
  )
}

export default Legs