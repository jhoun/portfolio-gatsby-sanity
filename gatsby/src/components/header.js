import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="white" light expand="lg">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="nav__item">
                <Link to="about-me" smooth={true} duration={500} >ABOUT ME</Link>
              </NavItem>
              <NavItem className="nav__item">
                <Link to="experience" smooth={true} duration={500} >EXPERIENCE</Link>
              </NavItem>
              <NavItem className="nav__item">
                <Link to="project" smooth={true} duration={500} >PROJECTS</Link>
              </NavItem>
              <NavItem className="nav__item">
                <Link to="contact" smooth={true} duration={500} >CONTACT</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
