import gql from 'graphql-tag';

const pageQuery = gql`
    query ($uri: String!) {
        page(uri: $uri) {
            id
            pageTitle
            pageDescription
            content {
                __typename
                ... on ContentSection {
                    id
                    title
                    body
                }
            }
        }
    }
`;

export default pageQuery;
