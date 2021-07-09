import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { PRODUCTS_CLOTHES } from "../../../graphql/Querys";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../../layout/Ui/Spinner/Spinner";
import Product from "./Product";

class Clothes extends Component {
  state = {
    products: [],
    cartItems: [],
    loading: true,
    category: "",
    // hovered: false,
  };

  componentDidMount() {
    // this.timer = setTimeout(() => this.update(), 1500);
    this.update();
  }

  update() {
    this.setState({
      products: this.props.data.category.products,
      loading: this.props.data.loading,
      category: this.props.data.category.name,
    });
  }

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.name === product.name) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems: cartItems });
  };

  render() {
    const { products, loading, category } = this.state;

    return loading ? (
      <Spinner />
    ) : (
      <Container>
        <Title>
          <h2>{category}</h2>
        </Title>
        <Product products={products} addToCart={this.addToCart} />
      </Container>
    );
  }
}

export default graphql(PRODUCTS_CLOTHES)(Clothes);

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Title = styled.div`
  width: 100%;
  margin-bottom: 87.62px;
  h2 {
    text-transform: capitalize;
    font-size: 42px;
    line-height: 67.2px;
    font-weight: 400;
  }
`;
