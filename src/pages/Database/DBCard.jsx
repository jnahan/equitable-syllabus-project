import React from 'react'

function DBCard({data, loading}) {
  return (
    <>
      {
        loading ? <h1>Loading...</h1> :
        data.map((item => {
          return(
            <div className="db-card">
               <div className="metadata">
                <p>{item.Category}</p>
                <span className="dot"></span>
                <p>{item.Creator}</p>
              </div>
              <h1>{item.Resource}</h1>
              <p>Researchers recently learned that Immigration and Customs Enforcement used facial recognition on millions of driver’s license photographs without the license-holders’ knowledge, the latest revelation about governments employing the technology in ways that threaten civil liberties.</p>
              <div className="metadata chips">
                  <p><span>o</span>{item.Format}</p>
                  <p><span>o</span>{item.Continent}</p>
              </div>
              <img src={item.Image} alt="" />
            </div>
          )
        }))
      }
    </>
  )
}

export default DBCard