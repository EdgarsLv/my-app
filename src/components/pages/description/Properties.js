import React, { Component } from "react";
import styled from "styled-components";

class Properties extends Component {
  render() {
    const { attributes, selectAttributes } = this.props;

    const size = attributes.map(({ items, type, name }, i) => {
      return (
        <div key={i} style={{ marginBottom: "40px" }}>
          <P>{name}:</P>
          <SizeContainer>
            {items.map((item, j) => (
              <Size
                key={j}
                onClick={() => selectAttributes(item, i)}
                color={item.value}
                select={this.props.selected[i] === item.value}
              >
                {type === "swatch" ? "" : item.value}
              </Size>
            ))}
          </SizeContainer>
        </div>
      );
    });

    return size;
  }
}

export default Properties;

const SizeContainer = styled.div`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
`;
const Size = styled.div`
  display: inline-block;
  border: 1px solid black;

  color: ${({ select }) => (select ? "white" : "black")};
  margin-right: 12px;
  width: 63px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${({ select }) => (select ? "black" : "white")};
  background: ${({ color }) => color};
  font-family: "Source Sans Pro", sans-serif;

  :nth-last-child(1) {
    margin-right: 0;
  }
`;
const P = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  text-transform: uppercase;
  font-family: "Roboto Condensed", sans-serif;
`;
