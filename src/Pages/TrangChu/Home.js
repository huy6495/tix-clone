import React from "react";
import Header from "../../Component/Header/Header";
import Carousel from "../../Component/Carousel/Carousel";
import News from "../../Component/News/News";

import FilmBlock from "../../Component/FilmBlock/FilmBlock";
import Cinema from "../../Component/GroupCinema/Cinema";
import Footer from "../../Component/Footer/Footer";
import HomeApp from "../../Component/HomeApp/HomeApp";
import Modal from "../../Component/Modal/Modal";

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <FilmBlock />

      <Cinema />
      <News />

      <HomeApp />
      <Footer />

      <Modal />
    </div>
  );
}
