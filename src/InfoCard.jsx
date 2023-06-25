import React from "react"

function InfoCard({image, heading, text}) {
  return (
    <div className="info-card">
        <div>
          <img className="info-card__image" src={image} alt={heading} />
        </div>
        <h2 className="heading-4">{heading}</h2>
        <p className="body-default">{text}</p>
    </div>
  )
}

export default InfoCard