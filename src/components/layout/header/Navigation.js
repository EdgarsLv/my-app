import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";

const Navigation = () => {
  return (
    <Nav>
      <NavItem to="/" name="Tech" />
      <NavItem to="/cart" name="Cart" />
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  li {
    list-style: none;
  }
`;
