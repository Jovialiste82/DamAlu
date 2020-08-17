import React from 'react'
import styled from 'styled-components'

const DemoSection = () => {
    return (
        <Section className="video-section">
           <iframe 
                id="youtube-video"
                width="300" 
                // height="315"
                title="menuiserie"
                src="https://www.youtube.com/embed/5owzKreQ6dk">
            </iframe>
        </Section>
    )
}

export default DemoSection

const Section = styled.section`
    background-color: #ddd;
    width: 100%;
    height: 80vh;
`
