import React, { Component } from "react";
import styled from "styled-components";
import { setCurrencySign } from "./../../functions/Functions";

class Info extends Component {
  render() {
    const { name, currency, amount } = this.props;
    return (
      <Container>
        <p>{name}</p>
        <p>
          {setCurrencySign(currency)} {amount}
        </p>
      </Container>
    );
  }
}

export default Info;

const Container = styled.div`
  margin: 8px 16px 16px 16px;

  p {
    font-weight: 300;
    font-size: 18px;
    line-height: 28.8px;
    :nth-child(2) {
      font-weight: 600;
    }
  }
`;
