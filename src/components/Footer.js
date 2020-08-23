import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import { AiOutlineMail, AiOutlineHome, AiOutlinePhone } from 'react-icons/ai'


const MyFooter = styled.footer`
width: 100%;
min-height: 35vh;
margin-bottom: 0;
background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(34,34,34,1) 100%);
color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
text-align: center;
`

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Legal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Footer = () => {
    return (
        <MyFooter>
          <div className="other-footer-mentions">
            <div className="contact-infos">
              <Card className="contact-card">
                <div className="card-logo">
                  <AiOutlinePhone />
                </div>
                <div>
                  <div>06.96.04.02.84</div>
                </div>
              </Card>
              <Card className="contact-card">
                <div className="card-logo">
                  <AiOutlineMail />
                </div>
                <div>
                  <div>drame.damien@gmail.com</div>
                </div>
              </Card>
              <Card className="contact-card">
                <div className="card-logo">
                  <AiOutlineHome />
                </div>
                <div>
                  <div>4, Rue Raymond Berger, 97224 Ducos, Martinique</div>
                </div>
              </Card>
            </div>
            <Legal className="legal">
              <div className="legal-link">
                <Link to="/legal/">Mentions légales</Link>
              </div>
              <div className="copyright">
                <span>Damien Drame © {new Date().getFullYear()}</span>
              </div>
            </Legal>
          </div>
      </MyFooter>
    )
}

export default Footer
