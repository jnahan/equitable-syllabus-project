import React from 'react'
import TeamCard from './TeamCard'

function Team() {
  return (
    <div className='team'>
      <div className='center team-mission'>
        <h2 className='heading-2'>Equitable Syllabus Project Team</h2>
        <p>The Equitable Syllabus Project team strives to help faculty re-engage their course material with an equitable lens.</p>
        <div className="team-avatars">
          <img src="images/team/blair-avatar.png" alt="" />
          <img src="images/team/chaski-avatar.png" alt="" />
          <img src="images/team/divya-avatar.png" alt="" />
          <img src="images/team/jenna-avatar.png" alt="" />
          <img src="images/team/kayley-avatar.png" alt="" />
          <img src="images/team/sophia-avatar.png" alt="" />
        </div>
      </div>
      <div className='center'>
        <h3 className='heading-3'>Current Members</h3>
        <div className='team-wrapper'>
          <TeamCard Image = "images/team/blair.png" Name = "Blair Simmons" Role = "Project Manager" Email = "blair.simmons@nyu.edu"/>
          <TeamCard Image = "images/team/chaski.png" Name = "Chaski No" Role = "Technical Project Manager" Email = "chaski@nyu.edu"/>
          <TeamCard Image = "images/team/divya.png" Name = "Divya Mehra" Role = "Researcher" Email = "dm4924@nyu.edu"/>
          <TeamCard Image = "images/team/jenna.png" Name = "Jenna Han" Role = "Web Designer" Email = "jennahan@nyu.edu"/>
          <TeamCard Image = "images/team/kayley.png" Name = "Kayley Chery" Role = "Researcher" Email = "kac7748@nyu.edu "/>
          <TeamCard Image = "images/team/sophia.png" Name = "Sophia Edwards" Role = "Researcher" Email = "sge7432@nyu.edu"/>
        </div>
      </div>
      <div className='center'>
        <h3 className='heading-3'>Past Members</h3>
        <div className="team-wrapper">
          <TeamCard Name = "Rashida Kamal" Role = "Technical Project Manager" />
          <TeamCard Name = "Spencer Ratanavanh" Role = "Researcher" />
          <TeamCard Name = "Polina Kolesnikova" Role = "Researcher" />
        </div>
      </div>
    </div>
  )
}

export default Team