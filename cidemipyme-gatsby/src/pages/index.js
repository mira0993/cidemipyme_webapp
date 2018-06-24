import React from 'react';
import Link from 'gatsby-link';
import AboutSection from 'sections/AboutSection.jsx';
import WorkSection from 'sections/WorkSection.jsx';
import ServicesSection from 'sections/ServicesSection.jsx';
import MethodologiesSection from 'sections/MethodologiesSection.jsx';

export default ({data}) => {
  return (
    <div>
      <section
        className="pb_cover_v1 text-left cover-bg-black cover-bg-opacity-4 home-section"
        id="section-home">
        <div className="container">
          <div className="row align-items-center justify-content-end">
            <div className="col-md-6  order-md-1">
              <h2 className="heading mb-3">{data.site.siteMetadata.title}</h2>
              <div className="sub-heading">
                <p className="mb-5">{data.site.siteMetadata.slogan}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutSection data={data.about}/>
      <WorkSection data={data.work}/>
      <ServicesSection data={data.services}/>
      <MethodologiesSection data={data.methodologies}/>
    </div>
  );
}

export const homeQuery = graphql`
  query queryHomeData {
    site {
      siteMetadata {
        title
        slogan
      }
    }
    about: informationJson(id:{eq:"about_section"}) {
      ...AboutSectionFragment
    }
    work: informationJson(id:{eq:"work_section"}) {
      ...WorkSectionFragment
    }
    methodologies: informationJson(id:{eq:"methodologies_section"}) {
      ...MethodologiesSectionFragment
    }
    services: informationJson(id:{eq:"services_section"}) {
      ...ServicesSectionFragment
    }
  }
`;
