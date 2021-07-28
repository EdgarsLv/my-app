import React, { Component } from "react";
import styled from "styled-components";
import Counter from "./Counter";
import Image from "./Image";
import Attributes from "./Attributes";

class MiniCartItem extends Component {
  render() {
    const { name, currency, amount, count, product, images, attributes } =
      this.props;

    return (
      <CartItem>
        <Properties>
          <p>Brand Name</p>
          <p>{name}</p>
          <p>
            {currency}
            {amount}
          </p>
          <Attributes attributes={attributes} />
        </Properties>
        <CounterAndImage>
          <Counter count={count} product={product} />
          <Image image={images[0]} alt={name} />
        </CounterAndImage>
      </CartItem>
    );
  }
}

export default MiniCartItem;

const CartItem = styled.div`
  position: relative;
  min-height: 137px;
  min-width: calc(325px - 32px);
  display: flex;
  justify-content: space-between;
  margin-bottom: 42px;
`;

const Properties = styled.div`
  position: relative;
  width: 100%;
  p {
    :nth-child(1) {
      margin: 5px 0;
      font-weight: 600;
    }
    :nth-child(3) {
      font-weight: 600;
      margin-top: 15px;
    }
  }
`;
// const Choice = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: flex-end;
//   margin-top: 32px;
// `;
// const Selected = styled.div`
//   margin-right: 5px;

//   p {
//     font-size: 10px;
//     font-weight: 600;
//     line-height: 5px;
//   }
//   div {
//     display: flex;
//     font-size: 14px;
//     text-transform: uppercase;

//     min-width: 24px;

//     padding: 0 5px;
//     height: 24px;
//     border: 1px solid black;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-family: "Source Sans Pro", sans-serif;
//   }
// `;

const CounterAndImage = styled.div`
  display: flex;
`;
