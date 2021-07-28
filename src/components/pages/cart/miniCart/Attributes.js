import React, { Component } from "react";
import styled from "styled-components";

class Attributes extends Component {
  render() {
    const selected = this.props.attributes.map((el, i) => {
      return (
        <Selected key={i}>
          <div
            style={
              el.name === "Color" ? { background: `${el.items[0].value}` } : {}
            }
          >
            {el.name === "Color" ? "" : el.items[0].value}
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
  margin-top: 32px;
`;
const Selected = styled.div`
  margin-right: 5px;

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 5px;
  }
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
