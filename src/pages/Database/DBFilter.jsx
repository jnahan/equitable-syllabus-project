import React from 'react'
import { useNavigate } from "react-router-dom";
import CheckList from './CheckList'

import FilterIcon from '../../icons/filter.svg'

function DBFilter({formatList, setFormatList, contList, setContList, catList, setCatList}) {

  //filter categories
  const format = ["Article", "Collection", "Book", "Asset", "Website", "Video", "Audio", "Artwork", "Tool"]
  const continent = ["North America", "Europe", "Africa", "Australia", "Asia"]
  const category = ["Tech & Society", "Design", "Programming & Data", "Media Arts", "Project Development & Research"]

  const navigate = useNavigate();

  function resetChecked(){
    setFormatList([]);
    setContList([]);
    setCatList([]);
  } 

  return (
    <div className='filter'>
      <button onClick={() => navigate("/contribute")}className='primary-bttn'>Suggest Resources</button>
      <div className="filter-title">
        <div className="filter-heading">
          <img src={FilterIcon} alt="filter" />
          <p className='body-large bold'>Filter Results</p>
        </div>
        <div className="clear-wrapper" onClick={resetChecked}>
          <p>Clear</p>
        </div>
      </div>
      <div className="checked-list-wrapper">
        <CheckList category="Format" labels={format} checkedList={formatList} setCheckedList={setFormatList}/>
        <CheckList category="Continent"labels={continent} checkedList={contList} setCheckedList={setContList}/>
        <CheckList category="Continent"labels={category} checkedList={catList} setCheckedList={setCatList}/>

      </div>
    </div>
  )
}

export default DBFilter