import React, { Component } from "react";
import styled from "styled-components";
import Select from "./Select";
import Cart from "./Cart";

class Actions extends Component {
  render() {
    return (
      <Container>
        <Select />
        <Cart openMiniCart={this.props.openMinicart} />
      </Container>
    );
  }
}

export default Actions;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
`;
