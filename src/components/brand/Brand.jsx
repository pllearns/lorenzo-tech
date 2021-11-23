import React from 'react'
import './brand.css'
import { fyc, fycPurple } from './imports'

const Brand = () => {
  return (
    <div className="lt__brand section__padding">
      <p className="lt__brand-description">Currently working with</p>
      <div>
        <img src={fyc} alt="fyc" />
      </div>
    </div>
  )
}

export default Brand
