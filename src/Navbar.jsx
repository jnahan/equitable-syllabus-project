import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="nav">
        <Link to = "/" className="logo">Equitable Syllabus Project</Link>
        <ul className="nav__menu">
            <Link className="nav__item" to = "/team">Team</Link>      
            <Link className="nav__item" to = "/contribute">Contribute</Link>    
            <Link className="nav__item" to = "/research-service">Research Service</Link>
            <Link className = "bttn--secondary bttn--secondary--nav" to = "/research-database">Research Database</Link>
            <Link className="bttn--primary bttn--primary--nav" to = "/syllabus-guide">Syllabus Guide</Link>          
        </ul>
    </nav>
  )
}

export default Navbar