import "./Carousel.css";

import React, { useEffect } from "react";
import Loading from "../Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

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
        top: props.top,
      }}
      onClick={onClick}
    />
  );
}

export function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="carouselIndicators"
      style={{
        backgroundImage: `url(${next})`,
        right: props.right,
        top: props.top,
      }}
      onClick={onClick}
    />
  );
}

//react functional component
export default function Carousel() {
  const { isLoadingCarousel } = useSelector((state) => state.LoadingReducer);

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

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "HIDE_LOADING_CAROUSEL" });
    }, 1500);
    return () => {};
  }, []);

  return (
    <div className="carousel">
      {isLoadingCarousel ? (
        <Loading size="300px" />
      ) : (
        <div className="sliderTrailer ">
          <Slider {...settings2}>
            <div>
              <NavLink to={`/detail/1315`}>
                <div className="img-movie">
                  <img className="img-carousel" src={dietQuy}></img>
                </div>
              </NavLink>

              <PlayButton
                padding="5% 20%"
                top="45%"
                url="https://www.youtube.com/embed/kBY2k3G6LsM"
              ></PlayButton>
            </div>
            <div>
              <NavLink to={`/detail/1314`}>
                <div className="img-movie">
                  <img className="img-carousel" src={latMat}></img>
                </div>
              </NavLink>

              <PlayButton
                padding="5% 20%"
                top="45%"
                url="https://www.youtube.com/embed/kBY2k3G6LsM"
              ></PlayButton>
            </div>
            <div>
              <NavLink to={`/detail/1316`}>
                <div className="img-movie">
                  <img className="img-carousel" src={trangTi}></img>
                </div>
              </NavLink>

              <PlayButton
                padding="5% 20%"
                top="45%"
                url="https://www.youtube.com/embed/kBY2k3G6LsM"
              ></PlayButton>
            </div>
          </Slider>
          <HomeTool></HomeTool>
        </div>
      )}
    </div>
  );
}
