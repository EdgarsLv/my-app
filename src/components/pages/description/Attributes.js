import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addToCart } from "./../../../actions/cartActions";
import Properties from "./Properties";
import Price from "./Price";

class Attributes extends Component {
  state = {
    product: this.props.product,
    selected: [],
    valid: false,
  };

  selectAttributes = (item, i) => {
    const product = JSON.parse(JSON.stringify(this.state.product));
    const selected = [...this.state.selected];

    selected[i] = item.id;

    product.name = this.props.product.name + " " + selected.join(" ");
    product.attributes[i].items = [item];

    if (product.attributes.length === selected.length) {
      this.setState({ valid: true });
    }

    this.setState({ selected: selected });
    this.setState({ product: product });
  };

  addProductToCart = () => {
    if (this.state.valid) {
      this.props.addToCart(this.state.product);
      alert(`${this.state.product.name} added to cart!`);
    } else {
      alert("Select all attributes!");
    }
  };

  render() {
    const { product } = this.props;
    const { description, attributes, inStock, name, prices } = product;

    return (
      <AttrContainer>
        <Title>Brand name</Title>
        <Name>{name}</Name>
        <Properties
          attributes={attributes}
          selectAttributes={this.selectAttributes}
          selected={this.state.selected}
        />

        <Price prices={prices} value={this.props.value} />
        <AddCart onClick={() => this.addProductToCart()} inStock={inStock}>
          ADD TO CART
        </AddCart>
        <Descr dangerouslySetInnerHTML={{ __html: description }} />
      </AttrContainer>
    );
  }
}

export default connect(
  (state) => ({
    value: state.value.value,
  }),
  {
    addToCart,
  }
)(Attributes);

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

const AddCart = styled.button`
  width: 100%;
  margin-top: 35px;
  border: none;
  padding: 16px;
  cursor: pointer;
  background: ${({ inStock }) => (inStock ? "var(--accent-color)" : "gray")};
  pointer-events: ${({ inStock }) => (inStock ? "" : "none")};
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
