import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrencySign } from "./../../../functions/Functions";
import MiniCartItem from "./MiniCartItem";

class Items extends Component {
  render() {
    const { cartItems, value } = this.props;

    const items = cartItems.map((item, i) => {
      return (
        <MiniCartItem
          key={i}
          name={item.name}
          currency={setCurrencySign(item.prices[value].currency)}
          amount={item.prices[value].amount}
          count={item.count}
          images={item.gallery}
          product={item}
          attributes={item.attributes}
        />
      );
    });

    return items;
  }
}

export default connect((state) => ({
  cartItems: state.cart.cartItems,
  value: state.value.value,
}))(Items);
