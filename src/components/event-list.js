import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const listItems = (data) => {
  return data.contentful.events.map((event) => {
    return (
      <li key={event.id}>
        <Link to={`/meetup/${event.uri}`}>{event.title}</Link>
      </li>
    );
  });
};

export default () => {
  const data = useStaticQuery(graphql`
      query query {
          contentful {
              events {
                  id
                  uri
                  title
                  description
              }
          }
      }
  `);

  return (
    <ul>
      {listItems(data)}
    </ul>
  )
}
