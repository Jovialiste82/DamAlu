import React from 'react'
import styled from 'styled-components'
import bgImg from "../images/photo01.jpg"



const Section = styled.section`
    width: 100%;
    height: 70vh;
    position: relative;
    background-image: url(${bgImg});
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
const MainDiv = styled.div`
    background-color: rgba(0,0,0,.7);
    color: #eee;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

`

const HeroSection = (props) => {


    return (
        <Section  className="hero-section">
            <MainDiv>
                <h1>This is the Hero Section on Index</h1>
            </MainDiv>
        </Section>
    )
}

export default HeroSection


