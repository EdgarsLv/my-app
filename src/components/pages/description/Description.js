import React, { Component } from "react";
import styled from "styled-components";
import Gallery from "./Gallery";
import Attributes from "./Attributes";

class Description extends Component {
  render() {
    const { gallery, inStock } = this.props.location.state.data;

    return (
      <Container>
        <Gallery gallery={gallery} inStock={inStock} />
        <Attributes product={this.props.location.state.data} />
      </Container>
    );
  }
}
export default Description;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 160px);
  display: flex;
`;
