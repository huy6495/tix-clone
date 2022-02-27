import React from "react";
import { useSelector } from "react-redux";
import "./Modal.css";

export default function Modal() {
  const { url } = useSelector((state) => state.ModalReducer);
  // let url1 = data.url + "&output=embed";
  // window.location.replace(url1);
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
              <div className="embed-responsive embed-responsive-16by9 container-iframe">
                <iframe
                  className="responsive-iframe"
                  src={`${url.replace("watch?v=", "embed/")}`}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
