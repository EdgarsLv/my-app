import React, { Component } from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { connect } from "react-redux";
import { addToCart } from "./../../../actions/cartActions";

class Cart extends Component {
  render() {
    const { product, inStock, handleTooltip, addToCart, hover } = this.props;
    return (
      <Container
        onClick={() => {
          addToCart(product);
          handleTooltip(product);
        }}
        hover={hover}
        inStock={inStock}
      >
        <FiShoppingCart />
      </Container>
    );
  }
}

export default connect(() => ({}), {
  addToCart,
})(Cart);

const Container = styled.div`
  position: absolute;
  top: 71%;
  right: 10%;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${({ inStock }) => (inStock ? "var(--accent-color)" : "gray")};
  pointer-events: ${({ inStock }) => (inStock ? "" : "none")};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ hover }) => (hover ? 1 : 0)};
  cursor: pointer;
  transition: 0.2s ease-in;

  svg {
    color: white;
    transform: scale(1.4);
  }
`;
