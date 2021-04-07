import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import styled from "styled-components"
import bgImg from "../images/photo01.jpg"
import { Link } from "gatsby"

const Section = styled.section`
  width: 100%;
  min-height: 50vh;
  position: relative;
  background: linear-gradient(
    0deg,
    rgba(145, 41, 28, 1) 0%,
    rgba(34, 34, 34, 1) 100%
  );
  background-image: url(${bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Text = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 30vh 5vh 5vh 10vh;
  min-height: 80vh;
  width: 100%;
`

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Wrong direction" />
      <Section>
        <Text className="about-page-intro">
          <p>
            Je crois bien que vous vous etes trompé de route .... Mais ce n'est
            pas bien grave car... ... toutes les routes menent à Rome.
          </p>
        </Text>
        <Link to="/index">Retour à l'accueil</Link>
      </Section>
    </Layout>
  )
}

export default NotFoundPage
