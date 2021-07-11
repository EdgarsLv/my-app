import React, { Component } from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { connect } from "react-redux";
import { fetchCurrencies } from "./../../../actions/currencyActions";
import { setCurrencyValue } from "./../../../actions/currValueActions";

class Actions extends Component {
  componentDidMount() {
    this.props.fetchCurrencies();
  }
  render() {
    if (!this.props.currencies) return <p>loading...</p>;

    const { currencies } = this.props.currencies.data;

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
          onChange={(e) => this.props.setCurrencyValue(e.currentTarget.value)}
        >
          {options}
        </select>
        <Cart onClick={() => this.props.openMinicart()}>
          <FiShoppingCart style={{ fontSize: "20px" }} />
          {this.props.cartItems.length > 0 && (
            <div>
              <p>{this.props.cartItems.length}</p>
            </div>
          )}
        </Cart>
      </Action>
    );
  }
}

export default connect(
  (state) => ({
    cartItems: state.cart.cartItems,
    currencies: state.currencies.currencies,
  }),
  {
    fetchCurrencies,
    setCurrencyValue,
  }
)(Actions);

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
