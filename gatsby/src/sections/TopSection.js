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
      <div className="text-container">
        <span className="text-wrapper">
          <Anime
            loop={false}
            targets={'.text-container .text-wrapper__letter'}
            translateY={['.9em', 0]}
            translateZ={0}
            duration={2000}
            color={(el, i, t) => {
              const r = 196 + i * 12;
              const g = 148 + i * 12;
              const b = 29;
              const color = `rgb(${r}, ${g}, ${b})`;
              return color;
            }}
            delay={function(el, i) {
              return 100 * i;
            }}
          >
            <span className="text-wrapper__letters">{splitLetter('ALOHA!')}</span>
          </Anime>
          <span className="text-wrapper__name">My name is Jay.</span>
        </span>
      </div>
      <LinkForScroll to="about-me" smooth duration={150} offset={-50} className="scroll-down">
        <img src={arrowSVG} className="scroll-down__arrow" />
      </LinkForScroll>
    </div>
  );
};

export default TopSection;
