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


const RadioBox = styled.div`
  background-color: rgba(0,0,0,.4);
  margin: auto;
  padding: 2vh 4vh;
  width: 90%;
  text-align: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding: 2vh 10vh;
    width: 50%;
  }
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
            name="contact v6"
            method="post"
            data-netlify="true"
            onSubmit="submit"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact v6" />

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
                    placeholder="Champs obligatoire"
                    name="prenom" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Nom</Form.Label>
                  <Form.Control 
                    required size="lg" 
                    type="text" 
                    placeholder="Champs obligatoire"
                    name="nom" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Commune</Form.Label>
                  <Form.Control 
                    required size="lg" 
                    type="text" 
                    placeholder="Champs obligatoire"
                    name="e-mail" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    required size="lg" 
                    type="email" 
                    placeholder="Champs obligatoire"
                    name="e-mail" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Téléphone</Form.Label>
                  <Form.Control 
                    required size="lg" 
                    type="text" 
                    placeholder="Champs obligatoire"
                    name="telephone" />
                </Form.Group>
              </Col>

            </Row>

              <div className="contact-form-spacer" />

            <RadioBox>
              <h5>Nature des travaux</h5>
              <div class="radio-choice">
                <Form.Check inline label="Neuf" name="Neuf" type="radio" id="radio1" />
                <Form.Check inline label="Rénovation" name="Rénovation" type="radio" id="radio2" />
              </div>
            </RadioBox>

            <div className="contact-form-spacer" />

            <RadioBox>
              <h5>Vous êtes un:</h5>
              <div class="radio-choice">
                <Form.Check inline label="Particulier" name="Particulier" type="radio" id="radio3" />
                <Form.Check inline label="Professionnel" name="Professionnel" type="radio" id="radio4" />
              </div>
            </RadioBox>

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

              <Button type="submit" className="cta-btn">
                <span>ENVOYER</span>
              </Button>

          </Form>
      </Container>
    </Section>
  </Layout>
)


export default contactPage