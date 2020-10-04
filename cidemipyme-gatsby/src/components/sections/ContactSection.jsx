import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { graphql } from 'gatsby';
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
import jquery from 'jquery';


const EmailContactForm = ({url}) => {
  const [contactForm, setContactForm] = useState({
    emailText: '',
    subjectText: '',
    messageText: '',
    showErrors: false,
    showSentMessage: false,
    showSendFailureMessage: false,
  });

  const onChangeInput = (inputType, event) => {
    setContactForm({
      ...contactForm,
      [`${inputType}Text`]: event.target.value,
      showSentMessage: false,
      showSentErrorMessage: false,
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (contactForm.emailText.length === 0
      || contactForm.subjectText.length === 0
      || contactForm.messageText.length === 0
    ) {
      setContactForm({
        ...contactForm,
        showErrors: true
      });
    } else {
      window.$ = window.jQuery = jquery;
      $.post(
        url,
        JSON.stringify({
          subject: contactForm.subjectText,
          email: contactForm.emailText,
          message: contactForm.messageText
        })
      ).done(_data => {
        setContactForm({
          showSentMessage: true,
          showErrors: false,
          emailText: '',
          subjectText: '',
          messageText: '',
          showSentErrorMessage: false,
        });
      }).fail(_err => {
        setContactForm({
          ...contactForm,
          showSentErrorMessage: true
        });
      });
    }
  }

  const emailFeedback =
    contactForm.showErrors && contactForm.emailText.length === 0
      ? <FormFeedback>Escribe un correo personal válido.</FormFeedback>
      : null;
  const subjectFeedback =
    contactForm.showErrors && contactForm.subjectText.length === 0
      ? <FormFeedback>Escribe un asunto para mostrar en el correo.</FormFeedback>
      : null;
  const messageFeedback =
    contactForm.showErrors && contactForm.messageText.length === 0
      ? <FormFeedback>Redacta el cuerpo del correo aquí.</FormFeedback>
      : null;
  const sentMessage = contactForm.showSentMessage
    ? <FormText>
      {'Tu mensaje ha sido enviado. Respondemos en 24 horas promedio.'}
    </FormText>
    : null;
  const sentFailureMessage = contactForm.showSentErrorMessage
    ? <FormText color="danger">
      {'Lo sentimos, no hemos podido enviar tu mensaje. Intenta nuevamente.'}
    </FormText>
    : null;

  return (
    <Form className="contact-form">
      <FormGroup>
        <Label for="senderEmail">Correo</Label>
        <Input
          className="form-control p-3 rounded-0"
          type="email"
          name="email"
          id="senderEmail"
          invalid={emailFeedback != null}
          onChange={(event) => onChangeInput('email', event)}
          value={contactForm.emailText}
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
          invalid={subjectFeedback != null}
          onChange={(event) => onChangeInput('subject', event)}
          value={contactForm.subjectText}
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
          invalid={messageFeedback != null}
          onChange={(event) => onChangeInput('message', event)}
          value={contactForm.messageText}
          placeholder="Escribir mensaje aquí..." />
        {messageFeedback}
      </FormGroup>
      {sentMessage}
      {sentFailureMessage}
      <Button
        outline
        color="info"
        className="pb_font-13 pb_letter-spacing-2 p-3 rounded-0 contact-button"
        type="submit"
        onClick={(event) => onSubmit(event)}>
        Enviar
        </Button>
    </Form>
  );
}

const ContactDetails = ({ address, email, whatsapp, phone }) => {
  const addressHtml = address.map((value, index) => (
    <p key={`ContactDetailsAddress${index}`}>{value}</p>
  ));

  return (
    <ul className="pb_contact_details_v1">
      <li>
        <span className="text-uppercase">Correo</span>
        <p>{email}</p>
      </li>
      <li>
        <span className="text-uppercase">WhatsApp</span>
        <p>{whatsapp}</p>
      </li>
      <li>
        <span className="text-uppercase">Teléfono</span>
        <p>{phone}</p>
      </li>
      <li>
        <span className="text-uppercase">Dirección</span>
        {addressHtml}
      </li>
    </ul>
  );
}

const ContactSection = (props) => {
  const {title, map} = props;
  return (
    <section id="section-contact" className="pb_section bg-light">
      <Container>
        <Row>
          <Col>
            <h2 className="mt-0 heading-border-top mb-3 font-weight-normal">
              {title}
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md={8} sm={12}>
            <EmailContactForm {...props} />
          </Col>
          <Col md={4} sm={12}>
            <ContactDetails {...props} />
          </Col>
        </Row>
        <Row className="google-maps-location">
          <Col className="embed-responsive embed-responsive-200">
            <iframe
              id="google-maps-canvas"
              src={map}
              allowFullScreen>
            </iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;

export const GraphQlContactSectionFragment = graphql`
  fragment ContactSectionFragment on InformationJson {
    id
    title
    url
    address
    phone
    email
    whatsapp
    map
  }
`;
