import React from "react";

export default function Projects() {
  return (
    <section id="projects">
      <h3>Projects</h3>

      <div class="projects-grid">
        <nav id="projectsbar">
          <a
            href="https://gifted-tereshkova-4aa25e.netlify.app/"
            class="project-tile"
            target="_blank"
          >
            <button>Weather App (Vanilla JS)</button>
          </a>

          <a
            href="https://ecstatic-leakey-e874b0.netlify.app/"
            class="project-tile"
            target="_blank"
          >
            <button>Tarot Card Drawer</button>
          </a>

          <a
            href="https://github.com/SamJamWillingham"
            class="project-tile"
            target="_blank"
            id="profile-link"
          >
            <button>GitHub</button>
          </a>
        </nav>
      </div>
    </section>
  );
}
