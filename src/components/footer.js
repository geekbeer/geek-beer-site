import React from "react"

const Footer = () => (
  <footer
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <p>
        Copyright © {new Date().getFullYear()} Geek Beer. All rights reserved.
      </p>
    </div>
  </footer>
)

export default Footer
