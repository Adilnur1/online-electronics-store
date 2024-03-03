import React, { Component } from "react";
import icon from "../images/free-icon-font-shopping-cart-add-3916604.svg";
export class Item extends Component {
  render() {
    return (
      <div className="item">
        <img
          src={this.props.item.img}
          onClick={() => this.props.onShowItem(this.props.item)}
        />
        <h2>{this.props.item.model}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.prise}$</b>
        <p
          className="add-to-card"
          onClick={() => {
            this.props.onAdd(this.props.item);
          }}
        >
          <img src={icon} alt="" />
        </p>
      </div>
    );
  }
}

export default Item;
