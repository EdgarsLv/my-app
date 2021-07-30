import React, { Component } from "react";
import { setCurrencySign } from "./../../functions/Functions";
import { connect } from "react-redux";
import styled from "styled-components";
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
      <Container>
        <Sel onChange={(e) => this.props.setCurrencyValue(e.target.value)}>
          {options}
        </Sel>
      </Container>
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

const Container = styled.div`
  position: absolute;
  bottom: 38px;
  right: -10px;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 10px;
    width: 50px;
    height: 21px;
    background: white;
    z-index: 1;
  }
  ::after {
    content: "v";
    position: absolute;
    top: 5px;
    right: 50px;
    font-size: 12px;
    z-index: 1;
  }
`;
const Sel = styled.select`
  position: absolute;
  right: -40px;
  border: none;
  appearance: none;
  outline: none;
  box-shadow: none;
  padding: 0px 28px 0 20px;
  cursor: pointer;
  font-size: 18px;
  margin-right: 30px;
  :focus {
    outline: none;
  }

  option {
    font-size: 18px;
  }
`;
