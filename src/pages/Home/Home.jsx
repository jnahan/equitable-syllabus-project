import React from 'react'
import HomeCard from './HomeCard'
import EquityIcon from '../../icons/equity.svg'
import InclusivityIcon from '../../icons/inclusivity.svg'
import EmpowermentIcon from '../../icons/empowerment.svg'
import GrowthIcon from '../../icons/growth.svg'
import QuotePink from '../../icons/quotePink.svg'
import QuoteYellow from '../../icons/quoteYellow.svg'
import Accordion from './Accordion'
import SparkleLarge from '../../icons/sparkle-large.svg'
import SparkleSmall from '../../icons/sparkle-small.svg'

function Home() {
  return (
    <>
    <div className="hero-wrapper">
      <div className="hero">
        <div className="hero--chip">
          <p className='body-default'><span className='dot-large'></span>Built for ITP/IMA professors</p>
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
      <div className="see-more-block">
          <p id='see-more'>See more</p>
      </div>
      <div className="hero--imgs">
        <img src="images/home/hero-research-service.png" alt="research service" />
        <img src="images/home/hero-syllabus-guide.png" alt="syllabus guide" />
        <img src="images/home/hero-database.png" alt="research database feed" />
        <img src="images/home/hero-filter.png" alt="research database filter" />
        <img src={SparkleLarge} alt="large sparkle" />
        <img src={SparkleSmall} alt="small sparkle" />
        <img src={SparkleSmall} alt="small sparkle" />
      </div>
    </div>
    <div className="section subtitle-section">
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
        <div className="section-img sg-wrapper">
          <img src="/images/home/syllabus-guide.png" alt="" />
        </div>
        <div className="section-text">
          <h3 className="heading-3">Syllabus Guide</h3>
          <p className='body-large'>A template and reference to help you develop your course syllabus. The syllabus guide fosters critical pedagogy by identifying structural and rhetorical shortcomings in the syllabus.</p>
          <button className="primary-bttn">View Syllabus Guide</button>
        </div>
      </div>
      <div className="section-content">
        <div className="section-text">
          <h3 className="heading-3">Research Database</h3>
          <p className='body-large'>Our database of equity-centered resources helps you incorporate diverse voices into your syllabus. We compiled resources from Black, Brown, and Indigenous people, as well as other historically underrepresented groups.</p>
          <button className="primary-bttn">View Syllabus Guide</button>
        </div>
        <div className="section-img db-wrapper">
          <img src="/images/home/database.png" alt="" />
        </div>
      </div>
    </div>
    <div className="section">
      <h2 className="heading-2">Syllabus Improvement Services</h2>
      <div className="section-content">
        <div className="section-img rs-wrapper">
          <img src="/images/home/research-service.png" alt="" />
        </div>
        <div className="section-text">
          <h3 className="heading-3">Research Assistance Service</h3>
          <p className='body-large'>Get help creating your syllabus. The Equitable Syllabus Team will recommend resources and identity ways to bridge equity gaps in the course material.</p>
          <button className="primary-bttn">Get Research Service</button>
        </div>
      </div>
      <div className="section-content">
        <div className="section-text">
          <h3 className="heading-3">Syllabus Review Workshop</h3>
          <p className='body-large'>Join our collaborative workshop sessions and rework your syllabus to promote equity-aligned practice and curricula</p>
          <button className="primary-bttn">Learn About Our Workshop</button>
        </div>
        <div className="section-img">
          <img src="/images/home/syllabus-workshop.png" alt="" />
        </div>
      </div>
    </div>
    <div className="section testimonial-section">
      <h2 className="heading-2">What ITP/IMA Professors Say</h2>
      <div className="testimonial-wrapper">
        <div className="testimonial">
          <img src={QuotePink} alt="" />
          <p className='body-large'>“Working with Divya was a great experience - the syllabus for the class was one which had undergone many iterations over the years, with several faculty adding to it, so it was nice to have the opportunity to review it with fresh eyes, and especially through the lens of equity and inclusion. I came away with a few new references to add to the course materials, and overall appreciated talking through the underlying assumptions of the course.”</p>
          <div className="testimonial-client">
            <p className='body-large semibold'>Sarah Rothberg</p>
            <p className='body-default'>Assistant Arts Professor</p>
          </div>
        </div>
        <div className="testimonial">
          <img src={QuoteYellow} alt="" />
          <p className='body-large'>“Designing a syllabus can be a lonely process. However, it can be different with ESP! I worked with a student researcher to find more example projects and readings by underrepresented groups to include in my syllabus. On top of practical help from the student researcher, it was a good opportunity for me to be more intentional and conscious about including diverse voices and role models in my course. More than others, I felt supported throughout the process!”</p>
          <div className="testimonial-client">
            <p className='body-large semibold'>Yeseul Song</p>
            <p className='body-default'>Assistant Arts Professor</p>
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