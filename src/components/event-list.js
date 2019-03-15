import React from "react"

export default class EventList extends React.Component {
  listItems = () => {
    const list = [1,2,3,4,5,6,7,8];
    let items = [];

    for(let i = 0; list.length > i; i = i + 1) {
      items.push(<li>{list[i]}</li>);
    }

    return items;
  }

  render() {
    return (
      <ul>
        {this.listItems()}
      </ul>
    )
  }
}
