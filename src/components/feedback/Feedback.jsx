import React from 'react'
import './Feedback.css'
const Feedback = () => {
  return (
    <div className="feedback">
        <video autoplay loop muted  plays-inline className='back-play'>
            <source src="C:\Users\khush\Vib3\src\assets\luffy-edit.mp4" type="video/mp4" />
        </video>
        <h1 className="contanta">Explore</h1>
        <img className="feedback play-back" src="https://gifdb.com/images/high/anime-rainy-scene-l79hej9j4iihcwqv.gif"/>
    </div>
  )
}

export default Feedback