import React from 'react';
import { graphql } from 'gatsby';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const strategicAlliesKeyPrefix = 'strategicAllies_';

const StrategicAlliesSection = (props) => {
  const { title, strategic_allies_items: strategicAlliesItems } = props;
  const createItemCard = (title, icon, text, index) => (
    <Col lg={4} key={`${strategicAlliesKeyPrefix}card_${index}`} className="pr-5 pl-5">
      <ScrollAnimation animateIn={'bounceInUp'} delay={(1 + index) * 100}>
        <Row>
          <div className="d-flex mr-3 display-4 icon-primary-color strategy-icon">
            <i className={`flaticon ${icon}`} />
          </div>
        </Row>
        <Row>
          <div className="media-body text-center">
            <h3 className="mt-0 pb_font-22">
              {title}
            </h3>
            <p className="pb_font-15">
              {text}
            </p>
          </div>
        </Row>
      </ScrollAnimation>
    </Col>
  );

  const cards = strategicAlliesItems.map(
    (item, index) => createItemCard(
      item.title,
      item.icon,
      item.text,
      index
    ));

  return (
    <section id="section-strategic-allies" className="pb_section bg-light">
      <Container>
        <Row>
          <Col sm={10}>
            <h2 className="mt-0 heading-border-top mb-3 font-weight-normal section-header">
              {title}
            </h2>
          </Col>
        </Row>
        <Row>
          {cards}
        </Row>
      </Container>
    </section>
  );
}

export default StrategicAlliesSection;

export const GraphQlStrategicAlliesSectionFragment = graphql`
  fragment StrategicAlliesFragment on InformationJson {
    title
    id
    strategic_allies_items {
      title
      icon
      text
    }
  }
`;
