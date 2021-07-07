import React from "react";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import Modal from "../../Component/Modal/Modal";
import Detail from "../../Component/Detail/Detail";

export default function DetailPage(props) {
  return (
    <div>
      <Header />
      <Detail id={props.match.params.id} />
      <Footer />
      <Modal />
    </div>
  );
}
