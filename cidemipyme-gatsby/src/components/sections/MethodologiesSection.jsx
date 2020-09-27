import HoverCard from 'components/HoverCard.jsx';
import methodology_business_architecture from 'images/metodologia_arquitectura_negocio.png';
import methodology_cce from 'images/metodologia_cce.png';
import methodology_cidetalento from 'images/metodologia_cidetalento.png';
import methodology_growth_strategy from 'images/metodologia_estrategia_crecimiento.png';
import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';

const methodologiesKeyPrefix = 'methodologiesSection_';
const methodologiesImages = {
  cce: methodology_cce,
  business_architecture: methodology_business_architecture,
  growth_strategy: methodology_growth_strategy,
  cidetalento: methodology_cidetalento,
};


const MethodologyItemPropType = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired
}

const MethodologiesPropTypes = {
  title: PropTypes.string.isRequired,
  methodologies: PropTypes.arrayOf(PropTypes.shape(MethodologyItemPropType)).isRequired,
}

class MethodologiesSection extends React.Component {
  renderContent(content, keyPrefix) {
    return content.map((text, index) => (
      <div key={`${keyPrefix}${index}`}>
        <p>{text}</p>
      </div>
    ));
  }

  render() {
    let cards = [];
    let totalCards = this.props.data.methodologies.length;
    let key = `${methodologiesKeyPrefix}card_`;

    for(let i=0; i < totalCards; i+=2) {
      cards.push(
        <Row className="row-padding-top-30" key={`${key}${i / 2}`}>
          <Col md={6}>
            <HoverCard
              title={this.props.data.methodologies[i].title}
              text={this.props.data.methodologies[i].content}
              image={methodologiesImages[this.props.data.methodologies[i].id]}
              keyPrefix={`${key}${i}`}/>
          </Col>
          <Col md={6}>
            <HoverCard
              title={this.props.data.methodologies[i + 1].title}
              text={this.props.data.methodologies[i + 1].content}
              image={methodologiesImages[this.props.data.methodologies[i + 1].id]}
              keyPrefix={`${key}${i + 1}`}/>
          </Col>
        </Row>
      );
    }

    return (
      <section id="section-methodologies" className="pb_section">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="mt-0 heading-border-top mb-3 font-weight-normal">
                {this.props.data.title}
              </h2>
            </Col>
          </Row>
          {cards}
        </Container>
      </section>
    );
  }
}

export default MethodologiesSection;

MethodologiesSection.propTypes = {
  data: PropTypes.shape(MethodologiesPropTypes).isRequired
};

export const GraphQlMethodologiesSectionFragment = graphql `
  fragment MethodologiesSectionFragment on InformationJson {
    title
    methodologies {
      id
      title
      content
    }
  }
`;
