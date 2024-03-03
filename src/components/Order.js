import React, { Component } from "react";
import "boxicons";
export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img src={this.props.item.img} />
        <h2>{this.props.item.model}</h2>
        <p>{this.props.item.prise}$</p>
        <p
          onClick={() => {
            this.props.onDelete(this.props.item.id);
          }}
        >
          <box-icon name="trash" type="solid"></box-icon>
        </p>
      </div>
    );
  }
}

export default Order;
