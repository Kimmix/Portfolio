import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <div className="section">
      <div className="background">
        <h1 className="background-text">
          KMI <br /> TL 59
        </h1>
      </div>
      <div className="title-container">
        <div className="container">
          <h1 className="title">
            HELLO <br /> &nbsp;&nbsp;WORLD
            <span style={{ color: "#46D5E2" }}>,</span>
            <div class="blinking-cursor"></div>
          </h1>
        </div>
        <div className="container"  style={{ width: "400px" }}>
          <p className="subtitle">
            Web application developer, fullstack and more.
          </p>
        </div>
      </div>
    </div>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <div className="section">aaaaaaas</div>
  </Layout>
)

export default IndexPage
