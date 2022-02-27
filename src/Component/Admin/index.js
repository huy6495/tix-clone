import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { layDanhSachPhim } from "../../redux/action/MovieAction";
import "./Admin.css";
import MovieDetailModal from "./MovieDetailModal/MovieDetailModal";
import { DOMAIN } from "../../util/setting";
import { layDanhSachNguoiDung } from "../../redux/action/AdminAction";

export default function AdminTabs() {
  const { arrayMovie } = useSelector((state) => state.MovieReducer);
  const { arrayUsers } = useSelector((state) => state.AdminReducer);

  const dispatch = useDispatch();

  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const action = layDanhSachPhim();
    const action2 = layDanhSachNguoiDung();

    dispatch(action);
    dispatch(action2);

    return () => {};
  }, []);

  const alertAdmin = () => {
    alert("Bạn không có quyền");
  };
  const renderRowMovie = () => {
    return arrayMovie.map((item, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item.id}</td>
          <td>{item.tenPhim}</td>
          <td>{item.trailer}</td>
          <td>
            <img src={DOMAIN + item.hinhAnh}></img>
          </td>
          <td>{item.moTa}</td>
          <td>{item.ngayKhoiChieu}</td>

          <td>
            <Button
              className="btn btn-success me-2"
              variant="primary"
              onClick={() => alertAdmin()}
            >
              Sửa
            </Button>
            <Button className="btn btn-danger" onClick={() => alertAdmin()}>
              Xoá
            </Button>
          </td>
        </tr>
      );
    });
  };

  const renderRowUser = () => {
    return arrayUsers.map((item, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item.username}</td>
          <td>{item.email}</td>

          <td>
            <Button
              className="btn btn-success me-2"
              variant="primary"
              onClick={() => alertAdmin()}
            >
              Sửa
            </Button>
            <Button className="btn btn-danger " onClick={() => alertAdmin()}>
              Xoá
            </Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <Tabs className={`tabs`}>
        <TabList className={`tablist-admin`}>
          <Tab className={`tab-admin`}>
            <i className="fas fa-film" /> Movies Management
          </Tab>
          <Tab className="tab-admin">
            <i className="fas fa-users" /> Users Management
          </Tab>
          <Tab className="tab-admin">
            <i className="fas fa-globe"></i> Cinemas Management
          </Tab>
        </TabList>

        <TabPanel>
          <div className="my-account-order account-wrapper">
            <h4 className="account-title text-center fs-4 bg-danger text-white py-2">
              Movies
            </h4>
            <div className="account-table text-center m-t-30 table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th className="w5p">No</th>
                    <th className="w5p">Mã phim</th>

                    <th className="w10p">Tên phim</th>
                    <th className="w10p">URL Trailer</th>
                    <th className="w10p">Hình ảnh</th>
                    <th className="w15p">Mô tả</th>
                    <th className="w10p">Ngày chiếu</th>
                    <th className="w10p">Chỉnh sửa</th>
                  </tr>
                </thead>
                <tbody>{renderRowMovie()}</tbody>
              </table>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>
            {" "}
            <div className="my-account-order account-wrapper">
              <h4 className="account-title text-center fs-4 bg-info text-white py-2">
                Users
              </h4>
              <div className="account-table text-center m-t-30 table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Username</th>

                      <th>Email</th>

                      <th>Chỉnh sửa</th>
                    </tr>
                  </thead>
                  <tbody>{renderRowUser()}</tbody>
                </table>
              </div>
            </div>
          </h2>
        </TabPanel>
        <TabPanel>
          <h2>Bạn không có quyền</h2>
        </TabPanel>
      </Tabs>
      <MovieDetailModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
