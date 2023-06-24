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
    question: "What types of resources will be provided by the research service?",
    answer: "lorem ipsum dolor"
  },
  {
    question: "How will the resources align with my course and curriculum goals?",
    answer: "lorem ipsum dolor"
  },
  {
    question: "What tensions exist in this work?",
    answer: "We recognize that the process of categorization and naming can be harmful, particularly in light of the colonial history of many archival systems. However, it is also important to actively work towards representation and inclusion of marginalized voices in fields such as art and technology. We strive to interrupt erasure of minority voices and reshape existing narratives."
  },
  {
    question: "How do we address the tension in this work?",
    answer: "In creating an archive that brings together historically misrepresented perspectives, each decision we made regarding how to document and organize the identity information of the creators of our resources was considered carefully. Our practice is mutable and grounded in our ongoing discussions. Each decision is subject to change based on these ongoing dialogues about the implications of creating an archive such as this. We kept a running list documenting our choices as the project has taken shape, including which metadata is kept internal, which metadata is public-facing, and how these decisions ensure a robust and wide selection of voices for those who use our tool. "
  }
]
export default Accordion