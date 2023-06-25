import React from "react"
import { useEffect, useState } from "react"
import Markdown from "markdown-to-jsx"
import TableOfContents from "./TableOfContents";

function SyllabusGuide() {
  const [postContent, setPostContent] = useState("");
  const fileName = "syllabus-guide.md"

  useEffect(() => {
    window.scrollTo(0, 0)
  });

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
    <div className="section--top">
      <div className="section sg-content">
        <div className="sg-left">
          <div className="sg-heading">
            <h1>Syllabus Guide</h1>
            <button className="primary-bttn">Propose A Change</button>
          </div>
          <Markdown className="md">{postContent}</Markdown>
        </div>
        <div className="sg-right">
          <TableOfContents />
        </div>
      </div>
    </div>
  )
}

export default SyllabusGuide