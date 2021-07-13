import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { setCurrencySign } from "../../functions/Functions";
import { connect } from "react-redux";

class Product extends Component {
  state = {
    times: 0,
  };
  handleTooltip = (x) => {
    this.setState(() => (x.inCart = true));

    const counter = this.props.cartItems.find((item) => item.name === x.name);
    if (!counter) {
      this.setState({ times: 1 });
    } else {
      this.setState({ times: counter.count });
    }
  };
  onHover = (x) => {
    this.setState(() => (x.hover = true));
  };
  offHover = (x) => {
    this.setState(() => (x.hover = false));
    this.setState(() => (x.inCart = false));
  };

  render() {
    const { products, value, category } = this.props;

    return products.map(({ name, gallery, inStock, prices }, i) => {
      return (
        <Card
          onMouseEnter={() => this.onHover(products[i])}
          onMouseLeave={() => this.offHover(products[i])}
          key={i}
        >
          <Tooltip inCart={products[i].inCart}>
            <p>{name}</p>
            <p>
              Added To Cart{" "}
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "var(--accent-color)",
                }}
              >
                {this.state.times}
              </span>{" "}
              times! !{" "}
            </p>
          </Tooltip>
          <Cart
            onClick={() => {
              this.props.addToCart(products[i]);
              this.handleTooltip(products[i]);
            }}
            hover={products[i].hover}
          >
            <FiShoppingCart />
          </Cart>
          <Link
            to={{
              pathname: `/${category}/description/${name}`,
              state: { data: products[i] },
            }}
          >
            <Img src={gallery[0]} alt={name} />
          </Link>
          <Stock>{inStock ? "" : "out of stock"}</Stock>
          <Info>
            <p>{name}</p>

            <p style={{ fontWeight: "600" }}>
              {setCurrencySign(prices[value].currency)} {prices[value].amount}
            </p>
          </Info>
        </Card>
      );
    });
  }
}

// export default Product;
export default connect(
  (state) => ({
    cartItems: state.cart.cartItems,
    // products: state.products.items,
    // value: state.value.value,
  }),
  {
    // addToCart,
  }
)(Product);

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
  /* padding: 16px; */
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
  background: var(--accent-color);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ hover }) => (hover ? 1 : 0)};
  cursor: pointer;
  transition: 0.2s ease-in;

  :hover {
    opacity: 1;
  }

  svg {
    color: white;
    transform: scale(1.4);
  }
`;
const Tooltip = styled.div`
  position: absolute;
  bottom: 35%;
  right: 10%;
  border-radius: 10px;
  padding: 10px;
  background: white;
  transition: 0.3s ease-in;
  opacity: ${({ inCart }) => (inCart ? 1 : 0)};
  font-size: 12px;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 1);
  font-family: "Roboto", sans-serif;
`;
