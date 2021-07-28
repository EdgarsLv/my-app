import React, { Component } from "react";
import { setCurrencySign } from "./../../functions/Functions";
import { connect } from "react-redux";
import { setCurrencyValue } from "./../../../actions/currValueActions";
import { fetchCurrencies } from "./../../../actions/currencyActions";

class Select extends Component {
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
      <select
        style={{ marginRight: "20px" }}
        onChange={(e) => this.props.setCurrencyValue(e.target.value)}
      >
        {options}
      </select>
    );
  }
}

export default connect(
  (state) => ({
    currencies: state.currencies.currencies,
  }),
  {
    fetchCurrencies,
    setCurrencyValue,
  }
)(Select);
