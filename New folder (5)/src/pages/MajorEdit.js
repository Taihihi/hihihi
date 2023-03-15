import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Input from "../components/Input";
// import CustomButton from "../components/CustomButton";
import majorService from "../services/majorService";

const MajorEdit = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [major, setMajor] = useState({ id: 0, name: "" });
  const [message, setMessage] = useState("");
  const param = useParams();

  useEffect(() => {
    if (param.id > 0) {
      majorService.get(param.id).then((res) => {
        setMajor(res.data);
      });
    }
  }, [param.id]);

  const handleBack = () => {
    navigate("/major");
  };

  const handleChange = (e) => {
    const newData = { ...major };
    newData[e.target.name] = e.target.value;
    setMajor(newData);
  };

  const handleSave = () => {
    if (major.id === 0) {
      majorService.add(major).then((res) => {
        if (res.errorCode === 0) navigate("/major");
        else setMessage(res.message);
      });
    } else {
      majorService.update(major.id, major).then((res) => {
        if (res.errorCode === 0) navigate("/major");
        else setMessage(res.message);
      });
    }
  };

  useEffect(() => {
    if (!/\d+/.test(id)) {
      navigate("/not-found");
    }
  }, [id, navigate]);

  return (
    <>
      {/* <div className="container mt-4">
        <div className="card border-primary bt-5">
          <div className="card-header">
            <div className="row">
              <div className="col">
                <h3 className="card-title">
                  Major{" "}
                  <small className="text-muted">
                    {Number(id) === 0 ? "new" : "edit"}
                  </small>
                </h3>
                {/* <h3 className="card-title">
                Major <small className="text-muted">list</small>
              </h3> 
              </div>
              <div className="col-auto">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                >
                  <i className="bi-plus-lg"></i> Add
                </button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered border-primary table-hover table-striped">
                <thead>
                  <tr className="table-primary border-primary">
                    <th style={{ width: "50px" }}>#</th>
                    <th>Major Name</th>
                    <th style={{ width: "80px" }}>#</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>IT</td>
                    <td>
                      <a href="/#">
                        <i className="bi-pencil-square text-primary"></i>
                      </a>
                      <a href="/#">
                        <i className="bi-trash text-danger"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Marketing</td>
                    <td>
                      <a href="/#">
                        <i className="bi-pencil-square text-primary"></i>
                      </a>
                      <a href="/#">
                        <i className="bi-trash text-danger"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Network</td>
                    <td>
                      <a href="/#">
                        <i className="bi-pencil-square text-primary"></i>
                      </a>
                      <a href="/#">
                        <i className="bi-trash text-danger"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Accounting</td>
                    <td>
                      <a href="/#">
                        <i className="bi-pencil-square text-primary"></i>
                      </a>
                      <a href="/#">
                        <i className="bi-trash text-danger"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="editModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              {/* <h5 className="modal-title" id="exampleModalLabel">
                New Major
              </h5> 
              <h3 className="card-title">
                Major{" "}
                <small className="text-muted">
                  {Number(id) === 0 ? "new" : "edit"}
                </small>
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <Input
                    label="Major name"
                    id="txtMajorName"
                    name="name"
                    // required
                    onChange={handleChange}
                    defaultValue={major.name}
                  />
                  {/* <label
                    htmlFor="txtMajor"
                    className="col-sm-3 col-form-label required"
                  >
                    Major name
                  </label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" id="txtMajor" />
                  </div> 
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <CustomButton
                color="secondary"
                className="me-1"
                // className="btn btn-secondary me-1"
                data-bs-dismiss="modal"
                onClick={handleBack}
              >
                Back
              </CustomButton>
              {/* <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleBack}
              >
                Back
              </button> *
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
  </div> */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card border-primary bt-5">
              <div className="card-header">
                <div className="row">
                  <div className="col">
                    <h3 className="card-title">
                      Major{" "}
                      <small className="text-muted">
                        {Number(id) === 0 ? "new" : "edit"}
                      </small>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <p className="text-center text-danger">{message}</p>
                <Input
                  label="Major name"
                  id="txtMajorName"
                  required
                  name="name"
                  onChange={handleChange}
                  defaultValue={major.name}
                />
              </div>
              <div className="card-footer text-center">
                <button
                  type="button"
                  onClick={handleBack}
                  className="btn btn-secondary me-1"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="btn btn-primary"
                >
                  Save
                </button>
                {/* <button type="button" className="btn btn-primary">
                  Save
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MajorEdit;
