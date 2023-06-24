import React from 'react'
import { useEffect, useState } from "react"
import Markdown from 'markdown-to-jsx'
import TableOfContents from './TableOfContents';

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
    <div className='top-margin'>
      <div className='section sg-content'>
        <div className="sg-left">
          <div className="headline">
            <h1>5 Principles</h1>
            <button className="primary-bttn">Propose A Change</button>
          </div>
          <Markdown className='md'>{postContent}</Markdown>
        </div>
        <div className="sg-right">
          <TableOfContents />
        </div>
      </div>
    </div>
  )
}

export default SyllabusGuide