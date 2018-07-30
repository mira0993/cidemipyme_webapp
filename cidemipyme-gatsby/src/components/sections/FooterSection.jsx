import PropTypes from 'prop-types';
import React from 'react';
import {
  Container,
  Col,
  Row
} from 'reactstrap';

class FooterSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="pb_footer" role="contentinfo">
        <Container>
          <Row className="text-center">
            <Col>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href={this.props.fbURL} className="p-2" target="_blank">
                    <i className="fa fa-facebook"/>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <p className="pb_font-14">
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
  fbURL: PropTypes.string.isRequired
};
