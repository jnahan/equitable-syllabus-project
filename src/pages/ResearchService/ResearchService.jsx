import React from 'react'
import InfoCard from '../../InfoCard'
import { useEffect } from 'react'

function ResearchService() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div className='top-margin'>
      <div className="section">
        <div className="section-content">
          <div className="section-text">
            <h3 className="heading-3">Get Help Creating Your Syllabus</h3>
            <p className='body-large'>We offer faculty members an opportunity to work with a research assistant that provides tailored recommendations and support to help you create a curriculum that empowers your students.</p>
            <button className="primary-bttn">Sign Up For Research Service</button>
          </div>
          <div className="section-img">
            <img src="/images/rs.png" alt="" />
          </div>
        </div>
      </div>
      <div className="section section-center">
        <h3 className="heading-3">Our Research Service Takes Just a Few Steps</h3>
        <p className='body-large'>The research process can last anywhere from 3 weeks to multiple months of sustained engagement.</p>
        <div className="info-card-wrapper">
          <InfoCard Image="images/rs-1.png" Heading="Intake" Text="Faculty pinpoints specific areas of their syllabus the researcher can focus on"/>
          <InfoCard Image="images/rs-2.png" Heading="Research" Text="Researcher compiles syllabus recommendations and plans regular check-ins"/>
          <InfoCard Image="images/rs-3.png" Heading="Resources" Text="Researcher prepares an initial set of resource for the syllabus and continues communication as needed."/>
        </div>
      </div>
      <div className="section">
        <div className="section-content">
          <div className="section-text">
            <h3 className="heading-3">Sign Up for Research Service Today</h3>
            <p className='body-large'>Improve your syllabus for more equity and inclusivity. Fill out our intake form and a researcher will be assigned to you.</p>
            <button className="primary-bttn">Sign Up For Research Service</button>
          </div>
          <div className="section-img">
            <img src="/images/rs-illustration.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResearchService