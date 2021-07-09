import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
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
        <Actions
          setCurrencies={this.props.setCurrencies}
          count={this.props.count}
          openMinicart={this.props.openMinicart}
        />
      </HeaderContent>
    );
  }
}

export default Header;

const HeaderContent = styled.header`
  position: fixed;
  top: 0;
  width: calc(100% - 300px);
  height: 80px;
  /* border-bottom: 2px solid black; */
  display: flex;
  justify-content: space-between;
  z-index: 1;
  background: white;
`;
const Logo = styled.i`
  color: #5ece7b;
  transform: scale(2.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% -50%);
`;
