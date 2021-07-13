import React, { Component } from "react";
import styled from "styled-components";
import MiniCartItem from "./MiniCartItem";
import { setCurrencySign } from "../../../functions/Functions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  removeFromCart,
  countDecrease,
  countIncrease,
} from "../../../../actions/cartActions";

class MiniCart extends Component {
  render() {
    const { cartItems, value, removeFromCart, countIncrease, countDecrease } =
      this.props;

    let total = cartItems.reduce(
      (a, c) => a + c.prices[value].amount * c.count,
      0
    );
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
          removeFromCart={removeFromCart}
          countIncrease={countIncrease}
          countDecrease={countDecrease}
        />
      );
    });

    return (
      <MiniCartOverlay
        onClick={() => this.props.openMinicart()}
        open={this.props.open}
      >
        <MinCart onClick={(e) => e.stopPropagation()}>
          <BagTitle>
            <span>My Bag,</span> <span> {cartItems.length} items</span>
          </BagTitle>

          {items}

          <Total>
            <span>Total</span>
            <span>
              {cartItems.length > 0 &&
                setCurrencySign(cartItems[0].prices[value].currency)}
              {total.toFixed(2)}
            </span>
          </Total>
          <ButtonsContainer>
            <Link to="/cart">view bag</Link>
            <Link to="#">checkout</Link>
          </ButtonsContainer>
        </MinCart>
      </MiniCartOverlay>
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
)(MiniCart);

const MiniCartOverlay = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  bottom: 0;
  width: 100%;
  /* min-height: calc(100vh - 80px); */
  background: rgba(57, 55, 72, 0.22);
  z-index: 2;
  display: ${({ open }) => (!open ? "none" : "block")};
`;
const MinCart = styled.div`
  position: absolute;
  top: 0;
  right: 135px;
  min-width: 325px;
  background: white;
  padding: 8px 16px 0;
`;
const BagTitle = styled.div`
  margin-bottom: 23px;
  span {
    :nth-child(1) {
      font-weight: 700;
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 35px 0 30px;
  a {
    :nth-child(1) {
      background: white;
      text-transform: uppercase;
      text-decoration: none;
      padding: 14px 32px;
      font-weight: 600;
      font-size: 14px;
      color: black;
      border: 1px solid black;
      cursor: pointer;
    }
    :nth-child(2) {
      background: var(--accent-color);
      text-transform: uppercase;
      text-decoration: none;
      color: white;
      padding: 14px 32px;
      font-weight: 600;
      font-size: 14px;
      border: none;
      cursor: pointer;
    }
  }
`;
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-weight: 700;
    :nth-child(1) {
      font-family: "Roboto", sans-serif;
    }
  }
`;
