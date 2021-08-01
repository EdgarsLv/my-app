import React, { Component } from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { connect } from "react-redux";
import {
  countDecrease,
  removeFromCart,
  countIncrease,
} from "../../../actions/cartActions";

class Counter extends Component {
  render() {
    const { count, product, removeFromCart, countDecrease, countIncrease } =
      this.props;
    return (
      <Count>
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
      </Count>
    );
  }
}

export default connect(() => ({}), {
  removeFromCart,
  countIncrease,
  countDecrease,
})(Counter);

const Count = styled.div`
  width: 45px;
  margin: 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    width: 45px;
    height: 45px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    :nth-of-type(2) {
      border: none;
      cursor: inherit;
    }
    :nth-of-type(3) {
      svg {
        padding: 10px;
        box-sizing: content-box;
      }
    }
  }
`;
