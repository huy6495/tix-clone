import React, { Component } from "react";
import "./HomeApp.css";
import Slider from "react-slick";
// import { SampleNextArrow, SamplePrevArrow } from "../Carousel/Carousel";

import Img from "../../assets/img/HomeApp/backapp.jpeg";
import mobile from "../../assets/img/HomeApp/mobile.png";
import slide1 from "../../assets/img/HomeApp/slide1.jpeg";
import slide2 from "../../assets/img/HomeApp/slide15.jpeg";
import slide3 from "../../assets/img/HomeApp/slide16.jpeg";
import slide4 from "../../assets/img/HomeApp/slide2.jpeg";
import slide5 from "../../assets/img/HomeApp/slide8.jpeg";

const arraySlide = [slide1, slide2, slide3, slide4, slide5];

export default class HomeApp extends Component {
  renderSlide() {
    return arraySlide.map((slide, index) => {
      return (
        <div key={index} style={{ borderRadius: "20px" }}>
          <img
            src={slide}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: "20px",
            }}
          />
        </div>
      );
    });
  }

  NoneArrow() {
    return <div></div>;
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <this.NoneArrow />,
      nextArrow: <this.NoneArrow />,
    };
    return (
      <div className="row" id="wraphomeApp">
        <div id="homeApp" style={{ background: "url(" + Img + ")" }}>
          <div className="mainMaxWidth">
            <div className="row">
              <div
                className="col-md-6 col-12 text-left"
                style={{ fontWeight: 300 }}
              >
                <p className="textLeft">
                  Ứng dụng tiện lợi dành cho người yêu điện ảnh
                </p>
                <br />
                <p className="textSmallLeft">
                  Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                  và đổi quà hấp dẫn.
                </p>
                <br />
                <button className="buttonLeft">
                  App miễn phí - Tải về ngay!
                </button>
                <p className="textAppUnder">
                  TIX có hai phiên bản
                  <a
                    className="tagA"
                    target="_blank"
                    href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
                  >
                    iOS
                  </a>
                  <a
                    className="tagA"
                    target="_blank"
                    href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
                  >
                    Android
                  </a>
                </p>
              </div>
              <div className="col-md-6 right">
                <img className="img-responsive img-phone" src={mobile} />
                <div id="sliderScreen">
                  <Slider {...settings}>{this.renderSlide()}</Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
