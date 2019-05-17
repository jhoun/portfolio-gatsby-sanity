import React from 'react';
import Image from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './AboutMe.css';

const AboutMe = ({ aboutData }) => {
  const { node: about } = aboutData[0];
  return (
    <div name="about-me" className="aboutme-container">
      <div className="section-title">{about.name.toUpperCase()}</div>
      <div className="aboutme__subcontainer">
        <div className="aboutme__wrapper">
          <div className="image__container">
            <Image fluid={about.image.asset.fluid} />
          </div>
          <div className="description__container">{about.description}</div>
        </div>
        <div className="card__container">
          <div className="card__body">
            <div className="card__title">FRONTEND</div>
            <div className="skills__card">
              <ul className="skills__container">
                <li className="skill__items">
                  <div className="skill__name">Javascript</div>
                  <div className="star__container">
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                  </div>
                </li>
                <li className="skill__items">
                  <div className="skill__name">HTML/CSS</div>
                  <div className="star__container">
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                  </div>
                </li>
                <li className="skill__items">
                  <div className="skill__name">React/Redux</div>
                  <div className="star__container">
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star-translucent">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                  </div>
                </li>
                <li className="skill__items">
                  <div className="skill__name">SASS</div>
                  <div className="star__container">
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star-translucent">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                  </div>
                </li>
                <li className="skill__items">
                  <div className="skill__name">Mocha/Chai</div>
                  <div className="star__container">
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star-translucent">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                  </div>
                </li>
                <li className="skill__items">
                  <div className="skill__name">Angular</div>
                  <div className="star__container">
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star-translucent">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star-translucent">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="card__body">
            <div className="card__title">BACKEND</div>
            <div className="skills__card">
              <ul className="skills__container">
                <li className="skill__items">
                  <div className="skill__name">Node.js</div>
                  <div className="star__container">
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                  </div>
                </li>
                <li className="skill__items">
                  <div className="skill__name">SQL</div>
                  <div className="star__container">
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star-translucent">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                  </div>
                </li>
                <li className="skill__items">
                  <div className="skill__name">PostgreSQL</div>
                  <div className="star__container">
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star-translucent">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                  </div>
                </li>
                <li className="skill__items">
                  <div className="skill__name">AWS</div>
                  <div className="star__container">
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star-translucent">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                  </div>
                </li>
                <li className="skill__items">
                  <div className="skill__name">Docker</div>
                  <div className="star__container">
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star-translucent">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star-translucent">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                  </div>
                </li>
                <li className="skill__items">
                  <div className="skill__name">GraphQL</div>
                  <div className="star__container">
                    <span className="star">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star-translucent">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                    <span className="star-translucent">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="card__body">
            <div className="card__title">CURRENTLY LEARNING</div>
            <div className="skills__card">
              <ul className="skills__container">
                <li className="learn__items">
                  <div className="chalkboard__container">
                    <span className="chalkboard">
                      <FontAwesomeIcon icon={['fas', 'chalkboard']} />
                    </span>
                  </div>
                  <div className="skill__name">GraphQL</div>
                </li>
                <li className="learn__items">
                  <div className="chalkboard__container">
                    <span className="chalkboard">
                      <FontAwesomeIcon icon={['fas', 'chalkboard']} />
                    </span>
                  </div>
                  <div className="skill__name">Gatsby</div>
                </li>
              </ul>
            </div>
            <div className="card__title">ON THE RADAR</div>
            <div className="skills__card">
              <ul className="skills__container">
                <li className="learn__items">
                  <div className="chalkboard__container">
                    <span className="chalkboard">
                      <FontAwesomeIcon icon={['fas', 'chalkboard']} />
                    </span>
                  </div>
                  <div className="skill__name">Java</div>
                </li>
                <li className="learn__items">
                  <div className="chalkboard__container">
                    <span className="chalkboard">
                      <FontAwesomeIcon icon={['fas', 'chalkboard']} />
                    </span>
                  </div>
                  <div className="skill__name">Material UI</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
