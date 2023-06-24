import React from 'react'
import { useNavigate } from "react-router-dom";

function DBFilter() {

  const navigate = useNavigate();

  return (
    <div>
        <button onClick={() => navigate("/contribute")}className='primary-bttn'>Suggest Resources</button>
        
    </div>
  )
}

export default DBFilter