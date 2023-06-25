import React from "react"
import { useEffect, useState } from "react"
import Markdown from "markdown-to-jsx"
import TableOfContents from "./TableOfContents";

function SyllabusGuide() {
  const [postContent, setPostContent] = useState("");
  const fileName = "syllabus-guide.syl-guide-content"

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
    <div className="section section--top syl-guide">
      <div>
        <div className="syl-guide__heading-wrapper">
          <h1 className="syl-guide-heading">Syllabus Guide</h1>
          <button className="bttn--primary">Propose A Change</button>
        </div>
        <Markdown className="syl-guide-content">{postContent}</Markdown>
      </div>
      <div>
        <TableOfContents />
      </div>
    </div>
  )
}

export default SyllabusGuide