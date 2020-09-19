import "../utils/global"
import React from "react"
import Layout from "../components/Layout"
// import styled from 'styled-components'
// import 'bootstrap/dist/css/bootstrap.min.css'
import "../style/global.css"
import SEO from "../components/Seo"
import Hero from "../components/HeroSection"
import Services from "../components/ServicesSection"
import Video from "../components/VideoSection"
import Parallax from "../components/ParallaxSection"
import QuotationButton from "../components/QuotationButton"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />       
    <Services />
    <QuotationButton style={{background: "transparent"}} />
    <Parallax />
    <Video /> 
  </Layout>
)

export default IndexPage
