import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/Header/Header"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <SEO title="Hinoga" />
    <section style={{ width: "100%", margin: "0 auto", textAlign: "center" }}>
      <Header />
    </section>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
