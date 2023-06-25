import React from "react"

function TeamCard({image, name, role, email}) {
  return (
    <div className="team-card">
      {image ? <img className="team-card__img" src={image} alt={name} /> : ""}
      <h4 className="heading-4">{name}</h4>
      <p>{role}</p>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  )
}

export default TeamCard