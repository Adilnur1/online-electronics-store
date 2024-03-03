import React, { Component } from "react";

export class Catigories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Все",
        },
        {
          key: "phones",
          name: "Телефоны",
        },
        {
          key: "laptop",
          name: "Ноутбуки",
        },
        {
          key: "imac",
          name: "Маниторы",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.id} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Catigories;
