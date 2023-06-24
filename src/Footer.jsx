import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-logo">
        <Link to = "/" className='logo'>Equitable Syllabus Project</Link>
        <div className="footer-description">
          <a href="mailto:esp@nyu.edu">esp@nyu.edu</a>
          <div className="vl"></div>
          <p>ITP/IMA</p>
          <div className="vl"></div>
          <p>New York University</p>
        </div>
      </div>
      <div className="footer-links">
        <ul>
          <h5 className='body-default'>ITP/IMA Community</h5>
          <li><a href="https://tisch.nyu.edu/itp" rel="noopener noreferrer">About ITP/IMA</a></li>
          <li><a href="https://itpnyu.github.io/ITP-IMA-Code-of-Conduct/index" rel="noopener noreferrer">Code of Conduct</a></li>
          <li><a href="https://itp-techandsociety.github.io/online/" rel="noopener noreferrer">Tech and Society</a></li>
          <li><a href="https://itp.nyu.edu/groups/equitable/" rel="noopener noreferrer">Equitable Working Group</a></li>   
        </ul>
        <ul>
          <h5 className='body-default'>NYU Diversity Resources</h5>
          <li><a href="https://tisch.nyu.edu/diversity" rel="noopener noreferrer">Tisch Office of Diversity</a></li>
          <li><a href="https://tisch.nyu.edu/diversity/IDBEA_Commitments" rel="noopener noreferrer">Tisch Commitments to Diversity</a></li>
          <li><a href="https://www.nyu.edu/life/global-inclusion-and-diversity.html" rel="noopener noreferrer">NYU Global Inclusion and Diversity</a></li>
          <li><a href="https://www.nyu.edu/about/policies-guidelines-compliance/equal-opportunity/bias-response/report-a-bias-incident.html" rel="noopener noreferrer">NYU Bias Response Line</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer