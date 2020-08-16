import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/Seo"
// import RealisationCard from "../components/RealisationCard"
import styled from 'styled-components'


const Section = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    background: linear-gradient(180deg, rgba(111,188,214,1) 0%, rgba(35,124,35,1) 100%);
`

const showroom = () => {
    return (
        <Layout>
            <SEO title="Showroom" />
            <Section>
                <h1>Page montrant les realisations</h1>
            </Section>
        </Layout>
    )
}

export default showroom
