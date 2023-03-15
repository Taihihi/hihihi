import "./App.css";
import React from "react";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./containers/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

// // import logo from './logo.svg';
// import "./App.css";
// import Login from "./login";

// function App() {
//   return <Login />;
//   // <>
//   //   <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//   //     <div className="container">
//   //       <a className="navbar-brand" href="/#">
//   //         {/* <img src={logo} alt="logo" style={{ height: "25px" }} /> */}
//   //         Student Management
//   //       </a>
//   //       <button
//   //         className="navbar-toggler"
//   //         type="button"
//   //         data-bs-toggle="collapse"
//   //         data-bs-target="#navbarNav"
//   //         aria-controls="navbarNav"
//   //         aria-expanded="false"
//   //         aria-label="Toggle navigation"
//   //       >
//   //         <span className="navbar-toggler-icon"></span>
//   //       </button>
//   //       <div className="collapse navbar-collapse" id="navbarNav">
//   //         <ul className="navbar-nav me-auto">
//   //           <li className="nav-item">
//   //             <a className="nav-link" href="/#">
//   //               Major
//   //             </a>
//   //           </li>
//   //           <li className="nav-item">
//   //             <a className="nav-link" href="/#">
//   //               Student
//   //             </a>
//   //           </li>
//   //         </ul>
//   //         <ul className="navbar-nav">
//   //           <li className="nav-item">
//   //             <a className="nav-link" href="/#">
//   //               welcome to ...{" "}
//   //             </a>
//   //           </li>
//   //           <li className="nav-item">
//   //             <a className="nav-link" href="/#">
//   //               <i className="bi-box-arrow-right"></i>
//   //             </a>
//   //           </li>
//   //         </ul>
//   //       </div>
//   //     </div>
//   //   </nav>
//   //   <div className="container mt-4">
//   //     <div className="card border-primary bt-5">
//   //       <div className="card-header">
//   //         <div className="row">
//   //           <div className="col">
//   //             <h3 className="card-title">
//   //               Major <small className="text-muted">list</small>
//   //             </h3>
//   //           </div>
//   //           <div className="col-auto">
//   //             <button
//   //               type="button"
//   //               className="btn btn-primary"
//   //               data-bs-toggle="modal"
//   //               data-bs-target="#editModal"
//   //             >
//   //               <i className="bi-plus-lg"></i> Add
//   //             </button>
//   //           </div>
//   //         </div>
//   //       </div>
//   //       <div className="card-body">
//   //         <div className="table-responsive">
//   //           <table className="table table-bordered border-primary table-hover table-striped">
//   //             <thead>
//   //               <tr className="table-primary border-primary">
//   //                 <th style={{ width: "50px" }}>#</th>
//   //                 <th>Major Name</th>
//   //                 <th style={{ width: "80px" }}>#</th>
//   //               </tr>
//   //             </thead>
//   //             <tbody>
//   //               <tr>
//   //                 <td>1</td>
//   //                 <td>IT</td>
//   //                 <td>
//   //                   <a href="/#">
//   //                     <i className="bi-pencil-square text-primary"></i>
//   //                   </a>
//   //                   <a href="/#">
//   //                     <i className="bi-trash text-danger"></i>
//   //                   </a>
//   //                 </td>
//   //               </tr>
//   //               <tr>
//   //                 <td>2</td>
//   //                 <td>Marketing</td>
//   //                 <td>
//   //                   <a href="/#">
//   //                     <i className="bi-pencil-square text-primary"></i>
//   //                   </a>
//   //                   <a href="/#">
//   //                     <i className="bi-trash text-danger"></i>
//   //                   </a>
//   //                 </td>
//   //               </tr>
//   //               <tr>
//   //                 <td>3</td>
//   //                 <td>Network</td>
//   //                 <td>
//   //                   <a href="/#">
//   //                     <i className="bi-pencil-square text-primary"></i>
//   //                   </a>
//   //                   <a href="/#">
//   //                     <i className="bi-trash text-danger"></i>
//   //                   </a>
//   //                 </td>
//   //               </tr>
//   //               <tr>
//   //                 <td>4</td>
//   //                 <td>Accounting</td>
//   //                 <td>
//   //                   <a href="/#">
//   //                     <i className="bi-pencil-square text-primary"></i>
//   //                   </a>
//   //                   <a href="/#">
//   //                     <i className="bi-trash text-danger"></i>
//   //                   </a>
//   //                 </td>
//   //               </tr>
//   //             </tbody>
//   //           </table>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </div>

//   //   <div
//   //     className="modal fade"
//   //     id="editModal"
//   //     data-bs-backdrop="static"
//   //     data-bs-keyboard="false"
//   //     tabindex="-1"
//   //     aria-labelledby="exampleModalLabel"
//   //     aria-hidden="true"
//   //   >
//   //     <div className="modal-dialog">
//   //       <div className="modal-content">
//   //         <div className="modal-header">
//   //           <h5 className="modal-title" id="exampleModalLabel">
//   //             New Major
//   //           </h5>
//   //           <button
//   //             type="button"
//   //             className="btn-close"
//   //             data-bs-dismiss="modal"
//   //             aria-label="Close"
//   //           ></button>
//   //         </div>
//   //         <div className="modal-body">
//   //           <form>
//   //             <div className="row">
//   //               <label
//   //                 for="txtMajor"
//   //                 className="col-sm-3 col-form-label required"
//   //               >
//   //                 Major name
//   //               </label>
//   //               <div className="col-sm-9">
//   //                 <input type="text" className="form-control" id="txtMajor" />
//   //               </div>
//   //             </div>
//   //           </form>
//   //         </div>
//   //         <div className="modal-footer">
//   //           <button
//   //             type="button"
//   //             className="btn btn-secondary"
//   //             data-bs-dismiss="modal"
//   //           >
//   //             Close
//   //           </button>
//   //           <button type="button" className="btn btn-primary">
//   //             Save
//   //           </button>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </div>
//   // </>
//   // );
// }

// export default App;
