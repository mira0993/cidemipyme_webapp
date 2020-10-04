import React from 'react';
import {
  Container,
  Col,
  Row
} from 'reactstrap';


const FooterSection = ({ fbURL, linkedinURL, companyName }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="pb_footer" role="contentinfo">
      <Container>
        <Row className="text-center">
          <Col>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href={fbURL} target="_blank">
                  <i className="flaticon ion-social-facebook pb_font-32 icon-primary-color" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href={linkedinURL} target="_blank">
                  <i className="flaticon ion-social-linkedin pb_font-32 icon-primary-color" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="pb_font-16">
              &copy; {`${currentYear} ${companyName}`}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterSection;