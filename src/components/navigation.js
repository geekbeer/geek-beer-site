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

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {isOpen: false}
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  }

  render() {
    let className = 'navigation';
    let nav = 'nav-wrapper';
    if (this.state.isOpen) {
      className += ' is-open';
      nav += ' is-open';
    }

    return (
      <div className={nav}>
        <button className="nav-btn" onClick={this.toggleMenu} type="button">M</button>
        <nav className={className}>
          <ul className="nav-list">
            {navItems()}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
