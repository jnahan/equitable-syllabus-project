import React from "react"
import { Link } from "react-router-dom"
import { useRef } from "react"
import MenuIcon from "./icons/menu.svg"

function Navbar() {
  const navRef = useRef()
  const showNavbar = () => {
    navRef.current.classList.toggle("nav--responsive")
  }

  return (
    <header className="header--nav">
      <Link to = "/" className="logo">Equitable Syllabus Project</Link>
      <button
        className="nav__bttn"
        onClick={showNavbar}>
        <img src={MenuIcon} alt="" />
      </button>
      <nav className="nav" ref = {navRef}>
        <ul className="nav__menu">
          <Link onClick={showNavbar} className="nav__item" to = "/team">Team</Link>      
          <Link onClick={showNavbar} className="nav__item" to = "/contribute">Contribute</Link>    
          <Link onClick={showNavbar} className="nav__item" to = "/research-service">Research Service</Link>
          <Link onClick={showNavbar} className = "bttn--secondary bttn--secondary--nav" to = "/research-database">Research Database</Link>
          <Link onClick={showNavbar} className="bttn--primary bttn--primary--nav" to = "/syllabus-guide">Syllabus Guide</Link>       
        </ul>
      </nav>
    </header>
  )
}

export default Navbar