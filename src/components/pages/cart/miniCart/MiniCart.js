import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Items from "./Items";
import TotalSum from "./TotalSum";
import { showOverlay } from "./../../../../actions/overlayActions";

class MiniCart extends Component {
  render() {
    const { cartItems, value, show, showOverlay } = this.props;

    return (
      <MiniCartOverlay onClick={() => showOverlay()} show={show}>
        <MinCart onClick={(e) => e.stopPropagation()}>
          <BagTitle>
            <span>My Bag,</span> <span> {cartItems.length} items</span>
          </BagTitle>

          <Items />
          <TotalSum cartItems={cartItems} value={value} />

          <ButtonsContainer>
            <Link onClick={() => showOverlay()} to="/cart">
              view bag
            </Link>
            <Link to="/cart">checkout</Link>
          </ButtonsContainer>
        </MinCart>
      </MiniCartOverlay>
    );
  }
}

export default connect(
  (state) => ({
    cartItems: state.cart.cartItems,
    value: state.value.value,
    show: state.show.show,
  }),
  { showOverlay }
)(MiniCart);

const MiniCartOverlay = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  bottom: 0;
  width: 100%;
  background: rgba(57, 55, 72, 0.22);
  z-index: 2;
  display: ${({ show }) => (!show ? "none" : "block")};
`;
const MinCart = styled.div`
  position: absolute;
  top: 0;
  right: 135px;
  min-width: 325px;
  background: white;
  padding: 8px 16px 0;
`;
const BagTitle = styled.div`
  margin-bottom: 23px;
  span {
    :nth-child(1) {
      font-weight: 700;
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 35px 0 30px;
  a {
    :nth-child(1) {
      background: white;
      text-transform: uppercase;
      text-decoration: none;
      padding: 14px 32px;
      font-weight: 600;
      font-size: 14px;
      color: black;
      border: 1px solid black;
      cursor: pointer;
    }
    :nth-child(2) {
      background: var(--accent-color);
      text-transform: uppercase;
      text-decoration: none;
      color: white;
      padding: 14px 32px;
      font-weight: 600;
      font-size: 14px;
      border: none;
      cursor: pointer;
    }
  }
`;
