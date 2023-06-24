import React from 'react'
import { useEffect, useState } from "react"
import Markdown from 'markdown-to-jsx'

function SyllabusGuide() {
  const [postContent, setPostContent] = useState("");
  const fileName = "markdown.md"

  useEffect(() => {
    import(`../../markdown/${fileName}`)
      .then(res => {
        fetch(res.default)
          .then(response => response.text())
          .then(response => setPostContent(response))
          .catch(err => console.log(err))
      })
  }, []);

  return (
    <div className='section'>
      <Markdown className='md'>{postContent}</Markdown>
    </div>
  )
}

export default SyllabusGuide