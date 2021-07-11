import React, { Component } from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

class MiniCartItem extends Component {
  render() {
    const {
      name,
      currency,
      amount,
      count,
      product,
      images,
      attributes,
      removeFromCart,
      countIncrease,
      countDecrease,
    } = this.props;

    const choice = attributes.map((el, i) => {
      return (
        <Selected key={i}>
          <p>{el.name}</p>
          <div
            style={
              el.name === "Color" ? { background: `${el.items[0].value}` } : {}
            }
          >
            {el.name === "Color" ? "" : el.items[0].value}
          </div>
        </Selected>
      );
    });
    return (
      <CartItem>
        <Properties>
          <p>Brand Name</p>
          <p>{name}</p>
          <p>
            {currency}
            {amount}
          </p>
          <Choice>{choice}</Choice>
        </Properties>
        <CounterAndImage>
          <Counter>
            <div onClick={() => countIncrease(product)}>
              <AiOutlinePlus />
            </div>
            <div>{count}</div>
            <div>
              {count > 1 ? (
                <AiOutlineMinus onClick={() => countDecrease(product)} />
              ) : (
                <MdDelete onClick={() => removeFromCart(product)} />
              )}
            </div>
          </Counter>
          <div style={{ width: "105px", height: "137px" }}>
            <img
              style={{ width: "105px", height: "100%" }}
              src={images[0]}
              alt={name}
            />
          </div>
        </CounterAndImage>
      </CartItem>
    );
  }
}

export default MiniCartItem;

const CartItem = styled.div`
  position: relative;
  min-height: 137px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 42px;
`;

const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 10px;
  div {
    border: 1px solid black;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :nth-of-type(2) {
      border: none;
      cursor: inherit;
    }
  }
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
const Choice = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 17px;
`;
const Selected = styled.div`
  margin-right: 5px;
  p {
    font-size: 12px;
    font-weight: 600;
    line-height: 5px;
  }
  div {
    display: flex;
    font-size: 14px;
    text-transform: uppercase;
    min-width: 24px;
    height: 24px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CounterAndImage = styled.div`
  display: flex;
`;
