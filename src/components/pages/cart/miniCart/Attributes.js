import React, { Component } from "react";
import styled from "styled-components";

class Attributes extends Component {
  render() {
    const { attributes } = this.props;

    const selected = attributes.map((el, i) => {
      return (
        <Selected key={i}>
          <Name>{el.name}</Name>
          <div
            style={
              el.type === "swatch" ? { background: `${el.items[0].value}` } : {}
            }
          >
            {el.type === "swatch" ? "" : el.items[0].value}
          </div>
        </Selected>
      );
    });

    return <Choice>{selected}</Choice>;
  }
}

export default Attributes;

const Choice = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 6px;
`;
const Selected = styled.div`
  margin-right: 5px;

  div {
    display: flex;
    font-size: 14px;
    text-transform: uppercase;
    min-width: 24px;
    padding: 0 5px;
    height: 24px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Source Sans Pro", sans-serif;
  }
`;
const Name = styled.p`
  font-size: 10px;
  border: 1px solid black;
  text-align: center;
  padding: 1px 5px;
`;
