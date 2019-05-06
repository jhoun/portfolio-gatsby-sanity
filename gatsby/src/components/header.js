import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './header.css';
const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="nav">
      <a href="#about-me" className="nav__item">
        ABOUT ME
      </a>
      <Link to="/" className="nav__item">
        EXPERIENCE
      </Link>
      <Link to="/" className="nav__item">
        PROJECTS
      </Link>
      <Link to="/" className="nav__item">
        CONTACT
      </Link>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
