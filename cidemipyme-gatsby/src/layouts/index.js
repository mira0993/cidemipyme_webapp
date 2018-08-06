import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem, NavLink } from 'reactstrap';
import NavMenu from 'components/NavMenu.jsx';
import LogoHeader from 'components/LogoHeader.jsx';

import 'bootstrap/dist/css/bootstrap.css';
import 'fonts/googleapis-font.css';
import 'fonts/ionicons/css/ionicons.min.css';
import 'fonts/business-icons/font/flaticon.css';
import 'fonts/fontawesome/css/font-awesome.min.css';
import 'css/slick.css';
import 'css/slick-theme.css';
import 'css/helpers.css';
import 'css/style.css';
import 'css/cide_style.css';

import logo_120 from 'images/logo_120.png';

const TemplateWrapper = ({ children, data }) => (
  <div>
    <NavMenu logo={<LogoHeader
                    altImage={data['site']['siteMetadata']['title']}
                    imagePath={logo_120} height={'48px'}/>
                  }
              items={data['menusJson']['items']}/>
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
}

export const menuQuery = graphql`
  query queryLayoutData {
    site {
      siteMetadata {
        title
      }
    }
    menusJson(id:{eq:"main_menu"}) {
      id
      items {
        id
        name
        url
      }
    }
  }
`;

export default TemplateWrapper;
