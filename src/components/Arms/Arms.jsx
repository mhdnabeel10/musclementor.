import React from 'react'
import "./Arms.css"

const Arms = () => {
  const Arms_workouts=[{name:'Biceps Curl',image:'https://anabolicaliens.com/cdn/shop/articles/mainn_97db10ce-9630-48ab-933c-4aa594734f11.png?v=1650428755',reps:'12reps'},
  {name:'Concentration curl',image:'https://fitnessprogramer.com/wp-content/uploads/2021/02/Concentration-Curl.gif',reps:'12reps'},
  {name:'Hammer curl',image:'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif',reps:'12reps'},
  {name:'Overhead Triceps Extension',image:'https://fitliferegime.com/wp-content/uploads/2022/01/Standing-Dumbbell-Tricep-Extension.webp',reps:'12reps'},
  {name:'Triceps Dips',image:'https://fitnessprogramer.com/wp-content/uploads/2021/04/Triceps-Dips-on-Floor.gif',reps:'12reps'},
  {name:'Lying Triceps Extension',image:'https://images.squarespace-cdn.com/content/v1/5ffcea9416aee143500ea103/1638249525618-8JCDY470GA6C7QEOCRU2/Lying%2BDumbbell%2BTriceps%2BExtension.jpeg',reps:'12reps'}]

  return (
    <div>
        <h1 className='heading'>Arms</h1>
        <div className='workouts'>
        {
        
        Arms_workouts.map((obj)=>{
            return <><h1>{obj.name}</h1><img className='abs-img' src={obj.image} alt='img' /><h3>{obj.reps}</h3></>
        })
}</div>
</div>)
}

export default Arms