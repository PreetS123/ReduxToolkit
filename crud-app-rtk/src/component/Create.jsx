import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailsSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const dispatch= useDispatch();
  const navigate= useNavigate();
  const [users, setUsers] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });

  const getInputValue = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(users));
    navigate('/alluser');
  };

  return (
    <>
      <div>
        <form onSubmit={onFormSubmit} className="w-50 m-auto border p-3 mt-4">
          <div className="d-flex mb-3">
            <label htmlFor="exampleInputName1" className="form-label col-md-3">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName1"
              name="name"
              onChange={getInputValue}
            />
          </div>
          <div className="d-flex mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label col-md-3">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              onChange={getInputValue}
            />
          </div>
          <div className="d-flex mb-3">
            <label htmlFor="exampleInputAge1" className="form-label col-md-3">
              Age
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputAge1"
              name="age"
              onChange={getInputValue}
            />
          </div>
          <div className="d-flex gap-3 w-50 m-auto mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Male"
                name="gender"
                onChange={getInputValue}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Female"
                name="gender"
                id="flexCheckChecked"
                onChange={getInputValue}
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Female
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
