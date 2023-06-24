import React from 'react'
import { useState } from 'react'

function Accordion() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => {
    if (open === i){
      return setOpen(null);
    }
    setOpen(i)
  }

  return (
    <div className='accordion'>
      {accordionData.map((item, i) => (
          <div className="accordion-item" key={i}>
            <div className="accordion-question" onClick={() => toggle(i)}>
              <h4>{item.question}</h4>
              <span>{open === i ? "-" : "+"}</span>
            </div>
            <div className={open === i ? "accordion-answer" : "accordion-hidden"}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

const accordionData = [
  {
    question: "How can this service help me?",
    answer: "lorem ipsum dolor"
  },
  {
    question: "How can t",
    answer: "lorem ipsum dolor"
  },
  {
    question: "How can this service help me?",
    answer: "lorem ipsum dolor"
  },
  {
    question: "How can this service help me?",
    answer: "lorem ipsum dolor"
  },
  {
    question: "How can this service help me?",
    answer: "lorem ipsum dolor"
  }
]
export default Accordion