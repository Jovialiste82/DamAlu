import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
// import Fade from 'react-reveal/Fade';
// import { Link } from "gatsby";
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import styled from 'styled-components'


const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    padding: 30vh 0 10vh 0;
    position: relative;
    background: rgb(145,41,28);
    background: linear-gradient(0deg, rgba(145,41,28,1) 0%, rgba(34,34,34,1) 100%);
    color: #fff;
`

const contactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Section className="contact-page">
      <div className="devis-container">
        <span>demande de devis</span>
      </div>
      <Container>
          <Form
            name="contact v2"
            method="post"
            data-netlify="true"
            onSubmit="submit"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact v2" />

            <p hidden>
              <label htmlFor="gender">
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            <Row>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control 
                    required size="lg" 
                    type="text" 
                    placeholder="Prénom"
                    name="prenom" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Nom</Form.Label>
                  <Form.Control 
                    required size="lg" 
                    type="text" 
                    placeholder="Nom de famille"
                    name="nom" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    required size="lg" 
                    type="email" 
                    placeholder="Email"
                    name="e-mail" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Téléphone</Form.Label>
                  <Form.Control 
                    required size="lg" 
                    type="text" 
                    placeholder="Numero de téléphone"
                    name="telephone" />
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
                placeholder="Comment puis-je vous aider?"
                name="message"
              />
            </Form.Group>
            <div>
              <Button type="submit" className="cta-btn">ENVOYER</Button>
            </div>
          </Form>
      </Container>
    </Section>
  </Layout>
)


export default contactPage