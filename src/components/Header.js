import React, { useState } from "react";
import icon from "../images/free-icon-font-shopping-cart-3916598.svg";
import Order from "./Order";
const showOrders = (props) => {
  // console.log(props.onDelete);
  let summa = 0;
  props.orders.forEach((elem) => (summa += Number.parseFloat(elem.prise)));
  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="summa">Сумма: {new Intl.NumberFormat().format(summa)}$</p>
    </div>
  );
};
const showNothing = () => {
  return (
    <div className="empty">
      <h2>Товаров нет</h2>
    </div>
  );
};
const Header = (props) => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div>
        <span className="logo">React Website</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакт</li>
          <li>Кабинет</li>
        </ul>
        <img
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-card-button ${cartOpen && "active"}`}
          src={icon}
          alt=""
        />
      </div>
      {cartOpen && (
        <div className="shop-cart">
          {props.orders.length > 0 ? showOrders(props) : showNothing()}
        </div>
      )}
      <div className="presentation"></div>
    </header>
  );
};

export default Header;
