import React from "react"

function TeamCard({image, name, role, email}) {
  return (
    <div className="team-card">
      <div className="team-card-img">
        {image === "" ? "" : <img src={image} alt={name} />}
      </div>
      <h4 className="heading-4">{name}</h4>
      <p>{role}</p>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  )
}

export default TeamCard