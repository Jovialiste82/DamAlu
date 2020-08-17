import React from 'react'
import styled from 'styled-components'

const ContactSection = () => {
  return (
    <Section className="contact-section">
        <h1>This is the Contact Section on Index</h1>
    </Section>
  )
}

export default ContactSection

const Section = styled.section`
    background-color: rgb(245,245,220);
    border: gray 3px solid;
    width: 100%;
    height: 80vh;
`