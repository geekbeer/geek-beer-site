import gql from "graphql-tag";

const eventQuery = gql(`
query ($uri: String!) {
  event(uri: $uri) {
    id
    title
    excerpt
    description
    date
  }
}
`);

export default eventQuery;
