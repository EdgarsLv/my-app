import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { graphql } from "@apollo/client/react/hoc";
import "./App.css";
import Products from "./components/pages/products/Products";
import Description from "./components/pages/description/Description";
import Header from "./components/layout/header/Header";
import Main from "./components/layout/main/Main";
import Cart from "./components/pages/cart/Cart";
import { PRODUCTS_TECH } from "./graphql/Querys";

class App extends Component {
  state = {
    products: [],
    cartItems: [],
    loading: true,
    category: "",
    currencies: 0,
    show: false,
  };

  componentDidMount() {
    setTimeout(() => this.update(), 1500);
  }
  update() {
    this.setState({
      products: this.props.data.category.products,
      loading: this.props.data.loading,
      category: this.props.data.category.name,
    });
  }

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.name === product.name) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems: cartItems });
  };

  removeFromCart = (product) => {
    // console.log(item, name);
    // window.confirm(`Remove ${name} from cart?`);

    const cartItems = this.state.cartItems.slice();
    let index = cartItems.indexOf(product);
    cartItems.splice(index, 1);
    this.setState({ cartItems: cartItems });
  };

  countIncrease = (product) => {
    const cartItems = this.state.cartItems.slice();
    let index = cartItems.indexOf(product);
    cartItems[index].count++;
    // cartItems.forEach((item) => {
    //   if (item.name === product.name) {
    //     item.count++;
    //   }
    // });
    this.setState({ cartItems: cartItems });
  };

  countDecrease = (product) => {
    const cartItems = this.state.cartItems.slice();
    let index = cartItems.indexOf(product);
    if (cartItems[index].count > 1) {
      cartItems[index].count--;
    }
    this.setState({ cartItems: cartItems });
    // cartItems.forEach((item) => {
    //   if (item.name === product.name) {
    //     if (item.count > 1) item.count--;
    //   }
    // });
  };

  setCurrencies = (e) => {
    this.setState({ currencies: e });
  };

  openMinicart = () => {
    // e.stopPropagation();
    this.setState((state) => {
      return { show: !state.show };
    });
  };

  render() {
    return (
      <Main
        currencies={this.state.currencies}
        cartItems={this.state.cartItems}
        removeFromCart={this.removeFromCart}
        countIncrease={this.countIncrease}
        countDecrease={this.countDecrease}
        open={this.state.show}
        openMinicart={this.openMinicart}
      >
        <Header
          setCurrencies={this.setCurrencies}
          count={this.state.cartItems.length}
          openMinicart={this.openMinicart}
        />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Products data={this.state} addToCart={this.addToCart} />
            )}
          />
          <Route
            path="/cart"
            render={() => (
              <Cart
                currencies={this.state.currencies}
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}
                countIncrease={this.countIncrease}
                countDecrease={this.countDecrease}
              />
            )}
          />
          <Route path="/description/:name" component={Description} />
        </Switch>
      </Main>
    );
  }
}

export default graphql(PRODUCTS_TECH)(App);
