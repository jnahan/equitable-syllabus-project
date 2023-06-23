import React from 'react'
import HomeCard from './HomeCard'

function Home() {
  return (
    <>
    <div className="hero">
      <div className="hero--chip">
        <div className='circle'></div>
        <p>Built for ITP/IMA professors</p>
      </div>
      <h1 className="heading-1">Making Education More Inclusive</h1>
      <p className='subtitle'>Free tools and frameworks to help you create an equity-aligned syllabus</p>
      <div className="hero--bttn-wrapper">
        <button className="bttn-primary">Syllabus Guide</button>
        <button className="bttn-secondary">Research Database</button>
      </div>
      <div className="handwritten-text">
        <p>Research Service</p>
        <p>Syllabus Guide</p>
        <p>Research Database</p>
      </div>
    </div>
    <div className="section">
      <h2 className="heading-2">A Syllabus is Much More Than A Contract Between Students and Teachers</h2>
      <p className="subtitle">An effective syllabus can foster...</p>
      <div className="home--card-wrapper">   
        <HomeCard Icon="" Heading="Equity" Text="Level the playing field for student success"/>
        <HomeCard Icon="" Heading="Inclusivity" Text="Create an inclusive learning environment"/>
        <HomeCard Icon="" Heading="Empowerment" Text="Empower students’ learning experience"/>
        <HomeCard Icon="" Heading="Growth" Text="Help students and faculty learn and grow together"/>
      </div>
    </div>
    </>
  )
}

export default Home         