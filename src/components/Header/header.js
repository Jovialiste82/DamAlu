import React from "react"
// import { Link } from "gatsby"
import PropTypes from "prop-types"
import PageLinks from "../../utils/links"

const Header = ({ siteTitle }) => (
  <header>
    <PageLinks></PageLinks>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
