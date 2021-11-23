import React from 'react'
import './header.css'
import ai from '../../assets/images/ai.png'

const Header = () => {
  return (
    <div className="lt__header section__padding" id="home">
      <div className="lt__header-content">
        <h1 className="gradient__text"> I Help Build Applications and Community </h1>
          <p>I currently work with an amazing agency, but I still get to build on my own time.</p>
          <div className="lt__header-content__input">
            <input type="email" placeholder="Your Email Address" />
            <button type="button">Reach out!</button>
        </div>
      </div>
      <div className="lt__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header
