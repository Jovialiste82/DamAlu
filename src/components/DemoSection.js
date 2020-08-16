import React from 'react'
import styled from 'styled-components'

const DemoSection = () => {
    return (
        <Section className="demo-section">
           <h1>This is the Demo section on Index</h1> 
        </Section>
    )
}

export default DemoSection

const Section = styled.section`
    background-color: yellow;
    width: 100%;
    height: 60vh;
`
