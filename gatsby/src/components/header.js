import { Link } from 'gatsby';
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
          <NavbarBrand href="/">jay giang</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="nav__item">
                <NavLink href="#about-me">ABOUT ME</NavLink>
              </NavItem>
              <NavItem className="nav__item">
                <NavLink href="https://github.com/reactstrap/reactstrap">EXPERIENCE</NavLink>
              </NavItem>
              <NavItem className="nav__item">
                <NavLink href="https://github.com/reactstrap/reactstrap">PROJECTS</NavLink>
              </NavItem>
              <NavItem className="nav__item">
                <NavLink href="https://github.com/reactstrap/reactstrap">CONTACT</NavLink>
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
