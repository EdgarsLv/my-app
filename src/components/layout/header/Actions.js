import React, { Component } from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { connect } from "react-redux";
import { fetchCurrencies } from "./../../../actions/currencyActions";
import { setCurrencyValue } from "./../../../actions/currValueActions";
import { setCurrencySign } from "./../../functions/Functions";

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
          {setCurrencySign(el)} {el}
        </option>
      );
    });

    return (
      <Action>
        <div>
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
        </div>
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    position: relative;
    :nth-child(1)::after {
      content: "ᐯ";
      position: absolute;
      top: 7px;
      right: 30px;
      font-size: 8px;
    }
    select {
      position: absolute;
      right: -40px;
      border: none;
      appearance: none;
      outline: none;
      box-shadow: none;
      padding: 5px 60px 10px 20px;
      cursor: pointer;
      :focus {
        outline: none;
      }

      option {
        font-size: 18px;
      }
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
