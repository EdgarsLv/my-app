import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Select from "./Select";
import Cart from "./Cart";

class Actions extends Component {
  render() {
    return (
      <Container>
        <div>
          <Select />
          <Cart openMiniCart={this.props.openMinicart} />
        </div>
      </Container>
    );
  }
}

export default connect(() => ({}), {})(Actions);

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    position: relative;
    :nth-child(1)::after {
      content: "ᐯ";
      position: absolute;
      top: 7px;
      right: 30px;
      font-size: 8px;
    }
    select {
      position: absolute;
      right: -40px;
      border: none;
      appearance: none;
      outline: none;
      box-shadow: none;
      padding: 5px 60px 10px 20px;
      cursor: pointer;
      :focus {
        outline: none;
      }

      option {
        font-size: 18px;
      }
    }
  }
`;
