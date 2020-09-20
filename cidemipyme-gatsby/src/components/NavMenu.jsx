import React from 'react';
import PropTypes from 'prop-types';
import Scrollspy from 'react-scrollspy';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Collapse
} from 'reactstrap';

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }

  createItem(item) {
    return (
      <NavItem key={item.name}>
        <NavLink href={`#${item.url}`} className="menu-link js-scroll-trigger"
          onClick={this.toggleNavbar.bind(this)}>
          {item.name}
        </NavLink>
      </NavItem>
    );
  }

  toggleNavbar() {
    if (window.innerWidth >= 992) {
      return;
    }

    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  onOptionSelected() {
    this.setState({});
  }

  render() {
    let navItems = this.props.items.map(item => this.createItem(item, false));
    let itemNames = this.props.items.map(item => item.url);

    return (

        <Navbar fixed="top" color="white" className="navbar-expand-lg card-box">
          <NavbarBrand href="#" className="mr-auto js-scroll-trigger">{this.props.logo}</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar.bind(this)} className="mr2">
            <i className="ion-navicon"></i>
          </NavbarToggler>
          <Collapse isOpen={this.state.collapsed} navbar>
            <Scrollspy
              className="ml-auto navbar-nav"
              componentTag="Nav"
              offset={-50}
              items={itemNames}
              currentClassName="active">
                {navItems}
            </Scrollspy>
          </Collapse>
        </Navbar>
    );
  }
}

NavMenu.propTypes = {
  items: PropTypes.array.isRequired,
  logo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}
export default NavMenu;
