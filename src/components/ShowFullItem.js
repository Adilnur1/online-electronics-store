import React, { Component } from "react";
import icon from "../images/free-icon-font-shopping-cart-add-3916604.svg";

export class ShowFullItem extends Component {
  render() {
    return (
      <div className="full-item">
        <div>
          <img
            src={this.props.item.img}
            onClick={() => this.props.onShowItem(this.props.item)}
          />
          <h2>{this.props.item.model}</h2>
          <p>{this.props.item.desc}</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          beatae aperiam nostrum repellendus, maiores cupiditate sequi labore
          suscipit dolorem eos assumenda, praesentium incidunt
          <p></p>
          <b>{this.props.item.prise}$</b>
          <p
            className="add-to-card"
            onClick={() => {
              this.props.onAdd(this.props.item);
            }}
          >
            +
          </p>
        </div>
      </div>
    );
  }
}

export default ShowFullItem;
