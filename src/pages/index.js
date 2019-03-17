import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({data}) => {
  const page = data.contentful.startPage;
  return (
    <Layout>
      <SEO title={page.pageTitle} description={page.pageDescription} />
      <article>
        <h1>Välkommen</h1>
      </article>

      <article>
        <h1>Sponsorer</h1>
      </article>
    </Layout>
  )
}

export const query = graphql`
    query {
        contentful {
            startPage {
                id
                pageTitle
                pageDescription
                content {
                    __typename
                    ... on Contentful_ContentSection {
                        id
                        title
                        body
                    }
                    ... on Contentful_Event {
                        id
                        title
                        date
                        description
                    }
                }
            }
        }
    }
`;
