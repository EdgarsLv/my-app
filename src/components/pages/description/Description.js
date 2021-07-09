import React, { Component } from "react";
import styled from "styled-components";
import Gallery from "./Gallery";
import Attributes from "./Attributes";
import { setCurrencySign } from "../../functions/Functions";

class Description extends Component {
  render() {
    const { name, gallery, inStock, attributes, description, prices } =
      this.props.location.state.data;
    const { currencies } = this.props.location.state;
    // console.log(currencies);
    return (
      <Container>
        <Gallery gallery={gallery} inStock={inStock} />
        <Attributes
          name={name}
          inStock={inStock}
          currency={setCurrencySign(prices[currencies].currency)}
          amount={prices[currencies].amount}
          description={description}
          attributes={attributes}
          // base={baseValue}
        />
      </Container>
    );
  }
}

export default Description;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 160px);
  display: flex;
  /* flex-wrap: wrap; */
`;
