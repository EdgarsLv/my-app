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
        <div
          style={{ cursor: "pointer" }}
          onClick={() => countIncrease(product)}
        >
          <AiOutlinePlus />
        </div>
        <div style={{ border: "none" }}>{count}</div>
        <div style={{ cursor: "pointer" }}>
          {count > 1 ? (
            <AiOutlineMinus
              style={{ padding: "10px", boxSizing: "content-box" }}
              onClick={() => countDecrease(product)}
            />
          ) : (
            <MdDelete
              style={{ padding: "10px", boxSizing: "content-box" }}
              onClick={() => removeFromCart(product)}
            />
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
  }
`;
