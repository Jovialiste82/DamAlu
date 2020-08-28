import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import styled from 'styled-components'
import bgImg from "../images/photo01.jpg"


const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    position: relative;
    background: linear-gradient(180deg, rgba(111,188,214,1) 0%, rgba(35,124,35,1) 100%);
    background-image: url(${bgImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Text = styled.div`
    background-color: rgba(0,0,0,.8);
    color: white;
    min-height: 100vh;
    width: 100%;
`



const about = () => {
    return (
        <Layout>
            <SEO title="About" />
            <Section>
                <Text className="about-page-container">
                    <div className="about-page-intro">
                    Fort de son expérience de plus de 10 ans et conscient de la qualité de ses ouvrages dans la menuiserie aluminium, Damien Drame, jeune Martiniquais, fait le pari en 2017 d'ouvrir dans le marché local insulaire sa propre entreprise nommée Dam'Alu. Dam'Alu prône des valeurs d'excellence tant lorsqu'il s'agit de la qualité de ses chantiers que de la relation clientèle.<br /><br />L'amour de la minutie est ce qui caractérise le mieux l'esprit de la société.<br /><br />Dam'Alu, l'amour de la minutie.
                    </div>
                </Text>
            </Section>
        </Layout>
    )
}

export default about
