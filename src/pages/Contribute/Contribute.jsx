import React from 'react'
import { useEffect } from 'react';

function Contribute() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div className='top-margin'>
      <div className='section'>
        <div className="section-content">
          <div className="section-text">
            <h3 className="heading-3">Join the effort to build an equitable classroom</h3>
            <p className='body-large'>Recommend resources to our database by filling out our resource recommendation form. Your contributions will assist ITP/IMA faculties in creating a more equitable syllabus!</p>
          <a href="https://forms.gle/N4XM29AnpRHr1my8A"><button className="primary-bttn">Resource Recommendation Form</button></a>
          </div>
          <div className="section-img">
            <img src="/images/contribute.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contribute