import React from "react"
import { useEffect } from "react";

import ContributeImg from "../../images/contribute.png"

function Contribute() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div className="section--top">
      <div className="section">
        <div className="section__content">
          <div className="section__text">
            <h3 className="section__title">Join the effort to build an equitable classroom</h3>
            <p className="body-large">Recommend resources to our database by filling out our resource recommendation form. Your contributions will assist ITP/IMA faculties in creating a more equitable syllabus!</p>
          <a href="https://forms.gle/N4XM29AnpRHr1my8A"><button className="bttn--primary">Resource Recommendation Form</button></a>
          </div>
          <div className="section__img-wrapper">
            <img className="section__img" src={ContributeImg} alt="contribute" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contribute