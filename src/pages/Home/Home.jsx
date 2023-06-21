import React from 'react'

function Home() {
  return (
    <div>
        <div className="home-hero center">
            <h1>Making Education More Inclusive</h1>
            <p>Equitable Syllabus Project provides free tools and frameworks to help professors create an equity-aligned syllabus</p>
            <div className="home-buttons">
              <button className='primary-bttn'>Syllabus Guide</button>
              <button className='secondary-bttn'>Research Database</button>
            </div>
        </div>
        <div className="section">
          <div className="section-text">
            <h3>A Syllabus is Much More Than a Contract Between Teachers and Students</h3>
            <p>When a syllabus sets a standard of a collaborative and inclusive learning environments, students have more control over their learning experience. As a result, learning is encouraged as a mutual exchange process in which students and faculty grow and learn from one another.</p>
          </div>
          <div className="section-image">
            <img src="images/syllabus.png" alt="" />
          </div>
        </div>
        <div className="section">
          <h2>Syllabus Resources</h2>
        </div>
    </div>
  )
}

export default Home