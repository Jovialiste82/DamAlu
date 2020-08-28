import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'


const Section = styled.section`
    background-color: transparent;
    height: 20vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`


const Button = styled.button`
    background-color: #fff;
    height: 10vh;
    width: 50vh;
    margin: 4vh auto;
    border-radius: 8px;
    text-transform: uppercase;
    text-decoration: none;
    color: red;
    @media (min-width: 768px) {
        width: 51vh;
      }
`

const buttonStyle = {
    color: "var(--primary-color)",
    fontWeight: "700",
    fontSize: "1.4rem",
}


const QuotationButton = () => {
    return (
        <Section>
            <Button>
                <Link to="/contact" style={buttonStyle}>Demande de devis</Link>
            </Button>
        </Section>
    )
}

export default QuotationButton
