import React, { useState, useRef } from 'react';
import { graphql } from 'gatsby';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import Slider from "react-slick";
import SlideCard from 'components/SlideCard.jsx';
import Scrollspy from 'react-scrollspy';
import ScrollAnimation from 'react-animate-on-scroll';


const workKeyPrefix = 'workSection_';
const serviceSlideKeyPrefix = 'serviceSlide_';

const ServiceWithIconItem = (props) => {
  const {
    title,
    icon,
    content,
    offset,
    onSelect
  } = props;
  return (
    <Col lg={{ size: 4, offset }} className="service-work-section-unit">
      <ScrollAnimation animateIn={'zoomIn'}>
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
            <p className="pb_font-15 mb-0">
              {content}
            </p>
            <Scrollspy
              items={['see-more-services']}
              className="pl-0 ml-0 pb_font-15"
              offset={-60}>
              <a href="#see-more-services" onClick={onSelect}>Ver Más</a>
            </Scrollspy>
          </div>
        </Row>
      </ScrollAnimation>
    </Col>
  );
}

const SlickArrow = ({ currentSlide, slideCount, side, ...props }) => (
  <span {...props}><i className={`flaticon ion-ios-arrow-${side}`} /></span>
);

const WorkSection = (props) => {
  const { title, work_items: services } = props;
  const sliderRef = useRef(null);
  const [sliderIndex, setSliderIndex] = useState(0);

  const cardsFirstRow = services.slice(0, 3).map((item, index) =>
    <ServiceWithIconItem
      {...item}
      key={`${workKeyPrefix}1card_${index}`}
      offset={0}
      onSelect={() => sliderRef.current.slickGoTo(index)} />
  );

  const cardsSecondRow = services.slice(3).map((item, index) =>
    <ServiceWithIconItem
      {...item}
      key={`${workKeyPrefix}2card_${index}`}
      offset={1}
      onSelect={() => sliderRef.current.slickGoTo(index + 3)} />
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SlickArrow side="right" />,
    prevArrow: <SlickArrow side="left" />,
    beforeChange: (_current, next) => setSliderIndex(next)
  };
  const slides = services.map(
    (service, index) => (
      <SlideCard
        cssClassImage={service.slide.css_class}
        icon={service.icon}
        title={service.title}
        visible={service.slide.visible}
        collapsed={service.slide.collapsed}
        key={`${serviceSlideKeyPrefix}${index}_`}
        keyPrefix={`${serviceSlideKeyPrefix}${index}_`} />
    ));

  return (
    <>
      <section id="section-work" className="pb_section">
        <Container>
          <Row>
            <Col sm={10}>
              <h2 className="mt-0 heading-border-top mb-3 font-weight-normal section-header">
                {title}
              </h2>
            </Col>
          </Row>
          <Row>
            {cardsFirstRow}
          </Row>
          <Row>
            {cardsSecondRow}
          </Row>
        </Container>
      </section>
      <section className="pb_section bg-light">
        <Container>
          <Row id="see-more-services">
            <Col lg={12} md={12} sm={0}>
              <ScrollAnimation animateIn={'fadeIn'}>
                <Slider
                  ref={sliderRef} {...sliderSettings}
                  className="single-item pb_slide_v2">
                  {slides}
                </Slider>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default WorkSection;

export const GraphQlWorkSectionFragment = graphql`
  fragment WorkSectionFragment on InformationJson {
    title
    work_items {
      icon
      title
      content
      image
      slide {
        css_class
        visible {
          title
          items
        }
        collapsed {
          title
          items
        }
      }
    }
  }
`;
