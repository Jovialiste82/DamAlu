import React from 'react'
import styled from 'styled-components'
import bgImg from "../images/photo01.jpg"



const Section = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    background-image: url(${bgImg});
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
const MainDiv = styled.div`
    background-color: rgba(0,0,0,.8);
    color: #eee;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    padding: 50px 60px;
    border-radius: 8px;

`

const SpanH1 = styled.h1`
    text-transform: uppercase;
    font-weight: 600;
    color: var(--primary-color);
`

const SpanH3 = styled.h3`
    color: var(--secondary-color);
`

const HeroSection = (props) => {


    return (
        <Section  className="hero-section">
            <MainDiv>
                <SpanH1>Damien Drame</SpanH1>
                <SpanH3>Menuiseries Aluminium</SpanH3>
            </MainDiv>
        </Section>
    )
}

export default HeroSection


