import React, { Component } from "react";
import Header from "../../Component/Header/Header";
import Carousel from "../../Component/Carousel/Carousel";
import News from "../../Component/News/News";

import FilmBlock from "../../Component/FilmBlock/FilmBlock";
import { Fragment } from "react";
import Cinema from "../../Component/GroupCinema/Cinema";
import Footer from "../../Component/Footer/Footer";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Carousel />
        <div className="container text-center">
          <FilmBlock />
        </div>

        <Cinema />

        <br></br>
        <br></br>
        <News />

        <br></br>
        <br></br>
        <br></br>

        {/* <Dropdown /> */}

        <br></br>
        <Footer />
      </Fragment>
    );
  }
}
