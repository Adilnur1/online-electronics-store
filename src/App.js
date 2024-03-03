import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Catigories from "./components/Catigories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          img: "https://asiastore.kg/image/cachewebp/catalog/iphone/iphone15/15pro/bluetitanium/iphone_15_pro_max_blue_titanium_pdp_image_position-1__ww-en-1200x1200.webp",
          desc: "lorem ipsum dolor sit amet, consectetur adpisition",
          model: "Iphone 15 pro max",
          prise: "999.99",
          category: "phones",
        },
        {
          id: 2,
          img: "https://asiastore.kg/image/cachewebp/catalog/iphone/iphone14/iphone14promax/gold/wwen_iphone14promax_q422_gold_pdp-images_position-1a-1200x1200.webp  ",
          desc: "lorem ipsum dolor sit amet, consectetur adpisition",
          model: "Iphone 14 pro max",
          prise: "988.99",
          category: "phones",
        },
        {
          id: 3,
          img: "https://iparkspb.ru/wp-content/uploads/2023/04/apple-iphone-13-pro-max-128gb-s.webp ",
          desc: "lorem ipsum dolor sit amet, consectetur adpisition",
          model: "Iphone 13 pro max",
          prise: "888.99",
          category: "phones",
        },
        {
          id: 4,
          img: "https://m.media-amazon.com/images/I/71umuN8XVeL.jpg",
          desc: "lorem ipsum dolor sit amet, consectetur adpisition",
          model: "Iphone 12 pro max",
          prise: "777.99",
          category: "phones",
        },
        {
          id: 5,
          img: "https://www.istore.kg/media/products/mac16pro_%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F_V5RFA2W.webp",
          desc: "lorem ipsum dolor sit amet, consectetur adpisition",
          model: "MacBook Pro",
          prise: "777.99",
          category: "laptop",
        },
        {
          id: 6,
          img: "https://istore.kg/media/products/macbook-air-space-gray-select-201810.webp",
          desc: "lorem ipsum dolor sit amet, consectetur adpisition",
          model: "MacBook Air 13.3",
          prise: "788.99",
          category: "laptop",
        },
        {
          id: 7,
          img: "https://login.kg/image/cache/catalog/new/Notebook/Apple/MacBook%20Air%2015%202023/4-500x400.jpg",
          desc: "lorem ipsum dolor sit amet, consectetur adpisition",
          model: "MacBook Air 15.3",
          prise: "799.99",
          category: "laptop",
        },
        {
          id: 8,
          img: "https://asiastore.kg/image/cache/catalog/mac/macbookairm2/spacegray/macbook-air-spacegray-gallery1-20220606-1200x1200.jpeg",
          desc: "lorem ipsum dolor sit amet, consectetur adpisition",
          model: "MacBook Air 13.6",
          prise: "799.99",
          category: "laptop",
        },
        {
          id: 9,
          img: "https://object.pscloud.io/cms/cms/Photo/img_0_437_133_0_1.jpg",
          desc: "lorem ipsum dolor sit amet, consectetur adpisition",
          model: "iMac 21.5",
          prise: "1200.99",
          category: "imac",
        },
        {
          id: 10,
          img: "https://asiastore.kg/image/cache/catalog/imac/24inch/blue/imac-24-blue-cto-hero-202104-1200x1200.jpeg",
          desc: "lorem ipsum dolor sit amet, consectetur adpisition",
          model: "iMac 24",
          prise: "1299.99",
          category: "imac",
        },
        {
          id: 11,
          img: "https://object.pscloud.io/cms/cms/Photo/img_0_437_136_3_1.jpg",
          desc: "lorem ipsum dolor sit amet, consectetur adpisition",
          model: "iMac 27",
          prise: "1399.99",
          category: "imac",
        },
        {
          id: 12,
          img: "https://m.onlinetrade.ru/img/items/m/1042327_4.jpg",
          desc: "lorem ipsum dolor sit amet, consectetur adpisition",
          model: "iMac 27",
          prise: "1199.99",
          category: "imac",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Catigories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            item={this.state.fullItem}
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
          />
        )}
        <Footer />
      </div>
    );
  }
  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }
  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }
  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}

export default App;
