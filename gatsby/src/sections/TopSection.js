import React from 'react';
import Anime from 'react-anime';
import { Link as LinkForScroll } from 'react-scroll';
import arrowSVG from '../images/down-arrow.svg';

import './TopSection.css';

const splitLetter = word => {
  return word.split('').map((letter, index) => {
    return (
      <span key={index} className="text-wrapper__letter">
        {letter}
      </span>
    );
  });
};

const TopSection = () => {
  return (
    <div className="container">
      <h1 className="text-container">
        <span className="text-wrapper">
          <Anime
            loop={true}
            targets={'.text-container .text-wrapper__letter'}
            translateY={['.9em', 0]}
            translateZ={0}
            duration={2000}
            color={(el, i, t) => {
              const r = 241 + i * 12;
              const g = 113 + i * 12;
              const b = 5;
              const color = `rgb(${r}, ${g}, ${b})`;
              return color;
            }}
            delay={function(el, i) {
              return 100 * i;
            }}
          >
            <span className="text-wrapper__letters">{splitLetter('ALOHA')}</span>
          </Anime>
          <span className="text-wrapper__name">I'M JAY</span>
        </span>
      </h1>
      <LinkForScroll to="about-me" smooth duration={150} offset={-50} className="scroll-down">
        <img src={arrowSVG} className="scroll-down__arrow" />
      </LinkForScroll>
    </div>
  );
};

export default TopSection;
