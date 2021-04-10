import React from "react"
import styled from "styled-components"
import { Row, Col, Container, Form, Button } from "react-bootstrap"

const Section = styled.section`
  background-color: rgb(245, 245, 220);
  border: gray 3px solid;
  width: 100%;
  height: 80vh;
`

const ContactSection = () => {
  return (
    // <form
    //   name="contact v8"
    //   method="post"
    //   action="/success"
    //   data-netlify="true"
    //   onSubmit="submit"
    //   // Default Netlify success page
    //   // action="/formsent/"
    //   // action="pages/success/"
    //   data-netlify-honeypot="bot-field"
    // >
    //   <input type="hidden" name="form-name" value="contact v8" />

    //   <p hidden>
    //     <label htmlFor="gender">
    //       Don't fill this out: <input name="bot-field" />
    //     </label>
    //   </p>

    //   <div>
    //     <div>
    //       <div>
    //         <label>Prenom</label>
    //         <input
    //           required
    //           size="lg"
    //           type="text"
    //           placeholder="Veuillez saisir votre prenom"
    //           name="first-name"
    //         />
    //       </div>
    //     </div>

    //     <div md={6}>
    //       <div>
    //         <label>Nom</label>
    //         <input
    //           required
    //           size="lg"
    //           type="text"
    //           placeholder="Veuillez saisir votre nom de famille"
    //           name="last-name"
    //         />
    //       </div>
    //     </div>

    //     <div md={6}>
    //       <div>
    //         <label>Email</label>
    //         <input
    //           required
    //           size="lg"
    //           type="email"
    //           placeholder="Veuillez saisir votre email"
    //           name="e-mail"
    //         />
    //       </div>
    //     </div>

    //     <div>
    //       <div>
    //         <label>Telephone</label>
    //         <input
    //           required
    //           size="lg"
    //           type="email"
    //           placeholder="Veuillez saisir votre numero de telephone"
    //           name="e-mail"
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="contact-form-spacer" />

    //   <div>
    //     <label>Commentaires</label>
    //     <input
    //       required
    //       as="textarea"
    //       rows="3"
    //       placeholder="N'hesitez pas a me contacter afin que nous puissions etudier votre projet"
    //       name="info"
    //     />
    //   </div>
    //   <div>
    //     <button type="submit" className="cta-btn">
    //       ENVOYER
    //     </button>
    //   </div>
    // </form>

    <Section className="contact-section">
      <Container>
        <Form
          name="contact v8"
          method="post"
          action="/success"
          data-netlify="true"
          onSubmit="submit"
          // Default Netlify success page
          // action="/formsent/"
          // action="pages/success/"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact v8" />

          <p hidden>
            <label htmlFor="gender">
              Don't fill this out: <input name="bot-field" />
            </label>
          </p>

          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Prenom</Form.Label>
                <Form.Control
                  required
                  size="lg"
                  type="text"
                  placeholder="Veuillez saisir votre prenom"
                  name="first-name"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  required
                  size="lg"
                  type="text"
                  placeholder="Veuillez saisir votre nom de famille"
                  name="last-name"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  size="lg"
                  type="email"
                  placeholder="Veuillez saisir votre email"
                  name="e-mail"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Telephone</Form.Label>
                <Form.Control
                  required
                  size="lg"
                  type="email"
                  placeholder="Veuillez saisir votre numero de telephone"
                  name="e-mail"
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="contact-form-spacer" />

          <Form.Group>
            <Form.Label>Commentaires</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows="3"
              placeholder="N'hesitez pas a me contacter afin que nous puissions etudier votre projet"
              name="info"
            />
          </Form.Group>
          <div>
            <Button type="submit" className="cta-btn">
              ENVOYER
            </Button>
          </div>
        </Form>
      </Container>
    </Section>
  )
}

export default ContactSection
