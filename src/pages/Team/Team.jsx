import React from "react"
import TeamCard from "./TeamCard"

function Team() {
  return (
    <div className="section--top team">
      <div className="section section--center section--subtitle section--team">
        <h1 className="section__heading section__heading-subtitle">Equitable Syllabus Project Team</h1>
        <p className="body-large">The Equitable Syllabus Project team strives to help faculty re-engage their course material with an equitable lens.</p>
        <div className="team__avatar-wrapper">
          <img className="team__avatar" src="images/team/blair-avatar.png" alt="Blair Simmons" />
          <img className="team__avatar" src="images/team/chaski-avatar.png" alt="Chaski No" />
          <img className="team__avatar" src="images/team/divya-avatar.png" alt="Divya Mehra" />
          <img className="team__avatar" src="images/team/jenna-avatar.png" alt="Jenna Han" />
          <img className="team__avatar" src="images/team/kayley-avatar.png" alt="Kayley Chery" />
          <img className="team__avatar" src="images/team/sophia-avatar.png" alt="Sophia Edwards" />
        </div>
      </div>
      <div className="section">
        <h2 className="section__title text-center">Current Members</h2>
        <div className="team__card-wrapper">
          <TeamCard image = "images/team/blair.png" name = "Blair Simmons" role = "Project Manager" email = "blair.simmons@nyu.edu"/>
          <TeamCard image = "images/team/chaski.png" name = "Chaski No" role = "Technical Project Manager" email = "chaski@nyu.edu"/>
          <TeamCard image = "images/team/divya.png" name = "Divya Mehra" role = "Researcher" email = "dm4924@nyu.edu"/>
          <TeamCard image = "images/team/jenna.png" name = "Jenna Han" role = "Web Designer" email = "jennahan@nyu.edu"/>
          <TeamCard image = "images/team/kayley.png" name = "Kayley Chery" role = "Researcher" email = "kac7748@nyu.edu "/>
          <TeamCard image = "images/team/sophia.png" name = "Sophia Edwards" role = "Researcher" email = "sge7432@nyu.edu"/>
        </div>
      </div>
      <div className="section">
        <h2 className="section__title text-center">Past Members</h2>
        <div className="team__card-wrapper">
          <TeamCard name = "Rashida Kamal" role = "Technical Project Manager" />
          <TeamCard name = "Spencer Ratanavanh" role = "Researcher" />
          <TeamCard name = "Polina Kolesnikova" role = "Researcher" />
        </div>
      </div>
    </div>
  )
}

export default Team