import React, { Component } from "react";
import styled from "styled-components";
import { setCurrencySign } from "../../functions/Functions";

class Price extends Component {
  render() {
    const { prices, value } = this.props;

    return (
      <>
        <P>PRICE:</P>
        <PriceContainer>
          <p>
            {setCurrencySign(prices[value].currency)}
            {prices[value].amount}
          </p>
        </PriceContainer>
      </>
    );
  }
}

export default Price;

const PriceContainer = styled.div`
  margin-top: 20px;
  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 18px;
  }
`;

const P = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  text-transform: uppercase;
  font-family: "Roboto Condensed", sans-serif;
`;
