import React from 'react'
import PropTypes from 'prop-types'
import { Nav, NavItem, NavLink } from 'reactstrap'
import Header from 'components/Header'
import NavMenu from 'components/NavMenu.jsx'
import LogoHeader from 'components/LogoHeader.jsx'

import 'bootstrap/dist/css/bootstrap.css'
import 'fonts/googleapis-font.css'
import 'fonts/ionicons/css/ionicons.min.css'
import 'fonts/business-icons/font/flaticon.css'
import 'fonts/fontawesome/css/font-awesome.min.css'
import 'css/slick.css'
import 'css/slick-theme.css'
import 'css/helpers.css'
import 'css/style.css'
import 'css/cide_style.css'

import logo_120 from 'images/logo_120.png'

// const TemplateWrapper = ({ children }) => (
//   <div>
//     <Helmet
//       title="Gatsby Default Starter"
//       meta={[
//         { name: 'description', content: 'Sample' },
//         { name: 'keywords', content: 'sample, something' },
//       ]}
//     />
//     <Header />
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '0px 1.0875rem 1.45rem',
//         paddingTop: 0,
//       }}
//     >
//       {children()}
//     </div>
//   </div>
// )


// <nav className="navbar navbar-expand-lg navbar-dark pb_navbar pb_scrolled-light" id="pb-navbar">
//   <div className="container">
//     <a className="navbar-brand" href="/">Law</a>
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#probootstrap-navbar" aria-controls="probootstrap-navbar" aria-expanded="false" aria-label="Toggle navigation">
//       <span><i className="ion-navicon"></i></span>
//     </button>
//     <div className="collapse navbar-collapse" id="probootstrap-navbar">
//       <ul className="navbar-nav ml-auto">
//         <li className="nav-item"><a className="nav-link" href="#section-home">{}</a></li>
//         <li className="nav-item"><a className="nav-link" href="#section-about">About</a></li>
//         <li className="nav-item"><a className="nav-link" href="#section-why-us">Why</a></li>
//         <li className="nav-item"><a className="nav-link" href="#section-practicing-areas">Practicing Areas</a></li>
//         <li className="nav-item"><a className="nav-link" href="#section-attorneys">Attorneys</a></li>
//         <li className="nav-item"><a className="nav-link" href="#section-testimonials">Testimonials</a></li>
//         <li className="nav-item"><a className="nav-link">Contact</a></li>
//       </ul>
//     </div>
//   </div>
// </nav>

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

// export default({children, data}) => {
//   console.log(data['menusJson']['items']);
//   return <NavMenu items={data['menusJson']['items']}/>;
// }

export default TemplateWrapper;
