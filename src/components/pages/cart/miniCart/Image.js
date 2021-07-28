import React, { Component } from "react";
import styled from "styled-components";

class Image extends Component {
  render() {
    return (
      <Container>
        <img src={this.props.image} alt={this.props.alt} />
      </Container>
    );
  }
}

export default Image;

const Container = styled.div`
  width: 105px;
  height: 137px;
  img {
    width: 105px;
    height: 100%;
  }
`;
