import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailsSlice";

const Update = () => {
  const { id } = useParams();
  const { users, loading } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateState, setUpdateState] = useState([]);
  // console.log(updateState);
  useEffect(() => {
    let singleUser = users.filter((el) => el.id === id);
    setUpdateState(singleUser[0]);
  }, [id, users]);
  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateState));
    navigate("/alluser");
  };
  const getInputValue = (e) => {
    setUpdateState({ ...updateState, [e.target.name]: e.target.value });
  };

  if (loading) {
    return (
      <>
        <h2>loading...</h2>
      </>
    );
  }
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
              value={updateState && updateState.name}
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
              value={updateState && updateState.email}
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
              value={updateState && updateState.age}
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
                checked={updateState && updateState.gender == "Male"}
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
                checked={updateState && updateState.gender == "Female"}
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

export default Update;
