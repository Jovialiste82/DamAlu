import "../utils/global"
import React from "react"
import Layout from "../components/Layout"
// import styled from 'styled-components'
import "../style/global.css"
import SEO from "../components/Seo"
import Hero from "../components/HeroSection"
import Services from "../components/ServicesSection"
import Video from "../components/VideoSection"
import Contact from "../components/ContactSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />       
    <Services />
    <Video /> 
    <Contact /> 
  </Layout>
)

export default IndexPage
