import React from "react";
import {Link} from "gatsby";

function navItems() {
  const items = [
    {
      text: 'Start',
      url: '/'
    },
    {
      text: 'Meetups',
      url: '/meetups'
    },
    {
      text: 'Community',
      url: '/community'
    },
    {
      text: 'Vad är Geek Beer?',
      url: '/about'
    },
    {
      text: 'Sponsra!',
      url: '/sponsra'
    },
    {
      text: 'Jobblistan',
      url: '/work'
    }
  ];

  return items.map(function(item, index) {
    return (
      <li className="nav-list-item" key={index}>
        <Link activeClassName="active" className="nav-list-link" to={item.url}>{item.text}</Link>
      </li>
    );
  });
}

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        {navItems()}
      </ul>
    </nav>
  );
};

export default Navigation;
