import React from 'react'
import './Feedback.css'
const Feedback = () => {
  return (
    <div className="image-container">
        <video autoplay loop muted  plays-inline className='back-play'>
            <source src="../../assets/luffy-edit.mp4" type="video/mp4" />
        </video>
        <img className='feedback' src="https://i.pinimg.com/originals/7f/2d/1b/7f2d1baa0a92449ec2bbc21772a36762.gif"/>
        <div className="text-overlay contant">
            <h1>feedback</h1>
            <a href="">!</a>
        </div>
    </div>
  )
}

export default Feedback