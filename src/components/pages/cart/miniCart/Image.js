import React, { Component } from "react";
import styled from "styled-components";

class Image extends Component {
  render() {
    const { image, alt } = this.props;
    return (
      <Container>
        <Img image={image} src={image} alt={alt} />
      </Container>
    );
  }
}

export default Image;

const Container = styled.div`
  width: 105px;
  height: 137px;
`;
const Img = styled.div`
  background: url(${({ image }) => image});
  width: 105px;
  height: 100%;
  background-size: cover;
  background-position: center;
`;
