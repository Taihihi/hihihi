import logo from "./../img/graduate.png";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { logout } from "../store/reducers/auth";

const Header = (props) => {
  // const userInfo = useSelector((state) => state.auth.userInfo);
  // const dispatch = useDispatch();

  return (
    <Navbar bg="primary" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo" style={{ height: "25px" }} />
          Student Management
        </Navbar.Brand>
        {/* <Navbar.Brand as={Link} to="/home">
          <img src={logo} alt="logo" style={{ height: "25px" }} />
          Student Management
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/major">
              Major
            </Nav.Link>
            <Nav.Link href="/#">Student</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/#">welcome to ...</Nav.Link>
            <Nav.Link as={Link} to="/login">
              <i className="fas fa-sign-out-alt"></i>
            </Nav.Link>
            {/* <Nav.Link  as={NavLink} to="/#">
              welcome to ...{userInfo.fullName}
            </Nav.Link>
            <Nav.Link onClick={() => dispatch(logout())}>
              <i className="fas fa-sign-out-alt"></i>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    //   <div className="container">
    //     <Link className="navbar-brand" to="/">
    //       <img src={logo} alt="logo" style={{ height: "25px" }} />
    //       Student Management
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav me-auto">
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/major">
    //             Major
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/#">
    //             Student
    //           </a>
    //         </li>
    //       </ul>
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <a className="nav-link" href="/#">
    //             welcome to ...{" "}
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/#">
    //             <i className="bi-box-arrow-right"></i>
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Header;

// // import React, { useState, useEffect } from "react";
// import logo from "./../img/graduate.png";
// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// const Header = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <div className="container">
//         <Link className="navbar-brand" to="/">
//           <img src={logo} alt="logo" style={{ height: "25px" }} />
//           Student Management
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav me-auto">
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/major">
//                 Major
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/#">
//                 Student
//               </a>
//             </li>
//           </ul>
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a className="nav-link" href="/#">
//                 welcome to ...{" "}
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/#">
//                 <i className="bi-box-arrow-right"></i>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
