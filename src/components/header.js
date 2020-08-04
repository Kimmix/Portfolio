import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = () => (
  <header>
    <div class="topnav">
      <div style={{ float: "right" }}>
        <a class="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
