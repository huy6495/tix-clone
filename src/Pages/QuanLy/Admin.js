import { Button } from "react-bootstrap";
import React, { useState } from "react";
import AdminTabs from "../../Component/Admin";
import MovieDetailModal from "../../Component/Admin/MovieDetailModal/MovieDetailModal";
import Header from "../../Component/Header/Header";
import "./Admin.css";

export default function Admin() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Header />
      <AdminTabs />
      {/* <MovieDetailModal /> */}
      <>
        <MovieDetailModal show={modalShow} onHide={() => setModalShow(false)} />
      </>
    </div>
  );
}
