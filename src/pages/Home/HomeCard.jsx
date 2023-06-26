import React from "react"

function HomeCard({icon, heading, text}) {
  return (
    <div className="home-card">
        <img className="home-card__icon" src={icon} alt={`${heading} icon`} />
        <h4 className="heading-4">{heading}</h4>
        <p className="home-card__text">{text}</p>
    </div>
  )
}

export default HomeCard