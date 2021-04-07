import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import styled from "styled-components"

const Section = styled.section`
  width: 100%;
  height: 100vh;
  padding-top: 40vh;
  position: relative;
  background: linear-gradient(
    0deg,
    rgba(145, 41, 28, 1) 0%,
    rgba(34, 34, 34, 1) 100%
  );
`
const Text = styled.div`
  color: white;
  padding: 10vh 3vh 10vh 3vh;
  min-height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const legal = () => {
  return (
    <Layout>
      <SEO title="success" />
      <Section>
        <Text>
          <h4>Message bien envoyé !</h4>
        </Text>
      </Section>
    </Layout>
  )
}

export default legal
