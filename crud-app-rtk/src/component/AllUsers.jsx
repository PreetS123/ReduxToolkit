import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../features/userDetailsSlice";
import CustomModal from "./customModal/CustomModal";

const AllUsers = () => {
  const { loading, users } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const handleEditClick = (rowId) => {
    console.log("edit", editId);
    setShowPopup(true);
    setEditId(rowId);
  };
  const handleDeleteClick = (rowId) => {
    console.log("delete", rowId);
    setDeleteId(rowId)
    setShowPopup(true);
  };

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
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    className="btn btn-danger m-2"
                    onClick={() => handleDeleteClick(user.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-link m-1 border"
                    onClick={() => handleEditClick(user.id)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {showPopup ? <CustomModal showPopup={showPopup} setShowPopup={setShowPopup} id={deleteId} /> : ""}
    </>
  );
};

export default AllUsers;
