import React from 'react';
import Image from 'gatsby-image';

import './Projects.css';

const Projects = ({ projectData }) => {
  return (
    <div className="project-container">
      <h1 className="project__main-title">PROJECTS</h1>
      {projectData.map(({ node: project }, index) => {
        return (
          <div key={index} className="project__card">
            <div className="project__card__wrapper">
              <div className="project__card__wrapper2">
                <h5 className="project__title">{project.title}</h5>
                <div className="project__description">{project.description}</div>
              </div>
            </div>
            <div className="project__image">
              <Image fluid={project.image.asset.fluid} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
