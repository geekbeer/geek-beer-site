import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const EventsPage = () => (
  <Layout>
    <SEO title="Events" />
    <h1>Tidigare events</h1>

    <Link to="/">Start</Link>
  </Layout>
)

export default EventsPage
