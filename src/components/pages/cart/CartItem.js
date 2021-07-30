import React, { Component } from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import Counter from "./Counter";
import Attributes from "./Attributes";

class CartItem extends Component {
  render() {
    const { name, currency, amount, count, product, images, attributes } =
      this.props;

    return (
      <CartContainer>
        <Item>
          <Brand>
            <h3>Brand name</h3>
          </Brand>
          <Name>{name}</Name>
          <Price>
            {currency} {amount}
          </Price>
          <Attributes attributes={attributes} />
        </Item>
        <Counter count={count} product={product} />
        <Carousel images={images} name={name} />
      </CartContainer>
    );
  }
}

export default CartItem;

const CartContainer = styled.div`
  width: 1100px;
  height: 225px;
  border-top: 1px solid #e5e5e5;
  padding: 16px 0;
  display: flex;
  :nth-last-of-type(1) {
    margin-bottom: 50px;
  }
`;
const Item = styled.div`
  width: calc(100% - 210px);
`;

const Brand = styled.div`
  margin-bottom: 16px;
  h3 {
    font-size: 30px;
    font-weight: 600;
    line-height: 27px;
  }
`;
const Name = styled.div`
  font-size: 30px;
  line-height: 27px;
`;
const Price = styled.p`
  font-size: 24px;
  font-weight: 700;
  padding: 22px 0 15px 0;
`;
