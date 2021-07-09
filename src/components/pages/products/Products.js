import React, { Component } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../../layout/Ui/Spinner/Spinner";
import Product from "./Product";

class Products extends Component {
  // state = {
  //   products: [],
  //   cartItems: [],
  //   loading: true,
  //   category: "",

  // };

  // componentDidMount() {

  //   this.update();
  // }

  // update() {
  //   this.setState({
  //     products: this.props.data.category.products,
  //     loading: this.props.data.loading,
  //     category: this.props.data.category.name,
  //   });
  // }

  // addToCart = (product) => {
  //   const cartItems = this.state.cartItems.slice();
  //   let alreadyInCart = false;
  //   cartItems.forEach((item) => {
  //     if (item.name === product.name) {
  //       item.count++;
  //       alreadyInCart = true;
  //     }
  //   });
  //   if (!alreadyInCart) {
  //     cartItems.push({ ...product, count: 1 });
  //   }
  //   this.setState({ cartItems: cartItems });
  // };

  render() {
    // const { products } = this.props;
    const { loading, category, products, currencies } = this.props.data;
    // console.log(loading);
    return loading ? (
      <Spinner />
    ) : (
      <Container>
        <Title>
          <h2>{category}</h2>
        </Title>
        <Product
          currencies={currencies}
          products={products}
          addToCart={this.props.addToCart}
        />
      </Container>
    );
  }
}

export default Products;

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
