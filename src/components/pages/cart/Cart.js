import React, { Component } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { setCurrencySign } from "../../functions/Functions";

class Cart extends Component {
  render() {
    const {
      cartItems,
      currencies,
      removeFromCart,
      countIncrease,
      countDecrease,
    } = this.props;

    const items = cartItems.map((item, i) => {
      return (
        <CartItem
          key={i}
          name={item.name}
          currency={setCurrencySign(item.prices[currencies].currency)}
          amount={item.prices[currencies].amount}
          count={item.count}
          images={item.gallery}
          product={item}
          attributes={item.attributes}
          removeFromCart={removeFromCart}
          countIncrease={countIncrease}
          countDecrease={countDecrease}
        />
      );
    });

    return (
      <Container>
        <Title>
          <h2>Cart {cartItems.length === 0 && "is empty"}</h2>
        </Title>
        {items}
      </Container>
    );
  }
}

export default Cart;

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
