import React, { Component } from "react";
import styled from "styled-components";

class Attributes extends Component {
  render() {
    const { attributes } = this.props;

    const choice = attributes.map((el, i) => {
      return (
        <Choice key={i}>
          <div>
            <p>{el.name}</p>
          </div>
          <Selected
            style={
              el.name === "Color" ? { background: `${el.items[0].value}` } : {}
            }
          >
            {el.name === "Color" ? "" : el.items[0].value}
          </Selected>
        </Choice>
      );
    });

    return <Container>{choice}</Container>;
  }
}

export default Attributes;

const Container = styled.div`
  display: flex;
`;
const Choice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  p {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 3px;
  }
`;
const Selected = styled.div`
  width: 65px;
  height: 45px;
  border: 2px solid black;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-family: "Source Sans Pro", sans-serif;
`;
