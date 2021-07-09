import React, { Component } from "react";
import styled from "styled-components";
import { CURRENCIES } from "../../../graphql/Querys";
import { FiShoppingCart } from "react-icons/fi";
import { graphql } from "@apollo/client/react/hoc";

class Actions extends Component {
  render() {
    const { loading, currencies } = this.props.data;

    if (loading) return <p>loading...</p>;

    const options = currencies.map((el, i) => {
      return (
        <option key={i} value={i}>
          {el}
        </option>
      );
    });

    return (
      <Action>
        <select
          style={{ marginRight: "20px" }}
          onChange={(e) => this.props.setCurrencies(e.currentTarget.value)}
        >
          {options}
        </select>
        <Cart onClick={() => this.props.openMinicart()}>
          <FiShoppingCart style={{ fontSize: "20px" }} />
          {this.props.count > 0 && (
            <div>
              {/* {" "} */}
              <p>{this.props.count}</p>
            </div>
          )}
        </Cart>
      </Action>
    );
  }
}
export default graphql(CURRENCIES)(Actions);

const Action = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  select {
    border: none;
    :focus {
      outline: none;
    }
  }
`;
const Cart = styled.div`
  position: relative;
  cursor: pointer;

  div {
    position: absolute;
    top: -12px;
    right: -12px;
    width: 20px;
    height: 20px;
    background: black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: white;
      font-weight: 700;
      font-family: Roboto, sans-serif;
      font-size: 14px;
    }
  }
`;
