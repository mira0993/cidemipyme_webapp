import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { StyleSheet, css } from 'aphrodite';
import { fadeIn, headShake } from 'react-animations';

import AboutSection from 'sections/AboutSection.jsx';
import StrategicAlliesSection from 'sections/StrategicAlliesSection.jsx';
import WorkSection from 'sections/WorkSection.jsx';
import MethodologiesSection from 'sections/MethodologiesSection.jsx';
import ContactSection from 'sections/ContactSection.jsx';
import ClientsSection from 'sections/ClientsSection.jsx';
import FooterSection from 'sections/FooterSection.jsx';
import Layout from 'components/Layout.js';

const homeQuery = graphql`
  query queryHomeData {
    site {
      siteMetadata {
        title
        slogan
        fbcide
        linkedin
      }
    }
    about: informationJson(id:{eq:"about_section"}) {
      ...AboutSectionFragment
    }
    work: informationJson(id:{eq:"work_section"}) {
      ...WorkSectionFragment
    }
    strategic_allies: informationJson(id: {eq:"strategic_allies_section"}) {
      ...StrategicAlliesFragment
    }
    methodologies: informationJson(id:{eq:"methodologies_section"}) {
      ...MethodologiesSectionFragment
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

const styles = StyleSheet.create({
  headerImgFadeIn: {
    animationName: fadeIn,
    animationDuration: '4s',
  },
  learnMoreBtnHeadShake: {
    animationName: headShake,
    animationDuration: '2s',
    animationDelay: '5s',
    animationIterationCount: 10
  }
});

export default () => {
  const data = useStaticQuery(homeQuery);
  return (
    <Layout>   
      <section
        className="pb_cover_v1 text-left home-section"
        id="section-home">
        <header className={'masthead ' + css(styles.headerImgFadeIn)}>
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-white font-weight-bold">{data.site.siteMetadata.title}</h1>
                <hr className="divider my-4" />
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="text-white-75 font-weight-light mb-5">{data.site.siteMetadata.slogan}</p>
                <a className={'btn btn-primary header-btn js-scroll-trigger ' + css(styles.learnMoreBtnHeadShake)}  href="#section-about">
                  Conócenos
                </a>
              </div>
            </div>
          </div>
        </header>
      </section>
      <AboutSection data={data.about}/>
      <StrategicAlliesSection {...data.strategic_allies}/>
      <WorkSection {...data.work}/>
      <MethodologiesSection data={data.methodologies}/>
      <ClientsSection />
      <ContactSection
        data={data.contact}
        script={data.send_message_script.edges[0].node.publicURL}/>
      <FooterSection
        companyName={data.site.siteMetadata.title}
        fbURL={data.site.siteMetadata.fbcide}
        linkedinURL={data.site.siteMetadata.linkedin} />
    </Layout>
  );
}


