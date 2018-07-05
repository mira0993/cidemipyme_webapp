import PropTypes from 'prop-types';
import React from 'react';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';

const ContactPropTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.arrayOf(PropTypes.string).isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

class ContactSection extends React.Component {
  render () {
    return (
      <section id="section-contact" className="pb_section bg-light">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="mt-0 heading-border-top mb-3 font-weight-normal">
                {this.props.data.title}
              </h2>
            </Col>
          </Row>
          <Row>
              <Col md={12} className="embed-responsive embed-responsive-200">
                <iframe
                  id="google-maps-canvas"
                  src="https://maps.google.com/maps?q=calle%20la%20cauda%20939%20guadalajara%20jalisco&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  allowfullscreen>
                </iframe>
              </Col>

          </Row>
        </Container>
      </section>
    );
  }
}

export default ContactSection;

ContactSection.propTypes = {
  data: PropTypes.shape(ContactPropTypes).isRequired
};

export const GraphQlContactSectionFragment = graphql `
  fragment ContactSectionFragment on InformationJson {
    title
    id
    address
    phone
    email
  }
`;
