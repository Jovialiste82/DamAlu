import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Card = styled.div`
  width: 200px;
  height: 200px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  border: white 2px solid;
`

const ServiceCard = ({ fixed }) => {
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
