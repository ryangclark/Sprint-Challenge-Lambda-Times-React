import React, { Component } from 'react';
import { carouselData } from '../../data'

// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      imageIndex: 0
    }
  }
  componentDidMount(){}

  leftClick = () => {
    if (this.state.imageIndex === 0) {
      this.setState({ imageIndex: carouselData.length - 1 });
    } else {
      this.setState({ imageIndex: this.state.imageIndex - 1 });
    }
  }

  rightClick = () => {
    if (this.state.imageIndex == carouselData.length - 1) {
      this.setState({ imageIndex: 0 });
    } else {
      this.setState({ imageIndex: this.state.imageIndex + 1 });
    }
  }

  selectedImage = () => {
    return <img alt="" src={carouselData[this.state.imageIndex]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}