import React from "react"
// import { Link } from "gatsby"
import logo from "../images/LogoDamalu4-150x43.png"
import PageLinks from "../utils/links"
import styled from 'styled-components'


const Logo = styled.div`
    width: 150px;
    height: 43px;
    margin-left: 20px;
    border: 1px solid red;
    background-image: url(${logo});
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
`

const MyHeader = styled.header`
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-between;
`




const Header = ({ scrolledStyle }) => (
  <MyHeader className={scrolledStyle ? "header-after-scroll" : ""}>
    <Logo id={scrolledStyle ? "logo-after-scroll" : ""}/>
    <nav>
      <PageLinks></PageLinks>
    </nav>
  </MyHeader>
)



export default Header
