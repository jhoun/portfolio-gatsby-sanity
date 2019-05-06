import React from 'react';
import Anime from 'react-anime';

import './TopSection.css';

const splitLetter = word => {
  return word.split('').map((letter, index) => {
    return (
      <span key={index} className="letter">
        {letter}
      </span>
    );
  });
};

const TopSection = () => {
  return (
    <Anime
      loop={true}
      targets={'.ml6 .letter'}
      translateY={['.9em', 0]}
      translateZ={0}
      duration={2000}
      color={(el, i, t) => {
        const r = 243 + i * 12;
        const g = 146 + i * 12;
        const b = 0;
        const color = `rgb(${r}, ${g}, ${b})`;
        return color;
      }}
      delay={function(el, i) {
        return 100 * i;
      }}
    >
      <h1 className="ml6">
        <span className="text-wrapper">
          <span className="letters">{splitLetter('ALOHA')}</span>
          <span className="name">I'M JAY</span>
        </span>
      </h1>
    </Anime>
  );
};

export default TopSection;
