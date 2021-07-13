import React, { Component } from "react";
import styled from "styled-components";
import Spinner from "../../layout/Ui/Spinner/Spinner";
import Product from "./Product";
import { fetchTech } from "./../../../actions/productActions";
import { connect } from "react-redux";
import { addToCart } from "./../../../actions/cartActions";

class Tech extends Component {
  componentDidMount() {
    this.props.fetchTech();
  }

  render() {
    if (!this.props.products) return <Spinner />;
    const { name, products } = this.props.products.data.category;

    return (
      <Container>
        <Title>
          <h2>{name}</h2>
        </Title>
        <Product
          value={this.props.value}
          products={products}
          addToCart={this.props.addToCart}
          category={name}
        />
      </Container>
    );
  }
}

export default connect(
  (state) => ({ products: state.products.items, value: state.value.value }),
  {
    fetchTech,
    addToCart,
  }
)(Tech);

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
