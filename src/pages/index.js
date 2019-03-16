import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Välkommen" keywords={[`gatsby`, `application`, `react`]} />
    <article>
      <h1>Välkommen</h1>
    </article>

    <article>
      <h1>Sponsorer</h1>
    </article>
  </Layout>
)

export default IndexPage
