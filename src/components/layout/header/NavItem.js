import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

class NavItem extends Component {
  render() {
    const { to, name } = this.props;
    return (
      <li>
        <Link to={to} exact>
          {name}
        </Link>
      </li>
    );
  }
}

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
