import PropTypes from 'prop-types';
import React from 'react';
import {graphql} from 'gatsby';
import {
  Container,
  Col,
  Row
} from 'reactstrap';

class FooterSection extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="pb_footer" role="contentinfo">
        <Container>
          <Row className="text-center">
            <Col>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href={this.props.fbURL} target="_blank">
                    <i className="flaticon ion-social-facebook pb_font-32 icon-primary-color"/>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={this.props.linkedinURL} target="_blank">
                    <i className="flaticon ion-social-linkedin pb_font-32 icon-primary-color"/>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <p className="pb_font-16">
                &copy; {`${currentYear} ${this.props.companyName}`}
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default FooterSection;

FooterSection.propTypes = {
  companyName: PropTypes.string.isRequired,
  fbURL: PropTypes.string.isRequired,
  linkedinURL: PropTypes.string.isRequired
};
