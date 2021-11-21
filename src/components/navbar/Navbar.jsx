import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/images/logo.png' 
import './navbar.css'

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#aboutLT">AboutLT</a></p>
  <p><a href="#portfolio">Portfolio</a></p>
  <p><a href="#contact">Contact</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="lt__navbar">
      <div className="lt__navbar-links">
        <div className="lt__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="lt__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="lt__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="lt__navbar-menu">
        {toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} /> 
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="lt__navbar-menu_container scale-up-center">
            <div className="lt__navbar-menu_container-links">
              <Menu />
              <div className="lt__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
