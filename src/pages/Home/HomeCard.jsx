import React from 'react'

function HomeCard({Icon, Heading, Text}) {
  return (
    <div className='home--card'>
        <img className='home--card-image' src={Icon} alt={`${Heading} icon`} />
        <h4 className="heading-4">{Heading}</h4>
        <p>{Text}</p>
    </div>
  )
}

export default HomeCard