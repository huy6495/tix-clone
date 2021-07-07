import React from "react";
import { useSelector } from "react-redux";
import "./Modal.css";

export default function Modal() {
  const { url } = useSelector((state) => state.ModalReducer);

  // useEffect(() => {}, [url]);

  // console.log(idModal, url);
  return (
    <div>
      <div className="modal fade" id="myModal">
        <div
          className="modal-dialog"
          style={{ maxWidth: "55%" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body" style={{ height: "520px" }}>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
              <div
                className="embed-responsive embed-responsive-16by9"
                style={{ position: "relative" }}
              >
                <iframe
                  width="100%"
                  height="450px"
                  src={url}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
