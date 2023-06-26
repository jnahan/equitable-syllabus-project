import React from "react"
import InfoCard from "../../InfoCard"
import { useEffect } from "react"

function SyllabusWorkshop() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });
  
  return (
    <div className="section--top">
        <div className="section section--center">
        <h3 className="heading-3">Syllabus Review Workshop</h3>
        <p className="body-large">Our syllabus review workshop provides faculty a 90-minute structured session to work on concrete syllabi, applying an equity lens. Each participant brings one syllabus to work on.</p>
        <div className="info-card-wrapper">
          <InfoCard image="images/sr-1.png" heading="Reflection" text="Use the Cue Syllabus Review Tool to label each section of your syllabus."/>
          <InfoCard image="images/sr-2.png" heading="Discussion" text="Discuss strategies to implement Inclusive Teaching principles."/>
          <InfoCard image="images/sr-3.png" heading="Syllabus Swap" text="Swap syllabi with a partner and provide suggestions to each other."/>
        </div>
      </div>
    </div>
  )
}

export default SyllabusWorkshop