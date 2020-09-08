import React from 'react';
import PropTypes from 'prop-types';
import CompanySearchBar from 'companies/CompanySearchBar.jsx';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Collapse,
  Button,
} from 'reactstrap';

class CompaniesLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }

  toggleNavbar() {
    if (window.innerWidth >= 992) {
      return;
    }

    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar fixed="top" color="white" className="navbar-expand-lg card-box">
          <NavbarBrand href={this.props.pathname} className="mr-auto">
            {this.props.logo}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar.bind(this)} className="mr2">
            <i className="ion-navicon"/>
          </NavbarToggler>
          <Collapse isOpen={this.state.collapsed} navbar>
            <NavItem className="company-search-bar">
              <CompanySearchBar/>
            </NavItem>
            <NavItem className="company-new-item-btn">
              <Button color="primary">New</Button>
            </NavItem>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

CompaniesLayout.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  path: PropTypes.string,
}

export default CompaniesLayout;
