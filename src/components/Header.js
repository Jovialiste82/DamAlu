import React from "react"
import { Link } from "gatsby"
import logo from "../images/LogoDamalu4-150x43.png"
import styled from 'styled-components'
import Hamburger from "./Hamburger"
import {data} from "../utils/links2"


const Logo = styled.div`
    width: 150px;
    height: 43px;
    border: 1px solid red;
    background-image: url(${logo});
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
`


const Header = ({ scrolledStyle, openNav }) => {

  const tempLinks = data.map(link => {
    return (
      <li key={link.id}>
        <Link to={link.url} className="temp-links">{link.text}</Link>
      </li>
    )
  })

  return (
    <header className={scrolledStyle ? "header-after-scroll" : ""}>
      <Link to="/" id={scrolledStyle ? "logo1-after-scroll" : "logo1-before-scroll"}>
        <Logo />
      </Link>
      <nav className="nav-pagelinks">
        <ul>
            {tempLinks}
        </ul>
      </nav>
      <nav className="nav-hamburger">
        <Hamburger openNav={openNav} />
      </nav>
  </header>  
  )
}




export default Header
