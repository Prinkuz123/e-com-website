// import React, { useContext, useRef } from "react";
// import "./Style.css";
// import { useFormik } from "formik";
// import { myContext } from "../../Context/Context";
// const initialValues = {
//   name: "",
//   password: "",
//   email: "",
// };

// const onSubmit = (values) => {
//  setlogin([...login,values])
// console.log(login);
// };

// const validate = (values) => {
//   let errors = {};
//   if (!values.name) {
//     errors.name = "Required";
//   }
//   if (!values.email) {
//     errors.email = "Required";
//   }
//   if (!values.password) {
//     errors.password = "Required";
//   } else if (
//     /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
//       values.password
//     )
//   ) {
//     errors.password =
//       "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character";
//   }

//   return errors;
// };
// const Signup = () => {
//   const logindata=useContext(myContext)
// const{login,setlogin}=logindata
// // const myref=useRef()
// // const handledata=()=>{
// //   const user=inputref.current.username.value
// //   const pass=inputref.current.password.value
// //   const email=inputref.current.email.value
// //   setlogin([...login,{user,pass,email}])
// //   console.log(login)
// // }

//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//     validate,
//   });

//   console.log("Form values", formik.values);
//   console.log("Form values", formik.errors);
//   return (
//     <div className="login">
//       <form onSubmit={formik.handleSubmit}>
//         <div className="formcontrol">
//           <label>Username</label>
//           <br />

//           <input
//             type="text"
//             name='name'
//             placeholder="username"
//             onChange={formik.handleChange}
//             value={formik.values.name}
//           />
//           {formik.errors.name ? (
//             <div className="error">{formik.errors.name}</div>
//           ) : null}
//         </div>
//         <br />
//         <div className="formcontrol">
//           <label>Password</label>
//           <br />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={formik.handleChange}
//             value={formik.values.password}
//           />
//           {formik.errors.name ? (
//             <div className="error">{formik.errors.name}</div>
//           ) : null}
//         </div>
//         <br />
//         <div className="formcontrol ">
//           <label>email</label>
//           <br />

//           <input
//             type="email"
//             name="email"
//             placeholder="email"
//             onChange={formik.handleChange}
//             value={formik.values.email}
//           />
//           {formik.errors.email ? (
//             <div className="error">{formik.errors.email}</div>
//           ) : null}
//         </div>
//         <br />
//         <button className="sgbtn" type="submit" >
//           Sign up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
import React, { useContext } from "react";
import "./Style.css";
import { useFormik } from "formik";
import { myContext } from "../../Context/Context";
import { Link, useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  password: "",
  email: "",
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

const Signup = () => {
  const navigate = useNavigate();
  const logindata = useContext(myContext);
  const { login, setlogin } = logindata;
  // const handleSubmit = () => {
  //   const username = formik.values.name;
  //   const password = formik.values.password;
  //   navigate('/Login')
  // };
  const formik = useFormik({
    initialValues,
    onSubmit: () => {
      const username = formik.values.name;
    const password = formik.values.password;
     navigate('/Login')
      setlogin([...login, {username,password}]); // Save the form data to the login state
      console.log(login);
    },
    validate,
  });


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
        <div className="formcontrol ">
          <label>email</label>
          <br />

          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <br />
        <button className="sgbtn" type="submit" >
          Sign up
        </button>
        <Link to='/Login'>Login</Link>
      </form>
    </div>
  );
};

export default Signup;
