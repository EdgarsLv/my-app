import React, { Component } from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

class CartItem extends Component {
  state = {
    length: this.props.images.length,
    index: 0,
  };

  prevImage = () => {
    if (this.state.index === this.state.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  };

  nextImage = () => {
    if (this.state.index === 0) {
      this.setState({ index: this.state.length - 1 });
    } else {
      this.setState({ index: this.state.index - 1 });
    }
  };

  render() {
    const {
      name,
      currency,
      amount,
      count,
      product,
      images,
      attributes,
      removeFromCart,
    } = this.props;

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
    return (
      <CartContainer>
        <Item>
          <Brand>
            <h3>Brand name</h3>
          </Brand>
          <Name>{name}</Name>
          <Price>
            {currency} {amount}
          </Price>
          <Attributes>{choice}</Attributes>
        </Item>
        <Count>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => this.props.countIncrease(product)}
          >
            <AiOutlinePlus />
          </div>
          <div style={{ border: "none" }}>{count}</div>
          <div style={{ cursor: "pointer" }}>
            {count > 1 ? (
              <AiOutlineMinus
                style={{ padding: "10px", boxSizing: "content-box" }}
                onClick={() => this.props.countDecrease(product)}
              />
            ) : (
              <MdDelete
                style={{ padding: "10px", boxSizing: "content-box" }}
                onClick={() => removeFromCart(product)}
              />
            )}
          </div>
        </Count>
        <Image>
          {images.length > 1 && (
            <button className="btn-prev" onClick={() => this.prevImage()}>
              {"<"}
            </button>
          )}

          <img src={images[this.state.index]} alt={name} />
          {images.length > 1 && (
            <button className="btn-next" onClick={() => this.nextImage()}>
              {">"}
            </button>
          )}
        </Image>
      </CartContainer>
    );
  }
}

export default CartItem;

const CartContainer = styled.div`
  width: 1100px;
  height: 225px;
  border-top: 1px solid #e5e5e5;
  padding: 16px 0;
  display: flex;
  :nth-last-of-type(1) {
    margin-bottom: 50px;
  }
`;
const Item = styled.div`
  width: calc(100% - 210px);
`;

const Brand = styled.div`
  margin-bottom: 16px;
  h3 {
    font-size: 30px;
    font-weight: 600;
    line-height: 27px;
  }
`;
const Name = styled.div`
  font-size: 30px;
  line-height: 27px;
`;
const Price = styled.p`
  font-size: 24px;
  font-weight: 700;
  padding: 22px 0 15px 0;
`;
const Attributes = styled.div`
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
const Count = styled.div`
  width: 45px;
  margin: 0 12px;
  /* background: oldlace; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    width: 45px;
    height: 45px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
`;
const Image = styled.div`
  width: 250px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;
