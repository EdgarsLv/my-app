import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { setCurrencySign } from "../../functions/Functions";

class Product extends Component {
  render() {
    const { products, currencies } = this.props;

    return products.map(({ name, gallery, inStock, prices }, i) => {
      return (
        <Card key={i}>
          <Cart onClick={() => this.props.addToCart(products[i])}>
            <FiShoppingCart />
          </Cart>
          <Link
            to={{
              pathname: `/description/${name}`,
              state: { data: products[i], currencies: currencies },
            }}
          >
            <Img src={gallery[0]} alt={name} />
          </Link>
          <Stock>{inStock ? "" : "out of stock"}</Stock>
          <Info>
            <p>{name}</p>

            <p style={{ fontWeight: "600" }}>
              {setCurrencySign(prices[currencies].currency)}{" "}
              {prices[currencies].amount}
            </p>
          </Info>
        </Card>
      );
    });
  }
}

export default Product;

const Card = styled.div`
  width: 386px;
  height: 444px;
  padding: 16px;
  margin-bottom: 103px;
  position: relative;
  transition: 0.2s ease-in;
  :hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
`;
const Img = styled.img`
  width: 354px;
  height: 330px;
  padding: 16px;
`;
const Info = styled.div`
  margin: 8px 16px 16px 16px;
  p {
    font-weight: 300;
    font-size: 18px;
    line-height: 28.8px;
  }
`;

const Stock = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  color: #8d8f9a;
  font-size: 24px;
`;
const Cart = styled.div`
  position: absolute;
  top: 71%;
  right: 10%;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #5ece7b;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ hover }) => (hover ? 1 : 0.5)};
  cursor: pointer;
  transition: 0.3s ease-in;

  :hover {
    opacity: 1;
  }

  svg {
    color: white;
    transform: scale(1.4);
  }
`;