import React from "react";

import dietQuy from "../../assets/img/phim/ban-tay-diet-quy-evil-expeller-16177781815781.png";
import latMat from "../../assets/img/phim/lat-mat-48h-16176188609123_215x318.png";

export default function ContentNews() {
  // const viewPort = useViewport();

  // const responsiveScreen=()=>{
  //   viewPort.width<768?
  // }

  return (
    <div>
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="card mx-2">
            <img src={latMat} className="card-img-top" alt="latMat" />
            <div className="card-body">
              <h5 className="card-title">
                Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật
                Mặt: 48H đậm chất
              </h5>
              <p className="card-text">
                Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt
                đuổi gay cấn thót tim fans hâm mộ. Lý Hải bất ngờ tung clip rượt
                đuổi gay cấn thót tim fans hâm mộ.
              </p>
              <a href="#" className="btn btn-light">
                <i className="far fa-thumbs-up"></i> 1
              </a>
              <a href="#" className="btn btn-light mx-2">
                <i className="far fa-comment-alt"></i> 3
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="card mx-2">
            <img src={dietQuy} className="card-img-top" alt="latMat" />
            <div className="card-body">
              <h5 className="card-title">
                Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật
                Mặt: 48H đậm chất
              </h5>
              <p className="card-text">
                Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood
                cũng không thiếu những tác phẩm đình đám được chuyển thể từ tiểu
                thuyết, phim hoạt hình, hay thậm chí là cả trò chơi điện tử.
              </p>
              <a href="#" className="btn btn-light">
                <i className="far fa-thumbs-up"></i> 0
              </a>
              <a href="#" className="btn btn-light mx-2">
                <i className="far fa-comment-alt"></i> 2
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-md-4 col-6">
          <div className="card mx-2 card-detail">
            <img
              src="https://s3img.vcdn.vn/123phim/2021/03/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png"
              className="card-img-top"
              alt="latMat"
            />
            <div className="card-body">
              <h6 className="card-title">
                PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan ...
              </h6>
              <p className="card-text">
                Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở
              </p>
              <a href="#" className="btn btn-light">
                <i className="far fa-thumbs-up"></i> 1
              </a>
              <a href="#" className="btn btn-light mx-2">
                <i className="far fa-comment-alt"></i> 3
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-6">
          <div className="card mx-2 card-detail">
            <img
              src="https://s3img.vcdn.vn/123phim/2021/03/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png"
              className="card-img-top"
              alt="latMat"
            />
            <div className="card-body">
              <h6 className="card-title">
                PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan ...
              </h6>
              <p className="card-text">
                Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở
              </p>
              <a href="#" className="btn btn-light">
                <i className="far fa-thumbs-up"></i> 0
              </a>
              <a href="#" className="btn btn-light mx-2">
                <i className="far fa-comment-alt"></i> 2
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="card mb-2 card-detail">
            <div className="row g-0">
              <div className="col-md-3 text-end  col-3">
                <img
                  src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png"
                  style={{ width: "50px" }}
                />
              </div>
              <div className="col-md-8 col-8">
                <div className="card-body" style={{ padding: "5px" }}>
                  <p className="card-title">
                    This is a wider card with subporting below
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-2 card-detail">
            <div className="row g-0">
              <div className="col-md-3 text-end col-3">
                <img
                  src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png"
                  style={{ width: "50px" }}
                />
              </div>
              <div className="col-md-8 col-8">
                <div className="card-body" style={{ padding: "5px" }}>
                  <p className="card-title">
                    This is a wider card with subporting below
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", margin: "40px" }}>
        <button className="more-btn">Xem thêm</button>
      </div>
    </div>
  );
}
