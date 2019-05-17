import React from 'react';
import Image from 'gatsby-image';

import './Experience.css';

const selectedColor = {
  color: 'green'
};

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      selectedColor: 'green'
    };

    this.selectExperience = this.selectExperience.bind(this);
  }

  selectExperience(index) {
    this.setState({
      selectedIndex: index
    });
  }

  render() {
    const { experienceData } = this.props;
    const { selectedIndex, selectedColor } = this.state;
    let selectedExperience = experienceData[selectedIndex];

    return (
      <div name="experience" className="experience__container">
        <div className="section-title">EXPERIENCE</div>
        <div className="experience-list__container">
          <div className="experience-list">
            {experienceData.map(({ node: experience }, index) => {
              return (
                <div  key={index} className="experience__card">
                  <div className="experience__title"  onClick={() => this.selectExperience(index)}>
                    { index !== selectedIndex ?
                      <span>{experience.title}</span> :
                      <span style={{color: 'green'}}>{experience.title}</span>
                    }
                  </div>
                </div>
              );
            })}
          </div>
          <div className="selected-experience">
            <Image fluid={selectedExperience.node.image.asset.fluid} />
            <div className="selected-experience__description">
              <div className="description-title">{selectedExperience.node.title}</div>
              <ul>
                {selectedExperience.node.description.map((detail, index)=> {
                  return (
                    <li key={index} className="description-bullet-points">{detail}</li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Experience;

