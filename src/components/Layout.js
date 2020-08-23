import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Footer from "./Footer"
import Header from "./Header"
import MobileNav from "./MobileNav"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../style/layout.css"

const Layout = ({ children }) => {
  

  const [isScrolled, setIsScrolled] = useState(false)
  const [showNav, setShowNav] = useState(false)

  function openNav() {
    setShowNav(currentState => !currentState);
  }

  function closeNav() {
    setShowNav(currentState => !currentState);
  }

  const changeBgStyle = () => {
    const vhPixelsLimit = window.innerHeight * 0.01;
    const limitReached = window.scrollY > vhPixelsLimit;
    console.log(limitReached);
    limitReached ? setIsScrolled(true) : setIsScrolled(false)
  }

  useEffect(() => {
      window.addEventListener('scroll', changeBgStyle)
      return () => {
        window.removeEventListener('scroll', changeBgStyle)
      }
  }, [])

  return (
    <>
      {showNav?  
        <>
          <Header scrolledStyle={isScrolled} />
          <MobileNav closeNav={closeNav}/>
        </> :
          <Header scrolledStyle={isScrolled} openNav={openNav} /> }
          <main>{children}</main>
          <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */