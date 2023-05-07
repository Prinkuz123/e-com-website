import React, { useContext } from "react";
import "./Style.css";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../Context/Context";
const initialValues = {
  name: "",
  password: "",
  email: "",
};
const onSubmit = (values) => {
  console.log("form", values);
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
      values.password
    )
  ) {
    errors.password =
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character";
  }

  return errors;
};

const Login = () => {
  const navigate = useNavigate();
  const Signupdata = useContext(myContext);
  const { login } = Signupdata;
  const clickhandle = () => {
    const Uname = formik.values.name;
    const upass = formik.values.password;
    const details = login.filter(
      (item) => item.username == Uname && item.password == upass
    );
    if (details.length > 0) {
      navigate("/");
    } else {alert("wrong user")};
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log("Form values", formik.values);
  // console.log("Form values", formik.errors);
  return (
    <div className="login">
      <form onSubmit={formik.handleSubmit}>
        <div className="formcontrol">
          <label>Username</label>
          <br />

          <input
            type="text"
            name="name"
            placeholder="username"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <br />
        <div className="formcontrol">
          <label>Password</label>
          <br />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>
        <br />

        <br />
        <button className="lgbtn" type="submit " onClick={clickhandle}>
          Login
        </button>
        <br />
        <Link to="/Signup" style={{ color: "black" }}>
          Click here to signup
        </Link>
      </form>
    </div>
  );
};

export default Login;
