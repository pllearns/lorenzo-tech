import React from 'react'
import { Feature } from '../../components'
import './features.css'

const Features = () => {
  return (
    <div className="lt__features section__margin" id="features">
        <div className="lt__features-feature">
          <Feature />
        </div>
        <div className="lt__features-heading">
          <h1 className="gradient__text">My Current Work</h1>
          <p>Take a look at the projects I'm working on</p>
        </div>
        <div className="lt__features-container">
          <Feature />
          <Feature />
          <Feature />
        </div>
    </div>
  )
}

export default Features
