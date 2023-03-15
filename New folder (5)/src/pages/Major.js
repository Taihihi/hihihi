import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import CustomButton from "../components/CustomButton";
import majorService from "../services/majorService";
import Input from "./../components/Input";

const defaultMajor = { id: 0, name: "" };

const Major = (props) => {
  const [major, setMajor] = useState(defaultMajor);
  const [majors, setMajors] = useState([]);

  const [modalShow, setModalShow] = useState(false);
  const handModalClose = () => setModalShow(false);

  const showEditModal = (e, id) => {
    if (e) e.preventDefault();
    if (id > 0) {
      majorService.get(id).then((res) => {
        setMajor(res.data);
        setModalShow(true);
      });
    } else {
      setMajor(defaultMajor);
      setModalShow(true);
    }
  };

  const handleChange = (e) => {
    const newMajor = { ...major };
    newMajor[e.target.name] = e.target.value;
    setMajor(newMajor);
  };

  const saveHandler = () => {
    if (major.id > 0) {
      majorService.update(major.id, major).then((res) => {
        if (res.errorCode === 0) {
          handModalClose();
          toast.success("Update successful");
          loadData();
        } else {
          toast.error(res.message);
        }
      });
    } else {
      majorService.add(major).then((res) => {
        if (res.errorCode === 0) {
          handModalClose();
          toast.success("Add successful");
          loadData();
        } else {
          toast.error(res.message);
        }
      });
    }
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    majorService.delete(id).then((res) => {
      if (res.errorCode === 0) {
        loadData();
        toast.success("Delete successful");
      } else {
        toast.error(res.message);
      }
    });
  };

  const loadData = () => {
    majorService.list().then((res) => setMajors(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="card border-primary bt-5">
          <div className="card-header">
            <div className="row">
              <div className="col">
                <h3 className="card-title">
                  Major <small className="text-muted">list</small>
                </h3>
              </div>
              <div className="col-auto">
                <CustomButton
                  color="primary"
                  onClick={() => showEditModal(null, 0)}
                >
                  <i className="bi-plus-lg" /> Add
                </CustomButton>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered border-primary table-hover table-striped">
                <thead>
                  <tr className="table-primary border-primary">
                    <th style={{ width: 50 }}>#</th>
                    <th>Major Name</th>
                    <th style={{ width: 80 }} />
                  </tr>
                </thead>
                <tbody>
                  {majors.map((aMajor, idx) => (
                    <tr key={aMajor.id}>
                      <td>{idx + 1}</td>
                      <td>{aMajor.name}</td>
                      <td>
                        <a
                          href="/#"
                          onClick={(e) => showEditModal(e, aMajor.id)}
                        >
                          <i className="bi-pencil-square text-primary" />
                        </a>
                        <a
                          href="/#"
                          onClick={(e) => handleDelete(e, aMajor.id)}
                        >
                          <i className="bi-trash text-danger" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal show={modalShow} onHide={handModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Major{" "}
            <small className="text-muted">
              {major.id === 0 ? "new" : "edit"}
            </small>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            label="Major name"
            lastRow
            required
            onChange={handleChange}
            name="name"
            defaultValue={major.name}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveHandler}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Major;

// // import React from "react";
// // import { Navigate } from "react-router-dom";
// // import { useNavigate } from "react-router-dom";
// // import majorService from "../services/majorService";
// // import { useState } from "react";
// // import { useEffect } from "react";

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import majorService from "../services/majorService";
// import CustomButton from "../components/CustomButton";

// const Major = (props) => {
//   const [majors, setMajors] = useState([]);
//   const navigate = useNavigate();

//   const showEditPage = (e, id) => {
//     if (e) e.preventDefault();
//     navigate(`/major/${id}`);
//   };

//   const handleDelete = (e, id) => {
//     e.preventDefault();
//     majorService.delete(id).then((res) => {
//       if (res.errorCode === 0) {
//         loadData();
//       }
//     });
//   };

//   const loadData = () => {
//     majorService.list().then((res) => {
//       setMajors(res.data);
//     });
//   };

//   useEffect(() => {
//     loadData();
//   }, []);
//   return (
//     <>
//       <div className="container mt-4">
//         <div className="card border-primary bt-5">
//           <div className="card-header">
//             <div className="row">
//               <div className="col">
//                 <h3 className="card-title">
//                   Major <small className="text-muted">list</small>
//                 </h3>
//                 {/* <h3 className="card-title">
//                 Major <small className="text-muted">list</small>
//               </h3> */}
//               </div>
//               <div className="col-auto">
//                 <CustomButton
//                   color="primary"
//                   //   type="button"
//                   //   className="btn btn-primary"
//                   //   data-bs-toggle="modal"
//                   //   data-bs-target="#editModal"
//                   onClick={() => showEditPage(null, 0)}
//                 >
//                   <i className="bi-plus-lg"></i> Add
//                 </CustomButton>
//               </div>
//             </div>
//           </div>
//           <div className="card-body">
//             <div className="table-responsive">
//               <table className="table table-bordered border-primary table-hover table-striped">
//                 <thead>
//                   <tr className="table-primary border-primary">
//                     <th style={{ width: "50px" }}>#</th>
//                     <th>Major Name</th>
//                     <th style={{ width: "80px" }}>#</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {majors.map((aMajor, idx) => (
//                     <tr key={aMajor.id}>
//                       <td>{idx + 1}</td>
//                       <td>{aMajor.name}</td>
//                       <td>
//                         <a
//                           href="/#"
//                           className="me-1"
//                           onClick={(e) => showEditPage(e, aMajor.id)}
//                         >
//                           <i className="bi-pencil-square text-primary"></i>
//                         </a>
//                         <a
//                           href="/#"
//                           onClick={(e) => handleDelete(e, aMajor.id)}
//                         >
//                           <i className="bi-trash text-danger"></i>
//                         </a>
//                       </td>
//                     </tr>
//                   ))}
//                   {/* <tr>
//                     <td>1</td>
//                     <td>IT</td>
//                     <td>
//                       <a href="/#">
//                         <i className="bi-pencil-square text-primary"></i>
//                       </a>
//                       <a href="/#">
//                         <i className="bi-trash text-danger"></i>
//                       </a>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>2</td>
//                     <td>Marketing</td>
//                     <td>
//                       <a href="/#">
//                         <i className="bi-pencil-square text-primary"></i>
//                       </a>
//                       <a href="/#">
//                         <i className="bi-trash text-danger"></i>
//                       </a>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>3</td>
//                     <td>Network</td>
//                     <td>
//                       <a href="/#">
//                         <i className="bi-pencil-square text-primary"></i>
//                       </a>
//                       <a href="/#">
//                         <i className="bi-trash text-danger"></i>
//                       </a>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>4</td>
//                     <td>Accounting</td>
//                     <td>
//                       <a href="/#">
//                         <i className="bi-pencil-square text-primary"></i>
//                       </a>
//                       <a href="/#">
//                         <i className="bi-trash text-danger"></i>
//                       </a>
//                     </td>
//                   </tr> */}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div
//         className="modal fade"
//         id="editModal"
//         data-bs-backdrop="static"
//         data-bs-keyboard="false"
//         tabIndex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//                 New Major
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <form>
//                 <div className="row">
//                   <label
//                     htmlFor="txtMajor"
//                     className="col-sm-3 col-form-label required"
//                   >
//                     Major name
//                   </label>
//                   <div className="col-sm-9">
//                     <input type="text" className="form-control" id="txtMajor" />
//                   </div>
//                 </div>
//               </form>
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//               <button type="button" className="btn btn-primary">
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </>
//   );
// };

// export default Major;
