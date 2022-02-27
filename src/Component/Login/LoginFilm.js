import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { form, Field, useFormik } from "formik";
import { NavLink, Redirect } from "react-router-dom";
import * as Yup from "yup";
import { dangNhapAction } from "../../redux/action/NguoiDungActions";

import "./LoginFilm.css";

export default function LoginFilm(props) {
  const { reDirect } = useSelector((state) => state.NguoiDungReducer);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Tài khoản không được bỏ trống"),
      password: Yup.string()
        .min(6, "Mật khẩu tối thiểu 6 ký tự")
        .max(32, "Mật khẩu tối đa 32 ký tự")
        .required("Mật khẩu không được bỏ trống"),
      //.test(/cybersof/,'Mật khẩu không đúng định dạng')
    }),
    onSubmit: (values) => {
      console.log("value", values);
      //goi ham dangNhapAction => tra ve function
      const action = dangNhapAction(values);
      dispatch(action);
    },
  });

  return (
    <div>
      {reDirect ? (
        <Redirect to="/home" />
      ) : (
        <div className="center-container">
          <div className="main-content-agile">
            <div className="sub-main-w3">
              <form onSubmit={formik.handleSubmit}>
                <div className="pom-agile form-group">
                  <input
                    placeholder="Username"
                    name="username"
                    className="user form-control"
                    type="text"
                    onChange={formik.handleChange}
                  />
                  {formik.touched && formik.errors ? (
                    <p className="text-danger">{formik.errors.username}</p>
                  ) : (
                    ""
                  )}
                  <span className="icon1">
                    <i className="fa fa-user" aria-hidden="true" />
                  </span>
                </div>
                <div className="pom-agile form-group">
                  <input
                    placeholder="Password"
                    name="password"
                    className="pass form-control"
                    type="password"
                    onChange={formik.handleChange}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <p className="text-danger">{formik.errors.password}</p>
                  ) : (
                    ""
                  )}
                  <span className="icon2">
                    <i className="fa fa-unlock" aria-hidden="true" />
                  </span>
                </div>
                <div className="sub-w3l">
                  <h6
                    className="register"
                    onClick={() => dispatch({ type: "SET_REDIRECT_DANGKI" })}
                  >
                    <NavLink to="/register">Register</NavLink>
                  </h6>
                  <h6 className="forgotpass">
                    <a href="#">Forgot Password?</a>
                  </h6>
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
