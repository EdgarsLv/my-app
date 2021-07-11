import React, { Component } from "react";
import styled from "styled-components";
import Gallery from "./Gallery";
import Attributes from "./Attributes";
import { setCurrencySign } from "../../functions/Functions";
import { connect } from "react-redux";
import { addToCart } from "../../../actions/cartActions";

class Description extends Component {
  render() {
    const { name, gallery, inStock, attributes, description, prices } =
      this.props.location.state.data;

    if (!this.props.cartItems) return <div>loading</div>;

    return (
      <Container>
        <Gallery gallery={gallery} inStock={inStock} />
        <Attributes
          name={name}
          inStock={inStock}
          currency={setCurrencySign(prices[this.props.value].currency)}
          amount={prices[this.props.value].amount}
          description={description}
          attributes={attributes}
          product={this.props.location.state.data}
          addToCart={this.props.addToCart}
        />
      </Container>
    );
  }
}

export default connect(
  (state) => ({
    cartItems: state.cart.cartItems,
    // currencies: state.currencies.currencies,
    // products: state.products.items,
    value: state.value.value,
  }),
  {
    addToCart,
  }
)(Description);

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 160px);
  display: flex;
  /* flex-wrap: wrap; */
`;
