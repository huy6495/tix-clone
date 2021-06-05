import "./Carousel.css";

import React from "react";

//slider import
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//img import
import back from "../../assets/icons/back-session.png";
import next from "../../assets/icons/next-session.png";
import dietQuy from "../../assets/img/phim/ban-tay-diet-quy-evil-expeller-16177781815781.png";
import latMat from "../../assets/img/phim/lat-mat-48h-16176188609123_215x318.png";
import trangTi from "../../assets/img/phim/trang-ti-16194120693380_215x318.jpeg";
import HomeTool from "../HomeTool/HomeTool";
import PlayButton from "../PlayButton/PlayButton";

//customize arrow carousel
export function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="carouselIndicators"
      style={{
        backgroundImage: `url(${back})`,
        left: props.left,
      }}
      onClick={onClick}
    />
  );
}

export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="carouselIndicators"
      style={{
        backgroundImage: `url(${next})`,
        right: props.right,
      }}
      onClick={onClick}
    />
  );
}

//react functional component
export default function Carousel() {
  const settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 1500,
    nextArrow: <SampleNextArrow right="30px" />,
    prevArrow: <SamplePrevArrow left="30px" />,
    appendDots: (dots) => <ul> {dots} </ul>,
  };
  return (
    <div className="sliderTrailer ">
      <Slider {...settings2}>
        <div>
          <img style={{ width: "100%", height: "620px" }} src={dietQuy}></img>
          <PlayButton></PlayButton>
        </div>
        <div>
          <img style={{ width: "100%", height: "620px" }} src={latMat}></img>
        </div>
        <div>
          <img style={{ width: "100%", height: "620px" }} src={trangTi}></img>
        </div>
      </Slider>
      <HomeTool></HomeTool>
    </div>
  );
}
