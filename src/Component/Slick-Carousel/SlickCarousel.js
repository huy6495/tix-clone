import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import "./SlickCarousel.css";
import PlayButton from "../PlayButton/PlayButton";

//import to customize arrow
import { SampleNextArrow, SamplePrevArrow } from "../Carousel/Carousel.js";

//import action to middleware
import { layDanhSachPhim } from "../../redux/action/MovieAction";
import { NavLink } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function SlickCarousel(props) {
  const { arrayMovie } = useSelector((state) => state.MovieReducer);
  const { isLoadingSlider } = useSelector((state) => state.LoadingReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const action = layDanhSachPhim();
    dispatch(action);
    return () => {};
  }, []);

  const renderCardPhim = () => {
    return arrayMovie.map((movie, index) => (
      <div key={index} className="container my-2">
        <div
          className="card"
          style={{ border: "none" }}
          onClick={() => dispatch({ type: "DISPLAY_LOADING_DETAIL" })}
        >
          <NavLink to={`/detail/${movie.id}`}>
            <div className="img-movie">
              <img
                src={
                  movie.hinhAnh.startsWith("http://movie")
                    ? movie.hinhAnh
                    : `http://localhost:7789/${movie.hinhAnh}`
                }
                className="card-img-top"
                style={{ height: "280px" }}
                alt={movie.tenPhim}
              />
            </div>
          </NavLink>
          <PlayButton top="40%" padding="0% 5%" url={movie.trailer} />
          <div className="info card-body">
            <p className="nameFilm">
              <span>C16</span>
              {movie.tenPhim}
            </p>
            <span className="timeFilm">100p</span>
          </div>
        </div>
      </div>
    ));
  };

  const settings1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    autoplay: false,
    rows: 2,
    slidesPerRow: 2,
    autoplaySpeed: 1000,
    nextArrow: <SampleNextArrow right="-50px" top="35%" />,
    prevArrow: <SamplePrevArrow left="-50px" top="35%" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          nextArrow: <SampleNextArrow right="-20px" top="45%" />,
          prevArrow: <SamplePrevArrow left="-20px" top="45%" />,
        },
      },
    ],
  };

  return (
    <div style={{ maxHeight: "760px" }}>
      {isLoadingSlider ? (
        <Loading size="300px" />
      ) : (
        <Slider {...settings1}>{renderCardPhim()}</Slider>
      )}
    </div>
  );
}
