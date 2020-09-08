import React from 'react'
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Container, Row, Col
} from 'reactstrap'

class CompanyCard extends React.Component {
  render() {
    return (
      <Container>
        <Card>
          <CardTitle>Ana Seguros S.A de C.V</CardTitle>
          <CardSubtitle>Medium</CardSubtitle>
          <CardBody>
            <Row>
              <Col>Nombre</Col>
              <Col>Ana Seguros S.A de C.V</Col>
            </Row>
            <Row>
              <Col>Fecha de Inicio de Actividades</Col>
              <Col>06/08/2009</Col>
              <Col>Sector</Col>
              <Col>Financiero</Col>
              <Col>Giro</Col>
              <Col>Servicio</Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default CompanyCard;
