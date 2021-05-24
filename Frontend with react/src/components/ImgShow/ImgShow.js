import React, { Component } from "react";
import img1 from "../../assets/img/asd.jpg";
import img2 from "../../assets/img/chri.jpg";
import img3 from "../../assets/img/eber.jpg";
import img4 from "../../assets/img/john.jpg";
import css from "./imgShow.module.css";

class ImgShow extends Component {
  constructor() {
    super();
    this.imgList = [img1, img2, img3, img4];
    this.state = {
      imgIndex: 0
    }
  }

  
  componentDidMount() {
    setInterval(() => {
      this.setState({
        imgIndex: parseInt(Math.random()*4)
      });
    }, 4000 );
  }

  render() {
    
    console.log(this.state.imgIndex)
    return (
        <img 
          className={css.Img} 
          alt="asdf" 
          src={this.imgList[this.state.imgIndex]}>
        </img>
    );
  }
}

export default ImgShow;
