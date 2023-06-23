import React from 'react'
import HomeCard from './HomeCard'
import EquityIcon from '../../icons/equity.svg'
import InclusivityIcon from '../../icons/inclusivity.svg'
import EmpowermentIcon from '../../icons/empowerment.svg'
import GrowthIcon from '../../icons/growth.svg'
import PinkQuoteIcon from '../../icons/quotePink.svg'
import Accordion from './Accordion'

function Home() {
  return (
    <>
    <div className="hero">
      <div className="hero--chip">
        <p><span className='dot-large'></span>Built for ITP/IMA professors</p>
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
        <HomeCard Icon={EquityIcon} Heading="Equity" Text="Level the playing field for student success"/>
        <HomeCard Icon={InclusivityIcon} Heading="Inclusivity" Text="Create an inclusive learning environment"/>
        <HomeCard Icon={EmpowermentIcon} Heading="Empowerment" Text="Empower students’ learning experience"/>
        <HomeCard Icon={GrowthIcon} Heading="Growth" Text="Help students and faculty learn and grow together"/>
      </div>
    </div>
    <div className="section">
      <h2 className="heading-2">Syllabus Resources</h2>
      <div className="section-content">
        <div className="section-img">
          <img src="" alt="" />
        </div>
        <h3 className="heading-3">Syllabus Guide</h3>
        <p>A template and reference to help you develop your course syllabus. The syllabus guide fosters critical pedagogy by identifying structural and rhetorical shortcomings in the syllabus.</p>
        <button className="primary-bttn">View Syllabus Guide</button>
      </div>
    </div>
    <div className="section">
      <h2 className="heading-2">Syllabus Improvement Services</h2>
    </div>
    <div className="section">
      <h2 className="heading-2">What ITP/IMA Professors Say</h2>
      <div className="testimonial-wrapper">
        <div className="testimonials">
          <img src={PinkQuoteIcon} alt="" />
          <p>“Working with Divya was a great experience - the syllabus for the class was one which had undergone many iterations over the years, with several faculty adding to it, so it was nice to have the opportunity to review it with fresh eyes, and especially through the lens of equity and inclusion. I came away with a few new references to add to the course materials, and overall appreciated talking through the underlying assumptions of the course.”</p>
          <div className="testimonial-client">
            <p>Sarah Rothberg</p>
            <p>Assistant Arts Professor</p>
          </div>
        </div>
      </div>
    </div>
    <div className="section">
      <h2 className="heading-2">Questions & Answers</h2>
      <Accordion />
    </div>
    </>
  )
}

export default Home         