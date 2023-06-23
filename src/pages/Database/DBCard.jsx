import React from 'react'
import FormatIcon from '../../icons/format.svg'
import ContinentIcon from '../../icons/continent.svg'

function DBCard({data, loading}) {
  return (
    <>
      {
        loading ? <h1>Loading...</h1> :
        data.map((item => {
          return(
            <div className="db-card">
              <div className="db-info">
                <div className="metadata">
                  <p>{item.Category}</p>
                  <span className="dot"></span>
                  <p>{item.Creator}</p>
                </div>
                <h4>{item.Resource}</h4>
                <p>Researchers recently learned that Immigration and Customs Enforcement used facial recognition on millions of driver’s license photographs without the license-holders’ knowledge, the latest revelation about governments employing the technology in ways that threaten civil liberties.</p>
                <div className="metadata chips">
                    <p><span><img className="icon" src={FormatIcon} alt="" /></span>{item.Format}</p>
                    <p><span><img className="icon" src={ContinentIcon} alt="" /></span>{item.Continent}</p>
                </div>
              </div>
              {item.Image == "" ? "" : <img className="db-image" src={item.Image} alt="resource image" />}
            </div>
          )
        }))
      }
    </>
  )
}

export default DBCard