import React, { Component } from "react";
import styled from "styled-components";
import NavItem from "./NavItem";

class Navigation extends Component {
  render() {
    return (
      <Nav>
        <NavItem to="/" name="all" />
        <NavItem to="/tech" name="tech" />
        <NavItem to="/clothes" name="clothes" />
      </Nav>
    );
  }
}

export default Navigation;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  li {
    list-style: none;
  }
`;
