import React from 'react'
import styled from 'styled-components'
// import {imagesList} from "../utils/imagesList"
// import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"



const Card = styled.div`
    width: 200px;
    height: 200px;
    margin: 16px;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    border: white 2px solid;
    // background-color: #ccc;
    // background-position: center center;
    // background-repeat: no-repeat;
    // background-size: cover;
`


const ServiceCard = ({fixed}) => {

    return (
        <Card>
            <Img
                fixed={fixed}
                objectFit="cover"
                objectPosition="50% 50%"
                alt="Travaux"
            />
        </Card>
    )
}

export default ServiceCard
