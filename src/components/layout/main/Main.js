import React, { Component } from "react";
import styled from "styled-components";
import MiniCart from "../../pages/cart/miniCart/MiniCart";

class Main extends Component {
  render() {
    return (
      <MainLayout>
        <MiniCart />
        {this.props.children}
      </MainLayout>
    );
  }
}

export default Main;

const MainLayout = styled.main`
  position: relative;
  padding: 160px 150px 0;
  width: 100%;
  min-height: 100vh;
`;
