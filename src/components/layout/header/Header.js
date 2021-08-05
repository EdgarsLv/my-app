import React, { Component } from "react";
import styled from "styled-components";
import { RiShoppingBag2Fill } from "react-icons/ri";
import Navigation from "./Navigation";
import Actions from "./Actions";

class Header extends Component {
  render() {
    return (
      <HeaderContent>
        <Navigation />
        <Logo>
          <RiShoppingBag2Fill />
        </Logo>
        <Actions />
      </HeaderContent>
    );
  }
}

export default Header;

const HeaderContent = styled.header`
  position: absolute;
  top: 0;
  width: calc(100% - 300px);
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
`;
const Logo = styled.i`
  color: var(--accent-color);
  transform: scale(2.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% -50%);
`;
