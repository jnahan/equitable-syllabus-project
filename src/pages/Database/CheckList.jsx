import React from 'react'
import { useState } from 'react'
import UpIcon from '../../icons/up.svg'
import DownIcon from '../../icons/down.svg'

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
            setCheckedList(checkedList.filter((item) => item!==value))
        }
    }
    
    return (
    <div className='check-list'>
        <div className="check-list-heading" onClick={toggle}>
            <h5 className='body-default'>{category}</h5>
            <img src={open ? UpIcon : DownIcon} alt="" />
        </div>
        <div className={open ? "check-wrapper" : "hide-list"}>
        {labels.map((item, index) => {
            return(
                <div className="check-item" key={index} onChange={handleChange}>
                    <label > {item}
                    <input className={checkedList.includes(item) ? "checked" : ""}type="checkbox" value={item} /> 
                    </label>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default CheckList