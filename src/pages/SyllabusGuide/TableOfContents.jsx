import React from "react"
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

function TableOfContents() {

  return (
    <div className="toc">
      <ul>
        <li>
            <a className="section-title">🗣 Propose A Change</a>
        </li>
      </ul>
      <ul>
        <li>
          <HashLink className="section-title" to="/syllabus-guide/#5-principles-for-inclusive-teaching">
            💡 5 Principles for Inclusive Teaching
          </HashLink>
        </li>
        <li>
          <HashLink to="/syllabus-guide/#principle-1---establish-and-support-a-class-climate-that-fosters-belonging-for-all-students">
            Principle 1: Sense of Belonging
          </HashLink>
        </li>
        <li>
          <HashLink to="/syllabus-guide/#principle-2---set-explicit-student-expectations">
            Principle 2: Expectations
          </HashLink>
        </li>
        <li>
          <HashLink to="/syllabus-guide/#principle-3---select-course-content-that-recognizes-diversity-and-acknowledges-barriers-to-inclusion">
            Principle 3: Diversity
          </HashLink>
        </li>
        <li>
          <HashLink to="/syllabus-guide/#principle-4---design-all-course-elements-for-accessibility">
            Principle 4: Accessibility
          </HashLink>
        </li>
        <li>
          <HashLink to="/syllabus-guide#principle-5---reflect-on-ones-beliefs-about-teaching-to-maximize-self-awareness-and-commitment-to-inclusion/">
            Principle 5: Reflection
          </HashLink>
        </li>
      </ul>
      <ul>
        <li>
          <HashLink className="section-title" to="/syllabus-guide/#sample-statements">
            📝 Sample Statements
          </HashLink>
        </li>
        <li>
          <HashLink to="/syllabus-guide/#diverse-perspectives-and-learning-modes">
            Diverse Perspectives & Learning Modes
          </HashLink>
        </li>
        <li>
          <HashLink to="/syllabus-guide/#participation">
            Participation
          </HashLink>
        </li>
        <li>
          <HashLink to="/syllabus-guide/#open-office-hours">
            Open Office Hours
          </HashLink>
        </li>
        <li>
          <HashLink to="/syllabus-guide/#extensions">
            Extensions
          </HashLink>
        </li>
        <li>
          <HashLink to="/syllabus-guide/#communication">
            Communication
          </HashLink>
        </li>
        <li>
          <HashLink to="/syllabus-guide/#incompletes">
            Incompletes
          </HashLink>
        </li>
        <li>
          <HashLink to="/syllabus-guide/#attendance">
            Attendance
          </HashLink>
        </li>
      </ul>
      <ul>
        <li>
          <HashLink className="section-title" to="/syllabus-guide/#required-syllabus-statements">
            📝 Required Statements
          </HashLink>
        </li>
        <li>
          <HashLink to="/syllabus-guide/#statement-of-academic-integrity">
            Statement Of Academic Integrity
          </HashLink>
        </li>
        <li>
          <HashLink to="/syllabus-guide/#statement-on-accessibility">
            Statement On Accessibility
          </HashLink>
        </li>
        <li>
          <HashLink to="/syllabus-guide/#statement-on-counseling-and-wellness">
            Statement On Counseling and Wellness
          </HashLink>
        </li>
        <li>
          <HashLink to="/syllabus-guide/#statement-on-use-of-electronic-devices">
            Statement On Use Of Electronic Devices
          </HashLink>
        </li>
        <li>
          <HashLink to="/syllabus-guide/#statement-on-title-ix">
            Statement On Title IX
          </HashLink>
        </li>
        <li>
          <HashLink to="/syllabus-guide/#statement-of-principle">
            Statement Of Principle
          </HashLink>
        </li>
      </ul>
    </div>
  )
}

export default TableOfContents