import React from 'react';
import {
  Col,
  Container,
  Row
} from 'reactstrap';

const NotFoundPage = () => (
  <div>
    <section className="pb_section">
      <Container>
        <Row style={{paddingTop: '3em'}}>
          <Col>
            <h3>Lo sentimos. No hemos encontrado el contenido que buscas.</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="/">Vuelve a la página de Inicio</a>
          </Col>
        </Row>
      </Container>
    </section>
  </div>
);

export default NotFoundPage;
