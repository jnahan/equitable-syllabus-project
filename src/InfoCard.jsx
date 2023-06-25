import React from "react"

function InfoCard({image, heading, text}) {
  return (
    <div className="info-card">
        <div className="info-card-img">
            <img src={image} alt={heading} />
        </div>
        <h2 className="heading-4">{heading}</h2>
        <p className="body-default">{text}</p>
    </div>
  )
}

export default InfoCard