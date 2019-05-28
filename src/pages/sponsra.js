import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from "gatsby";
import PageContent from "../components/page-contet";

const SponsorPage = ({ data }) => (
  <Layout>
    <SEO title={page.pageTitle} />
    <PageContent content={page.content}/>
  </Layout>
);

export const query = graphql`
    query {
        contentful {
            page(uri: "/sponsorship") {
                ...pageContent
            }
        }
    }
`;

export default SponsorPage
