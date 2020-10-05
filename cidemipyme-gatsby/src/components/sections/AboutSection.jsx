import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardDeck
} from 'reactstrap';
import { graphql } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';

const ValueCard = ({ text, iconName }) => {
  const capitalLetter = text[0];
  return (
    <Card className="text-center card-box  pb_media_v2">
      <div className="icon icon-shine mr-3 display-1 mx-auto mb-4">
        <i className={'flaticon text-secondary ' + iconName} />
      </div>
      <CardText>
        <span className="capital-letter">{capitalLetter}</span>
        {text.slice(1)}
      </CardText>
    </Card>
  );
}

const AboutSection = (props) => {
  const { title, values, mision, intro } = props;
  const valueCards = values.map(
    (value, index) => <ValueCard text={value.text} iconName={value.icon} key={'values ' + index} />
  );
  const getParagraphs = (paragraphs, keyPrefix) => paragraphs.map(
    (paragraph, index) => <p key={keyPrefix + index}>{paragraph}</p>
  );

  return (
    <section className="pb_section pb_section_v1" id="section-about">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={0}>
            <ScrollAnimation animateIn={'fadeInUp'}>
              <h2 className="mt-0 heading-border-top mb-3 font-weight-normal">
                {title}
              </h2>
              {getParagraphs(intro, 'intro')}
            </ScrollAnimation>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={0}>
            <ScrollAnimation animateIn={'fadeInUp'}>
              <h2 className="mt-0 heading-border-top mb-3 font-weight-normal">
                {'Misión'}
              </h2>
              {getParagraphs(mision, 'mision')}
            </ScrollAnimation>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={0}>
            <ScrollAnimation animateIn={'fadeInUp'}>
              <h2 className="mt-0 heading-border-top mb-3 font-weight-normal">
                {'Valores'}
              </h2>
              <CardDeck>
                {valueCards}
              </CardDeck>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;

export const GraphQlAboutSectionFragment = graphql`
  fragment AboutSectionFragment on InformationJson {
    title
    intro
    mision
    values {
      icon
      text
    }
  }
`;
