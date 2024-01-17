import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../features/userDetailsSlice";

const AllUsers = () => {
  const { loading, users } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  if (loading)
    return (
      <div>
        <h2>loading...</h2>
      </div>
    );
  return (
    <>
      <div>
        <h2>All Data</h2>
        <div className="d-flex flex-wrap gap-1 w-100">
          {users?.map((user) => {
            return (
              <div key={user.id} className="card w-25 mx-auto p-1">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {user.email}
                  </h6>
                  <div className="d-flex justify-content-between">
                    <p className="card-text">Age:{user.age}</p>
                    <p className="card-text">Gender: {user.gender}</p>
                  </div>
                  <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="btn btn-danger m-2">Delete</button>
                  <button className="btn btn-link m-1 border">Edit</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
           <div className="modal-body">
              Are you sure you want to delete this data?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
