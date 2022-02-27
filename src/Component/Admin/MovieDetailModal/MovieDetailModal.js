import { Button, Modal, Form, Image } from "react-bootstrap";
import React from "react";
import { useSelector } from "react-redux";

export default function MovieDetailModal(props) {
  const { detailMovie } = useSelector((state) => state.MovieReducer);
  // console.log(detailMovie);
  const { tenPhim, trailer, hinhAnh, moTa, ngayKhoiChieu } = detailMovie;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="bg-light">
        <Modal.Header closeButton className="bg-secondary text-light">
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="text-center">
            <Form.Group className="mb-3">
              <Form.Label>Tên phim</Form.Label>
              <Form.Control type="tenPhim" value={tenPhim} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Link Trailer</Form.Label>
              <Form.Control type="trailer" value={trailer} />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label>Hình Ảnh</Form.Label>
              <Form.Control type="hinhAnh" value={hinhAnh} />
              <Image
                className="d-block mt-3 position-relative top-50 start-50 translate-middle-x"
                src="https://picsum.photos/id/1/200/300"
              ></Image>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mô tả</Form.Label>
              <Form.Control as="textarea" rows={3} type="moTa" value={moTa} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ngày khởi chiếu</Form.Label>
              <Form.Control type="ngayKhoiChieu" value={ngayKhoiChieu} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-success">Accept</Button>

          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}
