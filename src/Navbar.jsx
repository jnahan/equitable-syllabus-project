import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

function Navbar() {
  return (
    <nav className="nav">
        <Link to = "/" className="logo">Equitable Syllabus Project</Link>
        <ul className="nav__menu">
            <CustomLink to = "/team">Team</CustomLink>      
            <CustomLink to = "/contribute">Contribute</CustomLink>    
            <CustomLink to = "/research-service">Research Service</CustomLink>
            <CustomLink to = "/research-database">Research Database</CustomLink>
            <CustomLink to = "/syllabus-guide">Syllabus Guide</CustomLink>          
        </ul>
    </nav>
  )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return(
        <li className={isActive ? "nav__item active" : "nav__item"}>
            <Link to = {to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar