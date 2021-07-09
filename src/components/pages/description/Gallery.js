import React, { Component } from "react";
import styled from "styled-components";

class Gallery extends Component {
  state = {
    image: this.props.gallery[0],
  };
  setImage = (el) => {
    this.setState({ image: el });
  };

  render() {
    const { gallery, inStock } = this.props;

    const images = gallery.map((el, i) => {
      return (
        <Image key={i}>
          <Img onClick={() => this.setImage(el)} src={el} />
        </Image>
      );
    });

    return (
      <Container>
        <SmallImage>{images}</SmallImage>
        <LargeImage>
          <Stock>
            <p>{inStock ? "" : "OUT OF STOCK"}</p>
          </Stock>
          <Img style={{ cursor: "default" }} src={this.state.image} alt="pic" />
        </LargeImage>
      </Container>
    );
  }
}
export default Gallery;

const Container = styled.div`
  width: 730px;
  height: 513px;
  display: flex;
`;

const SmallImage = styled.div`
  height: 513px;
  width: 80px;
  margin-right: 40px;
`;
const LargeImage = styled.div`
  width: 610px;
  height: 513px;
  position: relative;
`;
const Image = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 40px;
  background: lightcyan;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
const Stock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  p {
    font-size: 30px;
    color: gray;
    text-transform: uppercase;
  }
`;
