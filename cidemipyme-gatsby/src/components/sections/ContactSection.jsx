import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
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
      showSentMessage: false,
    };

    this.onChangeEmail = this.onChangeInput.bind(this, 'email');
    this.onChangeSubject = this.onChangeInput.bind(this, 'subject');
    this.onChangeMessage = this.onChangeInput.bind(this, 'message');
  }

  onChangeInput(inputType, event) {
    this.setState({
      [`${inputType}Text`]: event.target.value,
      showSentMessage: false,
    });
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
        showSentMessage: true,
        showErrors: false
      });
    }
  }

  renderMailToForm() {
    const emailFeedback =
      this.state.showErrors && this.state.emailText.length === 0
        ? <FormFeedback>Escribe un correo personal válido.</FormFeedback>
        : null;
    const subjectFeedback =
      this.state.showErrors && this.state.subjectText.length === 0
        ? <FormFeedback>Escribe un asunto para mostrar en el correo.</FormFeedback>
        : null;
    const messageFeedback =
      this.state.showErrors && this.state.messageText.length === 0
        ? <FormFeedback>Redacta el cuerpo del correo aquí.</FormFeedback>
        : null;
    const sentMessage = this.state.showSentMessage
        ? <FormText>
           {'Recibirás en tu correo una copia del mensaje. Respondemos en 24 horas promedio.'}
          </FormText>
        : null;

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
            onChange={this.onChangeEmail}
            value={this.state.emailText}
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
            onChange={this.onChangeSubject}
            value={this.state.subjectText}
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
            onChange={this.onChangeMessage}
            value={this.state.messageText}
            placeholder="Escribir mensaje aquí..." />
          {messageFeedback}
        </FormGroup>
        {sentMessage}
        <Button
          outline
          color="info"
          className="pb_font-13 pb_letter-spacing-2 p-3 rounded-0 contact-button"
          type="submit"
          onClick={this.onSubmitMessage.bind(this)}>
          Enviar
        </Button>
      </Form>
    );
  }

  renderContactDetails() {
    const address = this.props.data.address.map((value, index) => (
      <p key={`ContactDetailsAddress${index}`}>{value}</p>
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
      <section id="section-contact" className="pb_section bg-light">
        <Container>
          <Row>
            <Col>
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
              <Col className="embed-responsive embed-responsive-200">
                <iframe
                  id="google-maps-canvas"
                  src={this.props.data.map}
                  allowFullScreen>
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
