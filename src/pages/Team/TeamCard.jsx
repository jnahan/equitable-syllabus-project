import React from 'react'

function TeamCard({Image, Name, Role, Email}) {
  return (
    <div className='team-card'>
      <div className="team-card-img">
        {Image === "" ? "" : <img src={Image} alt={Name} />}
      </div>
      <h4 className='heading-4'>{Name}</h4>
      <p>{Role}</p>
      <a href={`mailto:${Email}`}>{Email}</a>
    </div>
  )
}

export default TeamCard