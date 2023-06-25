import React from 'react'
import { useState } from 'react'

function CheckList({labels, checkedList, setCheckedList}) {


    function handleChange(event){
        const {value, checked} = event.target

        if (checked){
            setCheckedList(checkedList => [...checkedList, value])
        }
        else{
            setCheckedList(checkedList.filter((item) => item!=value))
        }

        check(checkedList)
    }

    function check(checked){
        console.log(checked)
    }
    return (
    <div className='check-list'>
        {labels.map((item, index) => {
            return(
                <div className="check-item">
                    <label key={index}> {item}
                    <input type="checkbox" value={item} onChange={handleChange}/> 
                    </label>
                </div>
            )
        })}
    </div>
  )
}

export default CheckList