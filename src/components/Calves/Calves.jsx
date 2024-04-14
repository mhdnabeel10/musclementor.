import React from 'react'
import "./Calves.css"

const Calves = () => {
    const calves_workouts=[{name:'Standing Calf Raise',image:'https://fitnessprogramer.com/wp-content/uploads/2021/09/Bench-Press-Machine-Standing-Calf-Raise.gif',reps:'12reps'},
        {name:'Seated Calf Raise',image:'https://fitnessprogramer.com/wp-content/uploads/2021/09/Barbell-Seated-Calf-Raise.gif',reps:'12reps'},
        {name:'Jump Rope',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQMTrrcnTbinZhn69KETIColldtT7D06-8iHMYyebTALnSj6VvyvLpxnxgqJZ7t9-VcM&usqp=CAU',reps:'12reps'},
        {name:'Farmers Walk On Toes',image:'https://totalshape.com/wp-content/uploads/2019/01/Farmers-Walk.gif',reps:'12reps'},
        {name:'Standing Wall Calf Stretch',image:'https://i.pinimg.com/originals/93/7d/d7/937dd77b8c95826c3033a14c9e60e9bc.gif',reps:'12reps'}]
  return (
    <div>
        <h1 className='heading'>CALVES</h1>
        <div className='workouts'>
          {
            calves_workouts.map((obj)=>{
              return <><h1>{obj.name}</h1><img className='abs-img' src={obj.image} /><h3>{obj.reps}</h3></>
            })
            }
        </div>
    </div>
  )
}

export default Calves