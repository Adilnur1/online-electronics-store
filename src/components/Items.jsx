import React, { Component } from "react";
import Item from "./Item";

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map((elem) => (
          <Item
            key={elem.id}
            item={elem}
            onAdd={this.props.onAdd}
            onDelete={this.props.onDelete}
            onShowItem={this.props.onShowItem}
          />
        ))}
      </main>
    );
  }
}

export default Items;
