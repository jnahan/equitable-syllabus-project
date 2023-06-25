import React from "react"

function HomeCard({icon, heading, text}) {
  return (
    <div className="home--card">
        <img className="home--card-image" src={icon} alt={`${heading} icon`} />
        <h4 className="heading-4">{heading}</h4>
        <p>{text}</p>
    </div>
  )
}

export default HomeCard