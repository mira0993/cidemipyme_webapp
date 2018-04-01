import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardDeck
} from 'reactstrap';

const AboutPropTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.array.isRequired,
  mision: PropTypes.array.isRequired,
  values: PropTypes.array.isRequired,
}

class AboutSection extends React.Component {
  static propTypes = {
    data: PropTypes.shape(AboutPropTypes).isRequired
  }

  renderParagraphs(paragraphs, keyPrefix) {
    return paragraphs.map(
    (paragraph, index) => {
        return <p key={keyPrefix + index}>{paragraph}</p>;
      }
    )
  }

  createCard(text, iconName, cardKey) {
    let capitalLetter = text[0];

    return (
        <Card className="text-center pb_media_v2 card-box" key={cardKey}>
          <div className="icon icon-shine mr-3 display-1 mx-auto mb-4">
            <i className={'flaticon text-secondary ' + iconName}/>
          </div>
          <CardText>
            <span className="capital-letter">{capitalLetter}</span>
            {text.slice(1)}
          </CardText>
        </Card>
    );
  }

  render() {
    let cards = this.props.data['values'].map(
      (value, index) => {
        return this.createCard(value['text'], value['icon'], 'values' + index);
      }
    )
    return (
      <section className="pb_section pb_section_v1" id="section-about">
        <Container>
          <Row>
            <Col lg={12} md={12} sm={0}>
              <h2 className="mt-0 heading-border-top mb-3 font-weight-normal">
                {this.props.data['title']}
              </h2>
              {this.renderParagraphs(this.props.data['intro'], 'intro')}
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={0}>
              <h2 className="mt-0 heading-border-top mb-3 font-weight-normal">
                {'Mision'}
              </h2>
              {this.renderParagraphs(this.props.data['mision'], 'mision')}
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={0}>
              <h2 className="mt-0 heading-border-top mb-3 font-weight-normal">
                {'Valores'}
              </h2>
              <CardDeck>
                {cards}
              </CardDeck>
            </Col>
          </Row>
        </Container>
      </section>
    );
   }
}

export default AboutSection;

export const GraphQlAboutSectionFragment = graphql `
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
