import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EventList from "../components/event-list"

const EventsPage = () => (
  <Layout>
    <SEO title="Meetups" />
    <h1>Geek Beer Meetups</h1>
    <EventList/>
  </Layout>
)

export default EventsPage
