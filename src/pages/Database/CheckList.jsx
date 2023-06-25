import React from 'react'
import { useState } from 'react'

function CheckList({category, labels, checkedList, setCheckedList}) {

    const [open, setOpen] = useState(true);

    const toggle = () => {
      if (open){
        return setOpen(false);
      }
      setOpen(true)
    }
  
    function handleChange(event){
        const {value, checked} = event.target

        if (checked){
            setCheckedList(checkedList => [...checkedList, value])
        }
        else{
            setCheckedList(checkedList.filter((item) => item!=value))
        }
    }
    
    return (
    <div className='check-list'>
        <div className="check-list-heading" onClick={toggle}>
            <h5 className='body-default'>{category}</h5>
            <p>+</p>
        </div>
        <div className={open ? "" : "hide-list"}>
        {labels.map((item, index) => {
            return(
                <div className="check-item" key={index}>
                    <label> {item}
                    <input type="checkbox" value={item} onChange={handleChange}/> 
                    </label>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default CheckList