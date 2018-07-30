import React from 'react';
import AboutSection from 'sections/AboutSection.jsx';
import CoparmexSection from 'sections/CoparmexSection.jsx';
import WorkSection from 'sections/WorkSection.jsx';
import ServicesSection from 'sections/ServicesSection.jsx';
import MethodologiesSection from 'sections/MethodologiesSection.jsx';
import ContactSection from 'sections/ContactSection.jsx';
import ClientsSection from 'sections/ClientsSection.jsx';

export default ({data}) => {
  return (
    <div>
      <section
        className="pb_cover_v1 text-left home-section"
        id="section-home">
        <div className="container">
          <div className="row align-items-center justify-content-end">
            <div className="col-md-6  order-md-1">
              <h2 className="heading mb-3">{data.site.siteMetadata.title}</h2>
              <div className="sub-heading">
                <p className="mb-5">{data.site.siteMetadata.slogan}</p>
                <div
                  className="fb-like"
                  data-href={data.site.siteMetadata.fbcide}
                  data-layout="standard"
                  data-action="recommend"
                  data-size="large"
                  data-show-faces="true"
                  data-share="false">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutSection data={data.about}/>
      <ClientsSection/>
      <CoparmexSection data={data.coparmex}/>
      <WorkSection data={data.work}/>
      <MethodologiesSection data={data.methodologies}/>
      <ServicesSection data={data.services}/>
      <ContactSection
        data={data.contact}
        script={data.send_message_script.edges[0].node.publicURL}/>
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
    coparmex: informationJson(id: {eq:"coparmex_section"}) {
      ...CoparmexSectionFragment
    }
    methodologies: informationJson(id:{eq:"methodologies_section"}) {
      ...MethodologiesSectionFragment
    }
    services: informationJson(id:{eq:"services_section"}) {
      ...ServicesSectionFragment
    }
    contact: informationJson(id:{eq:"contact_section"}) {
      ...ContactSectionFragment
    }
    send_message_script: allFile(filter: { name: { eq: "send_email" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;
