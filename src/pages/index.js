import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/Seo/seo"
import Hero from "../components/Hero/hero"
import Services from "../components/Services/services"
import MyWork from "../components/MyWork/mywork"
import Contact from "../components/Contact/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <hr />
    {/* Business intro */}
    <Hero />  
    {/* Services listing */}       
    <Services />
    {/* Featured projects */} 
    <MyWork /> 
    {/* Netlify form */} 
    <Contact /> 
    <hr />
    <Link to="/projects/">Go to page 2</Link>
    <hr />
  </Layout>
)

export default IndexPage
