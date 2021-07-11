import React, { Component } from "react";
import styled from "styled-components";

class Attributes extends Component {
  render() {
    const {
      name,
      inStock,
      currency,
      amount,
      description,
      attributes,
      product,
    } = this.props;

    const size = attributes.map(({ items, type, name }, i) => {
      return (
        <div key={i} style={{ marginBottom: "30px" }}>
          <P>{name}:</P>
          <SizeContainer>
            {items.map(({ value }, j) => (
              <Size color={value} key={j}>
                {type === "swatch" ? "" : value}
              </Size>
            ))}
          </SizeContainer>
        </div>
      );
    });

    return (
      <AttrContainer>
        <Title>Brand name</Title>
        <Name>{name}</Name>

        {size}

        <P>PRICE:</P>
        <Price>
          <p>
            {currency} {amount}
          </p>
        </Price>
        <AddCart
          onClick={() => this.props.addToCart(product)}
          style={{
            background: inStock ? "" : "gray",
            // pointerEvents: inStock ? "" : "none",
          }}
        >
          ADD TO CART
        </AddCart>

        <Descr dangerouslySetInnerHTML={{ __html: description }} />
      </AttrContainer>
    );
  }
}
export default Attributes;

const AttrContainer = styled.div`
  margin-left: 100px;
  width: 292px;
`;
const Title = styled.h3`
  font-size: 30px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0.5px;
`;
const Name = styled.p`
  font-size: 30px;
  font-weight: 400;
  line-height: 27px;
  margin-top: 16px;
  margin-bottom: 43px;
`;

const SizeContainer = styled.div`
  /* background: gray; */
  width: 100%;
  margin-top: 8px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;
const Size = styled.div`
  display: inline-block;
  border: 1px solid black;
  width: 63px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${(props) => props.color};
`;
const Price = styled.div`
  margin-top: 20px;
  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 18px;
  }
`;

const AddCart = styled.button`
  width: 100%;
  margin-top: 35px;
  border: none;
  padding: 16px;
  cursor: pointer;
  background: var(--accent-color);
  font-weight: 600;
  color: white;
  font-size: 16px;
  font-family: "Raleway", sans-serif;
`;
const Descr = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  p {
    font-family: "Roboto", sans-serif;
    line-height: 25.59px;
  }
`;
const P = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  font-family: "Roboto Condensed", sans-serif;
`;
