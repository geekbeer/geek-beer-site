import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from "gatsby";

import PageContent from "../components/page-contet";

const CommunityPage = ({ data }) => {
  const page = data.contentful.page;
  return (
    <Layout>
      <SEO title={page.pageTitle} />
      <PageContent content={page.content}/>
    </Layout>
  );
};

export const query = graphql`
    query {
        contentful {
            page(uri: "/community") {
                ...pageContent
            }
        }
    }
`;

export default CommunityPage
