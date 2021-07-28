import React, { Component } from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    const { cartItems } = this.props;

    let cartQuantity = 0;
    cartItems.forEach((el) => {
      cartQuantity += el.count;
    });

    return (
      <Container onClick={() => this.props.openMiniCart()}>
        <FiShoppingCart style={{ fontSize: "20px" }} />
        {cartItems.length > 0 && (
          <div>
            <p>{cartQuantity}</p>
          </div>
        )}
      </Container>
    );
  }
}

export default connect((state) => ({
  cartItems: state.cart.cartItems,
}))(Cart);

const Container = styled.div`
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
