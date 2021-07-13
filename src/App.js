import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Description from "./components/pages/description/Description";
import Header from "./components/layout/header/Header";
import Main from "./components/layout/main/Main";
import Cart from "./components/pages/cart/Cart";
import Clothes from "./components/pages/products/Clothes";
import Tech from "./components/pages/products/Tech";

class App extends Component {
  state = {
    show: false,
  };

  openMinicart = () => {
    this.setState((state) => {
      return { show: !state.show };
    });
  };

  render() {
    return (
      <Main open={this.state.show} openMinicart={this.openMinicart}>
        <Header openMinicart={this.openMinicart} />
        <Switch>
          <Route path="/tech" exact render={() => <Tech />} />
          <Route path="/clothes" exact render={() => <Clothes />} />
          <Route path="/cart" exact render={() => <Cart />} />
          <Route path="/:name/description/:name" component={Description} />
        </Switch>
      </Main>
    );
  }
}

export default App;
