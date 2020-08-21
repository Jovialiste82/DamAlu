import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


const Section = styled.section`
    background: rgb(108,38,29);
    background: linear-gradient(0deg, rgba(108,38,29,1) 0%, rgba(140,140,143,1) 49%, rgba(108,38,29,1) 100%);
    width: 100%;
`


const Video = styled.div`
margin: 40px auto;
`

const DemoSection = () => {

    const [mobileWidth, setMobileWidth] = useState(true)

    useEffect(() => {
        const currentWidth = window.innerWidth < 568
        setMobileWidth(currentWidth)
    }, [])


    return (
        <Section className="video-section">
            <Video className="video-container">
                <iframe 
                        id="youtube-video"
                        width={mobileWidth ? "250" : "420"}
                        height={mobileWidth ? "150" : "315"}
                        title="menuiserie"
                        src="https://www.youtube.com/embed/5owzKreQ6dk">
                    </iframe>
            </Video>
        </Section>
    )
}

export default DemoSection

