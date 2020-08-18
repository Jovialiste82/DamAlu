import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import styled from 'styled-components'


const Section = styled.section`
    width: 100%;
    height: 100vh;
    padding-top: 40vh;
    position: relative;
    background: linear-gradient(180deg, rgba(111,188,214,1) 0%, rgba(35,124,35,1) 100%);
`

const legal = () => {
    return (
        <Layout>
            <SEO title="Legal" />
            <Section>
                <h4>Page "Mentions legales" en construction</h4>
                <h4>Page under construction</h4>
            </Section>
        </Layout>
    )
}

export default legal
