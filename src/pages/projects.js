import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/Seo/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the Projects page</h1>
    <p>Welcome to Projects Page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
