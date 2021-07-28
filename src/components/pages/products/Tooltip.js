import React, { Component } from "react";
import styled from "styled-components";

class Tooltip extends Component {
  render() {
    const { inCart, name, times } = this.props;
    return (
      <Container inCart={inCart}>
        <p>{name}</p>
        <p>
          Added To Cart <Span>{times}</Span> times!{" "}
        </p>
      </Container>
    );
  }
}

export default Tooltip;

const Container = styled.div`
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
const Span = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--accent-color);
`;
