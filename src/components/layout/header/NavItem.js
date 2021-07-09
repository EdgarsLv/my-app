import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li>
      <Link
        to={props.to}
        exact
        activeStyle={{ color: "#5ece7b", borderBottom: "2px solid #5ece7b" }}
      >
        {props.name}
      </Link>
    </li>
  );
};

export default NavItem;

const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  padding: 0 15px;
  padding-bottom: 30px;
`;
