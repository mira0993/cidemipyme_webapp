import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Container,
} from 'reactstrap';
import Slider from "react-slick";
import SlideCard from '../SlideCard.jsx';

const ServiceItemPropType = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired
}

const ServicesPropType = {
  title: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(PropTypes.shape(ServiceItemPropType)).isRequired,
}

const servicesKeyPrefix = 'servicesSection_';

class ServicesSection extends React.Component {
  static propTypes = {
    data: PropTypes.shape(ServicesPropType).isRequired
  }

  render() {
    let sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    let cards = this.props.data.services.map(
      (service, index) => {
        return <SlideCard
          cssClassImage={service.css_class}
          icon={service.icon}
          title={service.title}
          content={service.content}
          keyPrefix={servicesKeyPrefix} />;
      }
    );

    return (
      <section id="section-services" className="pb_section pb_bg-half">
        <Container>
          <Row>
            <Col lg={12} md={12} sm={0}>
              <h2 className="mt-0 heading-border-top mb-3 font-weight-normal">
                {this.props.data.title}
              </h2>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={0}>
              <Slider {...sliderSettings} className="single-item pb_slide_v2">
                {cards}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default ServicesSection;

export const GraphQlServicesSectionFragment = graphql `
fragment ServicesSectionFragment on InformationJson {
  title
  services {
    title
    css_class
    icon
    content
  }
}
`;
