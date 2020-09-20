import React from 'react';
import { useStaticQuery, graphql, withPrefix } from "gatsby"
import PropTypes from 'prop-types';
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

import logo_120 from 'images/logo_cide_2019.png';

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query LayoutQuery {
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
      }`
  );
  return (
    <>
      <NavMenu logo={<LogoHeader
        altImage={data['site']['siteMetadata']['title']}
        imagePath={logo_120} height={'40px'} />
      }
        items={data['menusJson']['items']} />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.array,
}

export default Layout;
