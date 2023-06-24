import React from 'react'

function TeamCard({Image, Name, Role, Email}) {
  return (
    <div className='team-card'>
      <div className="team-card-img">
        {Image === "" ? "" : <img src={Image} alt="" />}
      </div>
      <h4 className='heading-4'>{Name}</h4>
      <p>{Role}</p>
      <p>{Email}</p>
    </div>
  )
}

export default TeamCard