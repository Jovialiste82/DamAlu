import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
// import { AiOutlineMail, AiOutlineHome, AiOutlinePhone } from 'react-icons/ai'


const MyFooter = styled.footer`
width: 100%;
min-height: 20vh;
margin-bottom: 0;
background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(34,34,34,1) 100%);
color: white;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`



const Footer = () => {
    return (
        <MyFooter>
              <div className="legal-link">
                <Link to="/legal/">Mentions légales</Link>
              </div>
              <div className="copyright">
                <span>Damien Drame © {new Date().getFullYear()}</span>
              </div>
      </MyFooter>
    )
}

export default Footer
