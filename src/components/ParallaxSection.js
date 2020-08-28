import React from 'react'
import styled from 'styled-components'
import pllxImg from "../images/land06.jpeg"


const Parallax = styled.section`
    background-image: url(${pllxImg});
    height: 50vh;
    opacity: 0.95;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @media (min-width: 768px) {
        height: 90vh;
      }
`


const ParallaxSection = () => {
    return (
        <Parallax id="parallax-section" />        
    )
}

export default ParallaxSection
