import PropTypes from 'prop-types';
import React from 'react';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';
import Slider from "react-slick";

import client_1 from 'images/client_1.png';
import client_2 from 'images/client_2.png';
import client_3 from 'images/client_3.png';
import client_4 from 'images/client_4.png';
import client_5 from 'images/client_5.png';
import client_6 from 'images/client_6.png';
import client_7 from 'images/client_7.png';
import client_8 from 'images/client_8.png';
import client_9 from 'images/client_9.png';
import client_10 from 'images/client_10.png';
import client_11 from 'images/client_11.png';
import client_12 from 'images/client_12.png';
import client_13 from 'images/client_13.png';
import client_14 from 'images/client_14.png';
import client_15 from 'images/client_15.png';
import client_16 from 'images/client_16.png';
import client_17 from 'images/client_17.png';
import client_18 from 'images/client_18.png';
import client_19 from 'images/client_19.png';
import client_20 from 'images/client_20.png';
import client_21 from 'images/client_21.png';
import client_22 from 'images/client_22.png';
import client_23 from 'images/client_23.png';
import client_24 from 'images/client_24.png';
import client_25 from 'images/client_25.png';
import client_26 from 'images/client_26.png';
import client_27 from 'images/client_27.png';
import client_28 from 'images/client_28.png';
import client_29 from 'images/client_29.png';
import client_30 from 'images/client_30.png';

const clientsKeyPrefix = 'clientsSection_';

const clientLogos = [
  client_1,
  client_2,
  client_3,
  client_4,
  client_5,
  client_6,
  client_7,
  client_8,
  client_9,
  client_10,
  client_11,
  client_12,
  client_13,
  client_14,
  client_15,
  client_16,
  client_17,
  client_18,
  client_19,
  client_20,
  client_21,
  client_22,
  client_23,
  client_24,
  client_25,
  client_26,
  client_27,
  client_28,
  client_29,
  client_30,
];

class ClientsSection extends React.Component {
  render() {
    let sliderSettings = {
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

    let logos = clientLogos.map(
      (logo, index) => (
        <div key={`${clientsKeyPrefix}_${index}`}>
          <img alt="Logo cliente de CIDEMiPyMe" src={logo} className="img-fluid"/>
        </div>
      ));

    return (
      <section id="section-clients" className="pb_section pb_bg-half">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="mt-0 heading-border-top mb-3 font-weight-normal">
                {'Nuestros Clientes'}
              </h2>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={0}>
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
