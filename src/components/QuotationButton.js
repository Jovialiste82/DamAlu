import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'


const Quotation = styled.button`
    background-color: #fff;
    height: 10vh;
    width: 50vh;
    margin: 4vh;
    border-radius: 8px;
    text-transform: uppercase;
    text-decoration: none;
    color: red;
    @media (min-width: 768px) {
        height: 51vh;
      }
`

const buttonStyle = {
    color: "var(--primary-color)",
    fontWeight: "700",
    fontSize: "1.4rem",
}


const QuotationButton = () => {
    return (
        <Quotation>
            <Link to="/contact" style={buttonStyle}>Demande de devis</Link>
        </Quotation>
    )
}

export default QuotationButton
