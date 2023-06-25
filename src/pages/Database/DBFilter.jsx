import React from 'react'
import { useNavigate } from "react-router-dom";
import CheckList from './CheckList'

import FilterIcon from '../../icons/filter.svg'

const format = ["Article", "Collection", "Book", "Asset", "Website", "Video", "Audio", "Artwork", "Tool"]


function DBFilter() {

  const navigate = useNavigate();

  return (
    <div className='filter'>
      <button onClick={() => navigate("/contribute")}className='primary-bttn'>Suggest Resources</button>
      <div className="filter-heading">
        <img src={FilterIcon} alt="" />
        <p className='body-large bold'>Filter Results</p>
      </div>
      <CheckList labels={format}/>
    </div>
  )
}

export default DBFilter