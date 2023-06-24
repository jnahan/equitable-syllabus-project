import React from 'react'
import { useEffect } from 'react';

function Contribute() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div className='top-margin a'>
      <div className="section section-column">
        <div>
          <h3 className="heading-3">Join the effort to build an equitable classroom</h3>
          <p className='body-large'>Recommend resources to our database by filling out our resource recommendation form. Your contributions will assist ITP/IMA faculties in creating a more equitable syllabus!</p>
        </div>
      </div>
      <div className="section-column section">
      <img src="/images/contribute.png" alt="" />

      </div>
    </div>
  )
}

export default Contribute