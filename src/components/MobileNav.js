import React from 'react';
import { Link } from "gatsby";
import {data} from "../utils/links2"
import logo from "../images/LogoDamalu4-150x43.png"
import styled from 'styled-components'


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


const MobileNav = ({closeNav}) => {

    const tempLinks = data.map(link => {
        return (
          <li key={link.id}>
            <Link to={link.url} onClick={closeNav}>{link.text}</Link>
          </li>
        )
      })

    return (
        <nav className="mobile-pagelinks">
          <Link to="/" onClick={closeNav} id="mobile-nav-logo" >
            <Logo />
          </Link>
            <ul>
                {tempLinks}
            </ul>
        </nav>
    )
}


export default MobileNav