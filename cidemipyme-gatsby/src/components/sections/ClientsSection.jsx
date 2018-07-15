import PropTypes from 'prop-types';
import React from 'react';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';
import Slider from "react-slick";

const clientsKeyPrefix = 'clientsSection_';

const clientLogos = Array.from(
  {length: 30},
  (_, index) => require(`images/client_${index + 1}.png`)
);

class ClientsSection extends React.Component {
  render() {
    const sliderSettings = {
      slidesToShow: 6,
      slidesToScroll: 2,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    };

    const logos = clientLogos.map(
      (logo, index) => (
        <div key={`${clientsKeyPrefix}_${index}`}>
          <img alt="Logo cliente de CIDEMiPyMe" src={logo} className="img-fluid"/>
        </div>
      ));

    return (
      <section id="section-clients" className="pb_section pb_bg-half">
        <Container>
          <Row>
            <Col>
              <h2 className="mt-0 heading-border-top mb-3 font-weight-normal">
              Nuestros Clientes
              </h2>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Slider {...sliderSettings} className="multiple-items pb_slide_v1">
                {logos}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default ClientsSection;
