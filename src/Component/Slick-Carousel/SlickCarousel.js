import React, { Component } from "react";
import Slider from "react-slick";
import "./SlickCarousel.css";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import latMat from "../../assets/img/contentFilm/lat-mat-48h-16176188609123_215x318.png";
import trangTi from "../../assets/img/contentFilm/trang-ti-16194120693380_215x318.jpeg";

//import arrow
import { SampleNextArrow, SamplePrevArrow } from "../Carousel/Carousel.js";

export default class SlickCarousel extends Component {
  renderCardPhim() {
    let content = [];
    for (let i = 0; i < 15; i++) {
      content.push(
        <div className="container my-2">
          <div className="card" style={{ border: "none" }}>
            <img
              src={this.props.tabId === "1" ? latMat : trangTi}
              class="card-img-top"
              alt="latMat"
            />
            <div className="info card-body">
              <p className="nameFilm">
                <span>C16</span>Trạng Tí Phiêu Lưu Ký
              </p>
              <span className="timeFilm">100p</span>
            </div>
          </div>
        </div>
      );
    }
    return content;
  }

  render() {
    const settings1 = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 3,
      autoplay: false,
      rows: 2,
      slidesPerRow: 2,
      autoplaySpeed: 1000,
      nextArrow: <SampleNextArrow right="-55px" />,
      prevArrow: <SamplePrevArrow left="-55px" />,
    };

    return (
      <div>
        <Slider {...settings1}>{this.renderCardPhim()}</Slider>
      </div>
    );
  }
}
