import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { dangKyAction } from "../../redux/action/DangKyAction";
import { Redirect } from "react-router";

export default function RegisterFilm(props) {
  const dispatch = useDispatch();
  const { reDirectDangKi } = useSelector((state) => state.DangKyReducer);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("Tài khoản không được bỏ trống"),
      matKhau: Yup.string()
        .min(6, "Mật khẩu tối thiểu 6 ký tự")
        .required("Mật khẩu không dược bỏ trống"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email không hợp lệ!"),
    }),
    onSubmit: (values) => {
      const action = dangKyAction(values);
      dispatch(action);
    },
  });
  return (
    <div>
      {reDirectDangKi ? (
        <Redirect to="/login" />
      ) : (
        <div className="center-container">
          <div className="main-content-agile">
            <div className="sub-main-w3">
              <form onSubmit={formik.handleSubmit}>
                <div className="pom-agile form-group">
                  <input
                    placeholder="Username"
                    name="taiKhoan"
                    className="user form-control"
                    type="text"
                    onChange={formik.handleChange}
                  />
                  {formik.touched && formik.errors ? (
                    <p className="text-danger">{formik.errors.taiKhoan}</p>
                  ) : (
                    ""
                  )}
                  <span style={{ right: "3%" }} className="icon1">
                    <i className="fa fa-user" aria-hidden="true" />
                  </span>
                </div>
                <div className="pom-agile form-group">
                  <input
                    placeholder="Password"
                    name="matKhau"
                    className="pass form-control"
                    type="password"
                    onChange={formik.handleChange}
                  />
                  {formik.touched.matKhau && formik.errors.matKhau ? (
                    <p className="text-danger">{formik.errors.matKhau}</p>
                  ) : (
                    ""
                  )}
                  <span style={{ right: "3%" }} className="icon2">
                    <i className="fa fa-unlock" aria-hidden="true" />
                  </span>
                </div>
                <div className="pom-agile form-group">
                  <input
                    placeholder="Email"
                    name="email"
                    className="email form-control"
                    type="text"
                    onChange={formik.handleChange}
                  />
                  {formik.touched && formik.errors ? (
                    <p className="text-danger">{formik.errors.email}</p>
                  ) : (
                    ""
                  )}
                  <span style={{ right: "3%" }} className="icon2">
                    <i className="fa fa-unlock" aria-hidden="true" />
                  </span>
                </div>

                <input
                  onSubmit={formik.handleSubmit}
                  type="submit"
                  defaultValue="Login"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
