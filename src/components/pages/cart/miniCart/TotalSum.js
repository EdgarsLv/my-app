import React, { Component } from "react";
import styled from "styled-components";
import { setCurrencySign } from "./../../../functions/Functions";

class TotalSum extends Component {
  render() {
    const { cartItems, value } = this.props;

    let total = cartItems.reduce(
      (a, c) => a + c.prices[value].amount * c.count,
      0
    );

    return (
      <Total>
        <span>Total</span>
        <span>
          {cartItems.length > 0 &&
            setCurrencySign(cartItems[0].prices[value].currency)}
          {total.toFixed(2)}
        </span>
      </Total>
    );
  }
}

export default TotalSum;

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
