import React, { Component } from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { connect } from "react-redux";
import {
  removeFromCart,
  countDecrease,
  countIncrease,
} from "../../../../actions/cartActions";

class Counter extends Component {
  render() {
    const { count, product, countDecrease, countIncrease, removeFromCart } =
      this.props;

    return (
      <CounterBtn>
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
      </CounterBtn>
    );
  }
}

export default connect(() => ({}), {
  removeFromCart,
  countIncrease,
  countDecrease,
})(Counter);

const CounterBtn = styled.div`
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
