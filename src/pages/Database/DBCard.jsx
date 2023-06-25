import React from 'react'
import FormatIcon from '../../icons/format.svg'
import ContinentIcon from '../../icons/continent.svg'
import CheckList from './CheckList'

import { useState, useEffect } from 'react'

function DBCard({data, loading}) {

  const [info, setInfo] = React.useState(data);
  const aa = ["Europe", "North America"]

  const format = ["Article", "Collection", "Book", "Asset", "Website", "Video", "Audio", "Artwork", "Tool"]
  const continent = ["North America", "Europe", "Africa", "Australia", "Asia"]
  const category = ["Tech & Society", "Design", "Programming & Data", "Media Arts", "Project Development & Research"]
  const [checkedList, setCheckedList] = useState([]);
  const [contList, setContList] = useState([]);

  useEffect(() =>{
    console.log("changed")
    console.log(checkedList)
  }, checkedList)

  console.log(info)
  // data = data.filter((info) => (info.Continent === "Europe"))
  if (checkedList.length != 0){
    data = data.filter((info) => (checkedList.includes(info.Format)))
  }
  if (contList.length != 0){
    data = data.filter((info) => (contList.includes(info.Continent)))
  }
  // data = data.filter((info) => (aa.includes(info.Continent)))

  return (
    <>
      <CheckList labels={format} checkedList={checkedList} setCheckedList={setCheckedList}/>
      <CheckList labels={continent} checkedList={contList} setCheckedList={setContList}/>

      {
        loading ? <h1>Loading...</h1> :
        data.map(((item, index) => {
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