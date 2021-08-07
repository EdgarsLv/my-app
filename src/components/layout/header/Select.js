import React, { Component } from "react";
import { setCurrencySign } from "./../../functions/Functions";
import { connect } from "react-redux";
import styled from "styled-components";
import { setCurrencyValue } from "./../../../actions/currValueActions";
import { fetchCurrencies } from "./../../../actions/currencyActions";

class Select extends Component {
  state = {
    selection: "USD",
    visible: false,
  };

  componentDidMount() {
    this.props.fetchCurrencies();
  }
  setVisible = () => {
    if (!this.props.show) {
      this.setState((state) => {
        return { visible: !state.visible };
      });
    }
  };

  render() {
    if (!this.props.currencies) return <p>loading...</p>;

    const { currencies } = this.props.currencies.data;

    const currency = currencies.map((el, i) => {
      return (
        <Cur
          key={i}
          onClick={() => {
            this.setState({ selection: el });
            this.props.setCurrencyValue(i);
            this.setVisible();
          }}
        >
          {setCurrencySign(el)} {el}
        </Cur>
      );
    });
    const { selection, visible } = this.state;
    return (
      <Container>
        <Sign visible={visible} onClick={() => this.setVisible()}>
          {setCurrencySign(selection)}
        </Sign>
        <Switcher visible={visible}>{currency}</Switcher>
      </Container>
    );
  }
}

export default connect(
  (state) => ({
    currencies: state.currencies.currencies,
    show: state.show.show,
  }),
  {
    fetchCurrencies,
    setCurrencyValue,
  }
)(Select);

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Switcher = styled.div`
  position: absolute;
  display: ${({ visible }) => (visible ? "block" : "none")};
  top: -8px;
  left: 20px;
  width: 116px;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
`;
const Cur = styled.div`
  padding: 10px 40px 10px 20px;
  font-size: 18px;
  line-height: 28.8px;
  font-weight: 600;
  cursor: pointer;

  :nth-child(1) {
    padding-top: 20px;
  }
  :nth-last-child(1) {
    padding-bottom: 20px;
  }
`;
const Sign = styled.div`
  position: absolute;
  top: -40px;
  left: 40px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;

  ::after {
    content: ${({ visible }) => (visible ? '"ᐱ"' : '"ᐯ"')};
    position: absolute;
    top: 5px;
    left: 10px;
    padding: 0 10px;
    font-size: 10px;
  }
`;
