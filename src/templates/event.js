import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const event = data.contentful.event;
  return (
    <Layout>
      <SEO title={`Geek Beer Meetup ${event.title}`}/>
      <div>
        <h1>{event.title}</h1>
        <span>{event.date}</span>
        <p>
          {event.description}
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
    query($id: ID!) {
        contentful {
            event(id: $id) {
                id
                title
                uri
                description
                date
            }
        }
    }
`;
