import React, { Component } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { setCurrencySign } from "../../functions/Functions";
import { connect } from "react-redux";
import {
  countDecrease,
  removeFromCart,
  countIncrease,
} from "../../../actions/cartActions";

class Cart extends Component {
  render() {
    const items = this.props.cartItems.map((item, i) => {
      return (
        <CartItem
          key={i}
          name={item.name}
          currency={setCurrencySign(item.prices[this.props.value].currency)}
          amount={item.prices[this.props.value].amount}
          count={item.count}
          images={item.gallery}
          product={item}
          attributes={item.attributes}
          removeFromCart={this.props.removeFromCart}
          countIncrease={this.props.countIncrease}
          countDecrease={this.props.countDecrease}
        />
      );
    });

    return (
      <Container>
        <Title>
          <h2>Cart {this.props.cartItems.length === 0 && "is empty"}</h2>
        </Title>
        {items}
      </Container>
    );
  }
}

export default connect(
  (state) => ({
    cartItems: state.cart.cartItems,
    value: state.value.value,
  }),
  {
    removeFromCart,
    countIncrease,
    countDecrease,
  }
)(Cart);

const Container = styled.div`
  min-height: calc(100vh - 160px);
`;
const Title = styled.div`
  width: 100%;

  margin-bottom: 60px;
  h2 {
    text-transform: uppercase;
    font-size: 32px;
    line-height: 40px;
    font-weight: 700;
  }
`;
