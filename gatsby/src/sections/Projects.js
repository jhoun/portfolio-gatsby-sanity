import React from 'react';
import Image from 'gatsby-image';

import './Projects.css';

const Projects = ({ projectData }) => {
  return (
    <div className="project-container">
      <h1 className="project__main-title">EXPERIENCE</h1>
      {projectData.map(({ node: project }, i) => {
        return (
          <div key={i}>
            <div className="project__card">
              <h5 className="project__title">{project.title}</h5>
              <div className="project__description">{project.description}</div>
              <div className="project__image">
                <Image fluid={project.image.asset.fluid} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
