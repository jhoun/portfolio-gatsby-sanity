import React from 'react';
import Image from 'gatsby-image';

import './Projects.css';

const Projects = ({ projectData }) => {
  return (
    <div className="project-container">
      <div className="section-title">PROJECTS</div>
      {projectData.map(({ node: project }, index) => {
        return (
          <div key={index} className="project__card">
            <div className="project__card__wrapper">
                <div className="project__title">{project.title}</div>
                <div className="project__description">{project.description}</div>
            </div>
              <Image fluid={project.image.asset.fluid} />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
