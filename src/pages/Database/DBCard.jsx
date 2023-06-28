import React from "react"
import FormatIcon from "../../icons/format.svg"
import ContinentIcon from "../../icons/continent.svg"

function DBCard({data, loading, formatList, contList, catList, setResultCount}) {

  return (
    <>
      {
        loading ? 
        <div className="db-card">
          <div className="db-card__info">
            <div className="db-card__metadata metadata--top">
              <div className="skeleton skeleton-small"></div>
            </div>
              <div className="skeleton skeleton-small"></div>
              <div className="skeleton skeleton-small"></div>
            <div className="db-card__metadata">
            </div>
          </div>
          <div className="db-card__image skeleton"></div>
        </div>
        :
        data
        .filter((item) => (formatList.length !== 0 ? formatList.includes(item.Format) : true))
        .filter((item) => (contList.length !== 0 ? contList.includes(item.Continent) : true))
        .filter((item) => (catList.length !== 0 ? catList.includes(item.Category) : true))
        .map(((item, index, arr) => {
          if (index === 0){
            setResultCount(arr.length)
          }
          return(
            <a href={item.Link} key={index}>
              <div className="db-card">
                <div className="db-card__info">
                  <div className="db-card__metadata metadata--top">
                    <p className="db-card__category">{item.Category}</p>
                    <span className="db-card__dot"></span>
                    <p className="db-card__creator">{item.Creator}</p>
                  </div>
                  <h4 className="heading-5 db-card__heading">{item.Resource}</h4>
                  <p className="body-default">Researchers recently learned that Immigration and Customs Enforcement used facial recognition on millions of driver’s license photographs without the license-holders’ knowledge, the latest revelation about governments employing the technology in ways that threaten civil liberties.</p>
                  <div className="db-card__metadata">
                    {item.Format !== "" ?
                      <div className="db-card__chip"><span><img className="icon" src={FormatIcon} alt="format" /></span>{item.Format}</div> : ""
                    }
                    {item.Continent !== "" ?
                      <div className="db-card__chip"><span><img className="icon" src={ContinentIcon} alt="continent" /></span>{item.Continent}</div> : ""
                    }
                  </div>
                </div>
                {item.Image === "" ? "" : <img className="db-card__image" src={item.Image} alt="resource" />}
              </div>
            </a>
          )
        }))
      }
    </>
  )
}

export default DBCard