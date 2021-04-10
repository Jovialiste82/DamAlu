import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import styled from "styled-components"
import ServiceCard from "../components/ServiceCard"
import { graphql } from "gatsby"
import Quotation from "../components/QuotationButton"

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(145, 41, 28, 1) 0%,
    rgba(34, 34, 34, 1) 100%
  );
`
const Grid = styled.div`
  padding-top: 20vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const showroom = ({ data }) => {
  const {
    allFile: { nodes: jobs },
  } = data

  return (
    <Layout>
      <SEO title="Showroom" />
      <Section>
        <Grid>
          {jobs.map(job => (
            <ServiceCard fixed={job.childImageSharp.fixed} />
          ))}
        </Grid>
        <Quotation />
      </Section>
    </Layout>
  )
}

export default showroom

export const query = graphql`
  {
    allFile(filter: { relativePath: { regex: "/realisation/" } }) {
      nodes {
        childImageSharp {
          fixed(width: 196, height: 196) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
