import Exercises from "../Exercises/Exercises";
import JoinUs from "../JoinUs/JoinUs";
import "./HomePage.css";
import React from 'react'




function HomePage() {
  return (
    <div className='homepage'>
        <div className="banner">
          <div className="banner-items">
            <img src="https://media.istockphoto.com/id/1447342236/vector/weightlifting-bodybuilding-isolated-vector-silhouette-workout-in-gym-logo.jpg?s=612x612&w=0&k=20&c=5ez2wKvGy7N15KvkUCcyHLzaXwgOVQqaLHrDurhOvAY=" alt="home-pic" className="homepg-pic"/>
            <div className="description">
            <h1>Transform Your <span>Body</span>, Transform Your <span>Life</span>.</h1>
            <h2>Experience a journey of self-improvement and <br /> empowerment through fitness at our gym.</h2>
            <button className="join-btn">Join Now</button>
            </div>
          </div>
        </div>
        <JoinUs/>
        <Exercises />
        
    </div>
  )
}

export default HomePage