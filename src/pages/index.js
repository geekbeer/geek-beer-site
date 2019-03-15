import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EventList from "../components/event-list"

const IndexPage = () => (
  <Layout>
    <SEO title="Välkommen" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Välkommen</h1>
    <EventList/>
    <Link to="/events/">Tidigare events</Link>
  </Layout>
)

export default IndexPage
