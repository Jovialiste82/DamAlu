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
    background-color: transparent
    color: #eee;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        border-radius: 8px;
        padding: 50px 60px;
        width: 500px;
        height: 400px;
      }

`

const Logo = styled.div`
    width: 250px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20vh auto auto auto;
    @media (min-width: 768px) {
        margin: auto;
      }
`

const SpanH3 = styled.h3`
    color: var(--secondary-color);
    margin-bottom: 15vh;
    @media (min-width: 768px) {
        margin-top: 20px;
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

