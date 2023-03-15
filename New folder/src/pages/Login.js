import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import userService from "../services/userServices";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const usernameRef = React.useRef();
  const passworkRef = React.useRef();
  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passworkRef.current.value;
    userService.login(username, password).then((res) => {
      if (res.errorCode === 0) {
        setMessage("");
        navigate("/home");
      } else {
        setMessage("Wrong username of password!");
      }
    });
    console.log(username, password);
    if (username === "admin" && password === "123456") {
      setMessage("OK");
    } else {
      setMessage("Failed");
    }
  };

  return (
    <div className="container h-100">
      <div className="row justify-content-center h-100 align-items-center">
        <div className="col-sm-8 col-lg-5">
          <div className="card bg-primary">
            <div className="card-header text-white">
              <h4 className="card-title mb-0">
                <i className="bi-grid-3x3-gap-fill"></i> Login
              </h4>
            </div>
            <div className="card-body bg-white rounded-bottom">
              <p className="text-center text-danger">{message}</p>
              <form onSubmit={formSubmitHandler}>
                <Input
                  inputRef={usernameRef}
                  label="User name"
                  id="txtUsername"
                  placeholder="Enter user name"
                  // autocomplete="off"
                />
                <Input
                  inputRef={passworkRef}
                  label="Password"
                  id="txtPassword"
                  type="Password"
                />
                {/* <Input label="note" id="txtnote" rows="2" /> */}
                <div className="row">
                  <div className="offset-sm-3 col-auto">
                    <button type="submit" className="btn btn-primary">
                      Sign in
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

// import React from "react";
// import Input from "./components/Input";
// class Login extends React.Component {
//   state = {
//     message: "",
//   };
//   usernameRef = React.createRef();
//   passwordRef = React.createRef();

//   formSubmitHandler = (e) => {
//     e.preventDefault();
//     const username = this.usernameRef.current.value;
//     const password = this.passwordRef.current.value;
//     console.log(username, password);
//     if (username === "admin" && password === "123456") {
//       this.setState({ Message: "Good!" });
//     } else {
//       this.setState({ Message: "Bad!" });
//     }
//   };
//   componentDidMount() {
//     this.usernameRef.current.focus();
//   }

//   render() {
//     return (
//       <div className="container h-100">
//         <div className="row justify-content-center h-100 align-items-center">
//           <div className="col-sm-8 col-lg-5">
//             <div className="card bg-primary">
//               <div className="card-header text-white">
//                 <h4 className="card-title mb-0">
//                   <i className="bi-grid-3x3-gap-fill"></i> Login
//                 </h4>
//               </div>
//               <div className="card-body bg-white rounded-bottom">
//                 <p className="text-center text-danger">{this.state.message}</p>
//                 {/* <form onSubmit={this.formSubmitHandler}>
//                   <Input
//                     inpuRef={this.usernameRef}
//                     id="txtUsername"
//                     name="userName"
//                     label="User name"
//                     type="text"
//                     maxLength="50"
//                     autocomplete="off"
//                     placeholder="Enter user name"
//                   />
//                   <Input
//                     inpuRef={this.passwordRef}
//                     id="txtPassword"
//                     name="password"
//                     label="Password"
//                     type="password"
//                     maxLength="100"
//                     autocomplete="off"
//                     placeholder="Enter password"
//                   />
//                   <div className="row">
//                     <div className="offset-sm-3 col-auto">
//                       <button type="submit" className="btn btn-primary">
//                         Sign in
//                       </button>
//                     </div>
//                   </div>
//                 </form>  */}
//                 <form onSubmit={this.formSubmitHandler}>
//                   <Input
//                     inputRef={this.usernameRef}
//                     label="User name"
//                     id="txtUsername"
//                     placeholder="Enter user name"
//                     autocomplete="off"
//                   />
//                   <Input
//                     inputRef={this.passworkRef}
//                     label="Password"
//                     id="txtPassword"
//                     type="Password"
//                   />
//                   {/* <div className="row mb-3">
//                     <label
//                       htmlFor="txtUsername"
//                       className="col-sm-3 col-form-label"
//                     >
//                       User name
//                     </label>
//                     <div className="col-sm-9">
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="txtUsername"
//                       />
//                     </div>
//                   </div>
//                   <div className="row mb-3">
//                     <label
//                       htmlFor="txtPassword"
//                       className="col-sm-3 col-form-label"
//                     >
//                       Password
//                     </label>
//                     <div className="col-sm-9">
//                       <input
//                         type="password"
//                         className="form-control"
//                         id="txtPassword"
//                       />
//                     </div>
//                   </div> */}
//                   <div className="row">
//                     <div className="offset-sm-3 col-auto">
//                       <button type="submit" className="btn btn-primary">
//                         Sign in
//                       </button>
//                     </div>
//                   </div>
//                 </form>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Login;

// // import React from "react";
// import { useNavigate } from "react-router-dom";

// // class Login extends React.Component {
// //   state = {
// //     message: "",
// //   };
// //   usernameRef = React.createRef();
// //   passwordRef = React.createRef();

// //   formSubmitHandler = (e) => {
// //     e.preventDefault();
// //     const username = this.usernameRef.current.value;
// //     const password = this.passwordRef.current.value;
// //     console.log(username, password);
// //     if (username === "admin" && password === "123456") {
// //       this.setState({ Message: "Good!" });
// //     } else {
// //       this.setState({ Message: "Bad!" });
// //     }
// //   };

// //   componentDidMount() {
// //     this.usernameRef.current.focus();
// //   }

// //   render() {
// //     return (
// //       <div className="container h-100">
// //         <div className="row justify-content-center h-100 align-items-center">
// //           <div className="col-sm-8 col-lg-5">
// //             <div className="card bg-primary">
// //               <div className="card-header text-white">
// //                 <h4 className="card-title mb-0">
// //                   <i className="bi-grid-3x3-gap-fill"></i> Login
// //                 </h4>
// //               </div>
// //               <div className="card-body bg-white rounded-bottom">
// //                 <p className="text-center text-danger">{this.state.message}</p>
// //                 {/* <form onSubmit={this.formSubmitHandler}>
// //                   <Input
// //                     inpuRef={this.usernameRef}
// //                     id="txtUsername"
// //                     name="userName"
// //                     label="User name"
// //                     type="text"
// //                     maxLength="50"
// //                     autocomplete="off"
// //                     placeholder="Enter user name"
// //                   />
// //                   <Input
// //                     inpuRef={this.passwordRef}
// //                     id="txtPassword"
// //                     name="password"
// //                     label="Password"
// //                     type="password"
// //                     maxLength="100"
// //                     autocomplete="off"
// //                     placeholder="Enter password"
// //                   />
// //                   <div className="row">
// //                     <div className="offset-sm-3 col-auto">
// //                       <button type="submit" className="btn btn-primary">
// //                         Sign in
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </form> */}
// //                 <form>
// //                   <div className="row mb-3">
// //                     <label
// //                       htmlFor="inputEmail3"
// //                       className="col-sm-3 col-form-label"
// //                     >
// //                       User name
// //                     </label>
// //                     <div className="col-sm">
// //                       <input
// //                         type="text"
// //                         className="form-control"
// //                         id="inputEmail3"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div className="row mb-3">
// //                     <label
// //                       htmlFor="inputEmail3"
// //                       className="col-sm-3 col-form-label"
// //                     >
// //                       Password
// //                     </label>
// //                     <div className="col-sm">
// //                       <input
// //                         type="password"
// //                         className="form-control"
// //                         id="inputEmail3"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div className="row">
// //                     <div className="offset-sm-3 col-auto">
// //                       <button type="button" className="btn btn-primary">
// //                         Sign in
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </form>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default Login;
