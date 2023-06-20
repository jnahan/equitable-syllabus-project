import React from 'react'

function Navbar() {
  return (
    <nav>
        <a href = "/" className='site-title'>Equitable Syllabus Project</a>
        <ul>
            <li>
                <a href = "/team">Team</a>
                <a href = "/contribute">Contribute</a>
                <a href = "/research-service">Research Service</a>
                <a href = "/research-database">Research Database</a>
                <a href = "/syllabus-guide">Syllabus Guide</a>                
            </li>
        </ul>
    </nav>
  )
}

export default Navbar