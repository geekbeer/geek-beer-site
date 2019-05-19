import React from "react"
import Marked from "marked"
import {graphql} from "gatsby";

export default ({ content }) => {
  return (
    <div>
      <article dangerouslySetInnerHTML={{__html: Marked(content[0].body)}}/>
    </div>
  )
}

export const query = graphql`
    fragment pageContent on Contentful_Page {
        id
        uri
        pageTitle
        pageDescription
        content {
            __typename
            ... on Contentful_ContentSection {
                id
                title
                body
            }
        }
    }
`;
