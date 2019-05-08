import React from 'react';
import Image from 'gatsby-image';

import './Experience.css';

const Experience = ({ experienceData }) => {
  console.log('experienceData', experienceData);
  return (
    <div className="experience-container">
      <h1 className="experience__main-title">EXPERIENCE</h1>
      {experienceData.map(({ node: experience }, i) => {
        return (
          <div key={i}>
            <div className="experience__card">
              <h5 className="experience__title">{experience.title}</h5>
              <div className="experience__description">{experience.description}</div>
              <div className="experience__image">
                <Image fluid={experience.image.asset.fluid} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
