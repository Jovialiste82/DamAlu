import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Footer from "./Footer"
import Header from "./Header"
import "../style/layout.css"

const Layout = ({ children }) => {
  

  const [isScrolled, setIsScrolled] = useState(false)

  const changeBgStyle = () => {
    const vhPixelsLimit = window.innerHeight * 0.4;
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
      <Header scrolledStyle={isScrolled} />
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