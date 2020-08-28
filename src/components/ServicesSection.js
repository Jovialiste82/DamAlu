import React from 'react'
import styled from 'styled-components'
import Quotation from "./QuotationButton"


const Section = styled.section`
    background: transparent;
    padding: 16px;
    width: 100%;
    min-height: 40vh;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`


const Card = styled.div`
    width: 200px;
    height: 200px;
    margin: 16px;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    border: white 2px solid;
    background-color: #ccc;
    background-position: left bottom;
    background-repeat: no-repeat;
    background-size: cover;
`

const Text = styled.span`
    background-color: rgba(0,0,0,.8);
    color: white;
    border-radius: 8px;
    margin: auto;
    padding: 8px 16px;
`

const ServicesSection = () => {
    return (
        <Section className="services-section">
            <Card id="service-card1" ><Text>Conception</Text></Card>
            <Card id="service-card2" ><Text>Pose</Text></Card>
            <Card id="service-card3" ><Text>R&#233;paration</Text></Card>
            <Card id="service-card4" ><Text className="meskouy" >Maintenance</Text></Card>
            <Quotation />
        </Section>
    )
}

export default ServicesSection


