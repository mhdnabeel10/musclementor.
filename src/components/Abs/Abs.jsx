import React from 'react'
import "./Abs.css"


const Abs = () => {
  const Abs_workouts=[{name:'Crunches',image:'https://images.squarespace-cdn.com/content/v1/5ffcea9416aee143500ea103/1638347033951-YYA5R76DZYUSFA2824L0/Crunches.jpeg',reps:'12reps'},
  {name:'Air bike crunches',image:'https://homeworkouts.org/wp-content/uploads/anim-air-bike-crunches.gif',reps:'12reps'},
  {name:'Decline Crunches',image:'https://images.squarespace-cdn.com/content/v1/5ffcea9416aee143500ea103/1638345211349-6DBB9WKBZH8JJLT6WGQA/Decline%2BCrunch.jpeg?format=1000w',reps:'12reps'},
  {name:'Raised leg hold',image:'https://images.squarespace-cdn.com/content/v1/5ffcea9416aee143500ea103/1638345912387-EHAMVIXNH8NCXGW6IHTJ/Raised%2BLegs%2BCross%2BBody%2BCrunches.jpeg?format=1000w',reps:'30 seconds'},
  {name:'Plank hold',image:'https://www.inspireusafoundation.org/wp-content/uploads/2022/11/body-saw-plank.gif',reps:'1 min'},
  {name:'Side Plank',image:'https://fitliferegime.com/wp-content/uploads/2021/10/Forearm-Side-Plank.webp',reps:'1 min'}]
  return (
    <div>
        <h1 className='heading'>ABS</h1>
        <div className='workouts'>
          {
            Abs_workouts.map((obj)=>{
              return <><h1>{obj.name}</h1><img className='abs-img' src={obj.image} alt='img' /><h3>{obj.reps}</h3></>
            })
            }
        </div>
    </div>
  )
}

export default Abs




