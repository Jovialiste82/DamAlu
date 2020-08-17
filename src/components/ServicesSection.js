import React from 'react'
import styled from 'styled-components'
import bgImg from "../images/photo01.jpg"


const Section = styled.section`
    background-color: #fff;
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
    background-image: url(${bgImg});
    background-color: #ccc;
    background-position: center;
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
            <Card><Text>Fabrication</Text></Card>
            <Card><Text>Pose</Text></Card>
            <Card><Text>R&#233;paration</Text></Card>
            <Card><Text>Maintenance</Text></Card>
        </Section>
    )
}

export default ServicesSection


