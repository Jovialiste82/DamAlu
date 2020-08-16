import React from 'react'
import styled from 'styled-components'

const ServicesSection = () => {
    return (
        <Section className="services-section">
            <h1>This is the Services Section on Index</h1>
        </Section>
    )
}

export default ServicesSection


const Section = styled.section`
    background-color: blue;
    width: 100%;
    height: 40vh;
`