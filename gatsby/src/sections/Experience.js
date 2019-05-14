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

    console.log('experienceData', experienceData);
    return (
      <div className="experience__container">
        <h1 className="experience__section-title">Experience</h1>
        <div className="experience-list__container">
          <div className="experience-list">
            {experienceData.map(({ node: experience }, index) => {
              return (
                <div  key={index} className="experience__card">
                  <h5 className="experience__title"  onClick={() => this.selectExperience(index)}>
                    { index !== selectedIndex ?
                      <span>{experience.title}</span> :
                      <span style={{color: 'green'}}>{experience.title}</span>
                    }
                  </h5>
                </div>
              );
            })}
          </div>
          <div className="selected-experience">
            <div className="experience__image">
              <Image fluid={selectedExperience.node.image.asset.fluid} />
              <div className="experience__description">{selectedExperience.node.description}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Experience;


// const Experience = ({ experienceData }) => {
//   console.log('experienceData', experienceData);
//   return (
//     <div className="experience-container">
//       <h1 className="experience__main-title">EXPERIENCE</h1>
//       {experienceData.map(({ node: experience }, i) => {
//         return (
//           <div key={i}>
//             <div className="experience__card">
//               <h5 className="experience__title">{experience.title}</h5>
//               <div className="experience__description">{experience.description}</div>
//               <div className="experience__image">
//                 <Image fluid={experience.image.asset.fluid} />
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );