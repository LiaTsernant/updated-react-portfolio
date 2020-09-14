import React from "react";
import "./Welcome.css";

export default function Welcome() {
  return (
    <div id="welcome-section" className="flexbox-container">
      <img
        src="https://lh3.googleusercontent.com/pw/ACtC-3fZYATs1PvtEXnoJcwO-th2ldfb2s4bSLqUX-O8wXK-DVDc-xiy6x9mLd9qV1zwbe9lC5akeJxmtJfL0M8Np6D5VolbnFsu5qFCRbxan1eKAU4VAupjdmTQz8V19Gu4IgXexcXbL2zuJthpTjxC3kiG=w502-h669-no?authuser=0"
        alt="Sam"
        className="profile flexbox-item flexbox-item-1"
      />
      <div className="profile flexbox-item flexbox-item-2">
        <h1>Sam Willingham</h1>
        <h3>Front End Web Developer</h3>

        <a
          href="https://www.linkedin.com/in/samantha-willingham-79576a1a8/"
          target="_blank"
        >
          <button>LinkedIn</button>
        </a>

        <a href="https://github.com/SamJamWillingham" target="_blank">
          <button>GitHub</button>
        </a>

        <a
          href="https://www.shecodes.io/students/174-sam-fields"
          target="_blank"
        >
          <button>SheCodes</button>
        </a>
        <a href="https://www.freecodecamp.org/samjamwillingham">
          <button>freeCodeCamp</button>
        </a>
      </div>
    </div>
  );
}
