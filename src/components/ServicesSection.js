import React from "react"
import styled from "styled-components"
import ServiceModal from "./modals/ServiceModal"

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
  border-radius: 12px;
  border: white 2px solid;
  background-color: #ccc;
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: cover;
`

const ServicesSection = () => {
  return (
    <Section className="services-section">
      <Card id="service-card1">
        <ServiceModal type="Conception" />
      </Card>
      <Card id="service-card2">
        <ServiceModal type="Pose" />
      </Card>
      <Card id="service-card3">
        <ServiceModal type="Réparation" />
      </Card>
      <Card id="service-card4">
        <ServiceModal type="Maintenance" />
      </Card>
    </Section>
  )
}

export default ServicesSection
