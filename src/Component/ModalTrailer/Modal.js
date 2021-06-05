import React from "react";
import "./Modal.css";

export default function ModalTrailer() {
  return (
    <div>
      {/* Modal */}

      <div className="modal fade" id="myModal" tabIndex={-1}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/zfZadurY6c0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
