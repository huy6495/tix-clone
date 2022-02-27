import React, { useEffect } from "react";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import Modal from "../../Component/Modal/Modal";
import Detail from "../../Component/Detail/Detail";

export default function DetailPage(props) {
  useEffect(() => {
    return () => {
      window.location.reload();
    };
  }, []);

  return (
    <div>
      <Header />
      <Detail id={props.match.params.id} />
      <Footer />
      <Modal />
    </div>
  );
}
