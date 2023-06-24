import React from 'react'

function InfoCard({Image, Heading, Text}) {
  return (
    <div className='info-card'>
        <div className="info-card-img">
            <img src={Image} alt={Heading} />
        </div>
        <h2 className='heading-4'>{Heading}</h2>
        <p className='body-default'>{Text}</p>
    </div>
  )
}

export default InfoCard