import React from 'react'
import Link from 'gatsby-link'
import AboutSection from '../components/sections/AboutSection.jsx'
import WorkSection from '../components/sections/WorkSection.jsx'

export default ({data}) => {
  return (
    <div>
      <section
        className="pb_cover_v1 text-left cover-bg-black cover-bg-opacity-4 home-section"
        id="section-home">
        <div className="container">
          <div className="row align-items-center justify-content-end">
            <div className="col-md-6  order-md-1">
              <h2 className="heading mb-3">{data['site']['siteMetadata']['title']}</h2>
              <div className="sub-heading"><p className="mb-5">A free template solely for your Law Firm</p>
                <p><a href="#section-contact" role="button" className="btn smoothscroll pb_outline-light btn-xl pb_font-13 p-4 rounded-0 pb_letter-spacing-2">Free Consultation</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutSection data={data['about']}/>
      <WorkSection data={data['work']}/>
    </div>
  );
}

export const homeQuery = graphql`
  query queryHomeData {
    site {
      siteMetadata {
        title
      }
    }
    about: informationJson(id:{eq:"about_section"}) {
      ...AboutSectionFragment
    }
    work: informationJson(id:{eq:"work_section"}) {
      ...WorkSectionFragment
    }
  }
`;
