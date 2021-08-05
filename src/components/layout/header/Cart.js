import React, { Component } from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { connect } from "react-redux";
import { showOverlay } from "./../../../actions/overlayActions";

class Cart extends Component {
  render() {
    const { cartItems, showOverlay } = this.props;

    let cartQuantity = 0;
    cartItems.forEach((el) => {
      cartQuantity += el.count;
    });

    return (
      <Container onClick={() => showOverlay()}>
        <FiShoppingCart />
        {cartItems.length > 0 && (
          <div>
            <p>{cartQuantity}</p>
          </div>
        )}
      </Container>
    );
  }
}

export default connect(
  (state) => ({
    cartItems: state.cart.cartItems,
  }),
  {
    showOverlay,
  }
)(Cart);

const Container = styled.div`
  position: absolute;
  right: 0;
  bottom: 15px;
  cursor: pointer;
  z-index: 5;
  svg {
    font-size: 20px;
  }

  div {
    position: absolute;
    top: -10px;
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
