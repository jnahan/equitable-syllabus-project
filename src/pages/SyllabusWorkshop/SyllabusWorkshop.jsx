import React from 'react'
import InfoCard from '../../InfoCard'

function SyllabusWorkshop() {
  return (
    <div className='top-margin'>
        <div className="section section-center">
        <h3 className="heading-3">Syllabus Review Workshop</h3>
        <p className='body-large'>Our syllabus review workshop provides faculty a 90-minute structured session to work on concrete syllabi, applying an equity lens. Each participant brings one syllabus to work on.</p>
        <div className="info-card-wrapper">
          <InfoCard Image="images/sr-1.png" Heading="Reflection" Text="Use the Cue Syllabus Review Tool to label each section of your syllabus."/>
          <InfoCard Image="images/sr-2.png" Heading="Discussion" Text="Discuss strategies to implement Inclusive Teaching principles."/>
          <InfoCard Image="images/sr-3.png" Heading="Syllabus Swap" Text="Swap syllabi with a partner and provide suggestions to each other."/>
        </div>
      </div>
    </div>
  )
}

export default SyllabusWorkshop