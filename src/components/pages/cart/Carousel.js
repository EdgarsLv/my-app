import React, { Component } from "react";
import styled from "styled-components";

class Carousel extends Component {
  state = {
    length: this.props.images.length,
    index: 0,
  };

  nextImage = () => {
    const { index, length } = this.state;
    if (index === 0) {
      this.setState({ index: length - 1 });
    } else {
      this.setState({ index: index - 1 });
    }
  };

  prevImage = () => {
    const { index, length } = this.state;
    if (index === length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: index + 1 });
    }
  };

  render() {
    const { images, name } = this.props;
    const { index } = this.state;

    return (
      <Image>
        {images.length > 1 && (
          <ButtonPrev onClick={() => this.prevImage()}>{"<"}</ButtonPrev>
        )}
        {images.length > 1 && (
          <ButtonNext onClick={() => this.nextImage()}>{">"}</ButtonNext>
        )}
        <Img image={images[index]} alt={name} />
      </Image>
    );
  }
}

export default Carousel;

const Image = styled.div`
  width: 250px;
  position: relative;
`;
const Img = styled.div`
  background: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;
const ButtonPrev = styled.button`
  position: absolute;
  left: 0;
  height: 100%;
  width: 10px;
  font-size: 20px;
  font-weight: 600;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--accent-color);
`;
const ButtonNext = styled.button`
  position: absolute;
  right: 0;
  height: 100%;
  width: 10px;
  font-size: 20px;
  font-weight: 600;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--accent-color);
`;
