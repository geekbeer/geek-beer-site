import gql from "graphql-tag";

const eventsQuery = gql(`
query {
    events {
        id
        title
        uri
        excerpt
        description
        date
        venue {
            id
            title
            organization
            city
            address
            address2
            postalCode
        }
        talks {
            id
            title
            description
            speaker {
                id
                name
                company
                twitter
                image {
                    id
                    title
                    description
                    width
                    height
                    url
                    fileSize
                    fileType
                }
            }
        }
    }
}
`);

export default eventsQuery;
