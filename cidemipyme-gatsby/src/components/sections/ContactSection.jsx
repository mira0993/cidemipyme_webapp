import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  FormText,
  Row
} from 'reactstrap';

const ContactPropTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.arrayOf(PropTypes.string).isRequired,
  map: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

class ContactSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailText: '',
      subjectText: '',
      messageText: '',
      showErrors: false,
    };
  }

  isSubmitButtonEnabled() {
    let ret =
      this.state.hasEmail
      && this.state.hasSubject
      && this.state.hasMessage;
    return ret;
  }

  onChangeInput(inputType, event) {
    if (inputType === 'email') {
      this.setState({
        emailText: event.target.value
      });
    } else if (inputType === 'subject') {
      this.setState({
        subjectText: event.target.value
      });
    } else if (inputType === 'message') {
      this.setState({
        messageText: event.target.value
      });
    }
  }

  onSubmitMessage(event) {
    if (this.state.emailText.length === 0
      || this.state.subjectText.length === 0
      || this.state.messageText.length === 0
    ) {
      this.setState({
        showErrors: true
      });
      event.preventDefault();
    } else {
      this.setState({
        showErrors: false
      });
    }
  }

  renderMailToForm() {
    let emailFeedback =
      this.state.showErrors && this.state.emailText.length === 0
        ? <FormFeedback>Escribe un correo personal válido</FormFeedback>
        : null;
    let subjectFeedback =
      this.state.showErrors && this.state.subjectText.length === 0
        ? <FormFeedback>Escribe un asunto para mostrar en el correo</FormFeedback>
        : null;
    let messageFeedback =
      this.state.showErrors && this.state.messageText.length === 0
        ? <FormFeedback>Redacta el cuerpo del correo aquí</FormFeedback>
        : null;
    console.log(messageFeedback);
    return (
      <Form className="contact-form" method="post" action={this.props.script} target="_blank">
        <FormGroup>
          <Label for="senderEmail">Correo</Label>
          <Input
            className="form-control p-3 rounded-0"
            type="email"
            name="email"
            id="senderEmail"
            valid={
              !this.state.showErrors || this.state.emailText.length > 0
              ? null : false
            }
            onChange={this.onChangeInput.bind(this, 'email')}
            placeholder="Correo electrónico" />
          {emailFeedback}
        </FormGroup>
        <FormGroup>
          <Label for="senderSubject">Asunto</Label>
          <Input
            className="form-control p-3 rounded-0"
            type="text"
            name="subject"
            id="senderSubject"
            valid={
              !this.state.showErrors || this.state.subjectText.length > 0
              ? null : false
            }
            onChange={this.onChangeInput.bind(this, 'subject')}
            placeholder="Título del correo" />
          {subjectFeedback}
        </FormGroup>
        <FormGroup>
          <Label for="senderText">Mensaje</Label>
          <Input
            className="form-control p-3 rounded-0"
            type="textarea"
            name="message"
            id="senderText"
            valid={
              !this.state.showErrors || this.state.messageText.length > 0
              ? null : false
            }
            onChange={this.onChangeInput.bind(this, 'message')}
            placeholder="Escribir mensaje aquí..." />
          {messageFeedback}
        </FormGroup>
        <Button
          outline
          color="info"
          className="pb_font-13 pb_letter-spacing-2 p-3 rounded-0"
          type="submit"
          onClick={this.onSubmitMessage.bind(this)}>
          Enviar
        </Button>
      </Form>
    );
  }

  renderContactDetails() {
    let address = this.props.data.address.map((value, index) => (
      <p index={'ContactDetailsAddress' + index}>{value}</p>
    ));

    return(
      <ul className="pb_contact_details_v1">
        <li>
          <span className="text-uppercase">Correo</span>
          <p>{this.props.data.email}</p>
        </li>
        <li>
          <span className="text-uppercase">Teléfono</span>
          <p>{this.props.data.phone}</p>
        </li>
        <li>
          <span className="text-uppercase">Dirección</span>
          {address}
        </li>
      </ul>
    );
  }

  render () {
    return (
      <section id="section-contact" className="pb_section">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="mt-0 heading-border-top mb-3 font-weight-normal">
                {this.props.data.title}
              </h2>
            </Col>
          </Row>
          <Row>
            <Col md={8} sm={12}>
              {this.renderMailToForm()}
            </Col>
            <Col md={4} sm={12}>
              {this.renderContactDetails()}
            </Col>
          </Row>
          <Row className="google-maps-location">
              <Col md={12} className="embed-responsive embed-responsive-200">
                <iframe
                  id="google-maps-canvas"
                  src={this.props.data.map}
                  frameborder="0"
                  allowfullScreen>
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
  data: PropTypes.shape(ContactPropTypes).isRequired,
  script: PropTypes.string.isRequired
};

export const GraphQlContactSectionFragment = graphql `
  fragment ContactSectionFragment on InformationJson {
    title
    id
    address
    phone
    email
    map
  }
`;
