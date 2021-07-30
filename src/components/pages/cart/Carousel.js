import React, { Component } from "react";
import styled from "styled-components";

class Carousel extends Component {
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
    const { images, name } = this.props;
    return (
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
    );
  }
}

export default Carousel;

const Image = styled.div`
  width: 250px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;
