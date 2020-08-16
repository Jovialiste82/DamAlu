import "../utils/global"
import React from "react"
import Layout from "../components/Layout"
// import styled from 'styled-components'
import "../style/global.css"
import SEO from "../components/Seo"
import Hero from "../components/HeroSection"
import Services from "../components/ServicesSection"
import Demo from "../components/DemoSection"
import Contact from "../components/ContactSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />       
    <Services />
    <Demo /> 
    <Contact /> 
  </Layout>
)

export default IndexPage
