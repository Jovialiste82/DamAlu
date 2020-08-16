import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
// import Fade from 'react-reveal/Fade';
// import { Link } from "gatsby";
// import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import styled from 'styled-components'


const Section = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    background: linear-gradient(180deg, rgba(111,188,214,1) 0%, rgba(35,124,35,1) 100%);
`

const contactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Section>
      <h1>Page de Contact et demande de devis</h1>
    </Section>
  </Layout>
)


export default contactPage