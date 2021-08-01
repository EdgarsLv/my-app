import React, { Component } from "react";
import styled from "styled-components";

class Pagination extends Component {
  render() {
    const { productsPerPage, totalProducts, paginate } = this.props;

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <Container>
        {pageNumbers.map((number) => (
          <Button key={number} onClick={() => paginate(number)}>
            {number}
          </Button>
        ))}
      </Container>
    );
  }
}

export default Pagination;

const Container = styled.nav`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  right: 0;
  left: 0;
  height: 80px;
`;
const Button = styled.button`
  padding: 10px;
  font-weight: 600;
  background: white;
  outline: none;
  margin: 1px;
  cursor: pointer;
  border: 1px solid var(--accent-color);
`;
