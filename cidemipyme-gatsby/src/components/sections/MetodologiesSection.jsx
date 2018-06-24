import HoverCard from 'components/HoverCard.jsx';
import metodology_business_architecture from 'images/metodologia_arquitectura_negocio.png';
import metodology_cce from 'images/metodologia_cce.png';
import metodology_cidetalento from 'images/metodologia_cidetalento.png';
import metodology_growth_strategy from 'images/metodologia_estrategia_crecimiento.png';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';

const metodologiesKeyPrefix = 'metodologiesSection_';
const metodologiesImages = {
  cce: metodology_cce,
  business_architecture: metodology_business_architecture,
  growth_strategy: metodology_growth_strategy,
  cidetalento: metodology_cidetalento,
};


const MetodologyItemPropType = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired
}

const MetodologiesPropTypes = {
  title: PropTypes.string.isRequired,
  metodologies: PropTypes.arrayOf(PropTypes.shape(MetodologyItemPropType)).isRequired,
}

class MetodologiesSection extends React.Component {
  renderContent(content, keyPrefix) {
    return content.map((text, index) => (
      <div key={`${keyPrefix}${index}`}>
        <p>{text}</p>
      </div>
    ));
  }

  render() {
    let cards = [];
    let totalCards = this.props.data.metodologies.length;
    let key = `${metodologiesKeyPrefix}card_`;

    for(let i=0; i < totalCards; i+=2) {
      cards.push(
        <Row className="row-padding-top-30">
          <Col md={6} key={`${key}${i}`}>
            <HoverCard
              title={this.props.data.metodologies[i].title}
              text={this.props.data.metodologies[i].content}
              image={metodologiesImages[this.props.data.metodologies[i].id]}
              keyPrefix={`${key}${i}`}/>
          </Col>
          <Col md={6} key={`${key}${i + 1}`}>
            <HoverCard
              title={this.props.data.metodologies[i + 1].title}
              text={this.props.data.metodologies[i + 1].content}
              image={metodologiesImages[this.props.data.metodologies[i + 1].id]}
              keyPrefix={`${key}${i + 1}`}/>
          </Col>
        </Row>
      );
    }

    return (
      <section id="section-metodologies" className="pb_section bg-light">
        <Container>
          <Row>
            <Col lg={12} md={12}>
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

export default MetodologiesSection;

MetodologiesSection.propTypes = {
  data: PropTypes.shape(MetodologiesPropTypes).isRequired
};

export const GraphQlMetodologiesSectionFragment = graphql `
  fragment MetodologiesSectionFragment on InformationJson {
    title
    metodologies {
      id
      title
      content
    }
  }
`;
