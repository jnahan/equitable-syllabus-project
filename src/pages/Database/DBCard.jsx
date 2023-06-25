import React from 'react'
import FormatIcon from '../../icons/format.svg'
import ContinentIcon from '../../icons/continent.svg'
import CheckList from './CheckList'

import { useState, useEffect } from 'react'

function DBCard({data, loading, formatList, contList, catList}) {

  //address items with multiple categories

  return (
    <>
      {
        loading ? <h1>Loading...</h1> :
        data
        .filter((item) => (formatList.length != 0 ? formatList.includes(item.Format) : true))
        .filter((item) => (contList.length != 0 ? contList.includes(item.Continent) : true))
        .filter((item) => (catList.length != 0 ? catList.includes(item.Category) : true))
        .map(((item, index) => {
          return(
            <a href={item.Link} key={index}>
              <div className="db-card">
                <div className="db-info">
                  <div className="metadata">
                    <p>{item.Category}</p>
                    <span className="dot"></span>
                    <p>{item.Creator}</p>
                  </div>
                  <h4 className='heading-5'>{item.Resource}</h4>
                  <p className='body-default'>Researchers recently learned that Immigration and Customs Enforcement used facial recognition on millions of driver’s license photographs without the license-holders’ knowledge, the latest revelation about governments employing the technology in ways that threaten civil liberties.</p>
                  <div className="metadata chips">
                    {item.Format != "" ?
                      <p><span><img className="icon" src={FormatIcon} alt="" /></span>{item.Format}</p> : ""
                    }
                    {item.Continent != "" ?
                      <p><span><img className="icon" src={ContinentIcon} alt="" /></span>{item.Continent}</p> : ""
                    }
                  </div>
                </div>
                {item.Image === "" ? "" : <img className="db-image" src={item.Image} alt="resource" />}
              </div>
            </a>
          )
        }))
      }
    </>
  )
}

export default DBCard