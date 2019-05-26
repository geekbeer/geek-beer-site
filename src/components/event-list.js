import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const listItems = (data) => {
  return data.contentful.events.map((event) => {
    return (
      <li key={event.id}>
        <Link to={`/meetup/${event.uri}`} className="event-list-link">
          <article className="event-list-article">
            <h1 className="event-list-title">{event.title}</h1>
            <p>dasf kljasdlfj alskdfjla kdsfjla sdjflaksd jflaksjd flads lf</p>
            <span className="event-list-pseudo-link">Läs mer...</span>
          </article>
        </Link>
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
    <ul className="event-list">
      {listItems(data)}
    </ul>
  )
}
