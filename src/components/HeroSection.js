import React from 'react'
import styled from 'styled-components'
import bgImg from "../images/photo01.jpg"
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby"




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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media (min-width: 769px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        border-radius: 8px;
        padding: 5vh;
        width: 600px;
        height: 400px;
        justify-content: space-evenly;
      }

`

const Logo = styled.div`
    width: 250px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20vh auto 10vh auto;
    padding-top: 10vh;
    @media (min-width: 769px) {
        margin: 1vh auto;
        padding-top: 0;
      }
`

const SpanH3 = styled.h3`
    color: var(--secondary-color);
    margin-bottom: 20vh;
    @media (min-width: 769px) {
        margin: 1vh auto;
      }
`


const HeroSection = () => {

    const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "LogoDamalu1-312x313.png"}) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)

    return (
        <Section  className="hero-section">
            <MainDiv>
                <Logo>
                    <Img 
                        fluid={data.file.childImageSharp.fluid}
                        style={{borderRadius:"8px", 
                                width:"200px", 
                                height:"200px"}}
                    /> 
                </Logo>
                <SpanH3>Spécialiste Menuiseries Aluminium</SpanH3>
            </MainDiv>
        </Section>
    )
}

export default HeroSection

