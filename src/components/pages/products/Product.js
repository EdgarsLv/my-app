import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Tooltip from "./Tooltip";
import Cart from "./Cart";
import Info from "./Info";

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
          <Tooltip
            inCart={products[i].inCart}
            name={name}
            times={this.state.times}
          />
          <Cart
            product={products[i]}
            inStock={inStock}
            handleTooltip={this.handleTooltip}
            hover={products[i].hover}
          />
          <Link
            to={{
              pathname: `/${category}/description/${name}`,
              state: { data: products[i] },
            }}
          >
            <Img src={gallery[0]} alt={name} />
          </Link>
          <Stock>{inStock ? "" : "out of stock"}</Stock>
          <Info
            name={name}
            currency={prices[value].currency}
            amount={prices[value].amount}
          />
        </Card>
      );
    });
  }
}

export default connect((state) => ({
  cartItems: state.cart.cartItems,
}))(Product);

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
