import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardDeck
} from 'reactstrap';
import {graphql} from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';
import { fadeIn, headShake } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';


const AboutPropTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.array.isRequired,
  mision: PropTypes.array.isRequired,
  values: PropTypes.array.isRequired,
}

const styles = StyleSheet.create({
  cardSize: {
    width: '100%',
    height: '100%',
  },
  cardBorder0: {
    border: '0px',
  }
});

class AboutSection extends React.Component {
  renderParagraphs(paragraphs, keyPrefix) {
    return paragraphs.map(
    (paragraph, index) => {
        return <p key={keyPrefix + index}>{paragraph}</p>;
      }
    )
  }

  createCard(text, iconName, index) {
    let capitalLetter = text[0];

    return (   
      <Card className={css(styles.cardBorder0)} key={'values ' + index}>
        <ScrollAnimation
          animateIn={'fadeInUp'}
          delay={(1+index) * 500}
          className={'text-center card-box  pb_media_v2 ' + css(styles.cardSize)}>
          <div className="icon icon-shine mr-3 display-1 mx-auto mb-4">
            <i className={'flaticon text-secondary ' + iconName} />
          </div>
          <CardText>
            <span className="capital-letter">{capitalLetter}</span>
            {text.slice(1)}
          </CardText>
        </ScrollAnimation>
      </Card>
        
    );
  }

  render() {
    let cards = this.props.data['values'].map(
      (value, index) => {
        return this.createCard(value['text'], value['icon'], index);
      }
    )
    return (
      <section className="pb_section pb_section_v1" id="section-about">
        <Container>
          <Row>
            <Col lg={12} md={12} sm={0}>
              <ScrollAnimation animateIn={'fadeInUp'}>
                <h2 className="mt-0 heading-border-top mb-3 font-weight-normal">
                  {this.props.data['title']}
                </h2>
                {this.renderParagraphs(this.props.data['intro'], 'intro')}
              </ScrollAnimation>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={0}>
              <ScrollAnimation animateIn={'fadeInUp'}>
              <h2 className="mt-0 heading-border-top mb-3 font-weight-normal">
                {'Misión'}
              </h2>
              {this.renderParagraphs(this.props.data['mision'], 'mision')}
              </ScrollAnimation>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={0}>
              <ScrollAnimation animateIn={'fadeInUp'}>
                <h2 className="mt-0 heading-border-top mb-3 font-weight-normal">
                  {'Valores'}
                </h2>
              </ScrollAnimation>
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

AboutSection.propTypes = {
  data: PropTypes.shape(AboutPropTypes).isRequired
}

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
