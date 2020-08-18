import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import styled from 'styled-components'
import bgImg from "../images/photo01.jpg"


const Section = styled.section`
    width: 100%;
    min-height: 120vh;
    padding: 20vh 5vh 5vh 5vh;
    position: relative;
    background: linear-gradient(180deg, rgba(111,188,214,1) 0%, rgba(35,124,35,1) 100%);
    background-image: url(${bgImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Opacity = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,.8);
    z-index: 4;
`


const about = () => {
    return (
        <Layout>
            <SEO title="About" />
            <Section>
                <Opacity />
                <div className="about-page-intro">
                    Bienvenue chez Dam'Alu. Je me présente, Damien Drame, {(new Date().getFullYear())-1985} ans.J'ai créé l'entreprise Dam'Alu en 2017. Et pour l'instant je travaille seul. Je réalise des menuiseries en aluminium: portes,fenêtres, garde-corps... Pour moi, la menuiserie est une passion que j'exerce depuis bientôt dix ans. En fait, j'y suis arrivé un peu par hasard. J'ai quitté le domicile familial tôt et il fallait bien gagner de l'argent. D'expériences en expériences j'ai découvert la menuiserie.Je m'y suis formé et aujourd'hui, je m’épanouis pleinement dans mon métier. Et puis, j'aime beaucoup la relation client donc c'est parfait. J'accorde beaucoup d'importance aux détails, à la finition. Je penseque c'est ce qui fait ma marque de fabrique.                    
                </div>
            </Section>
        </Layout>
    )
}

export default about
