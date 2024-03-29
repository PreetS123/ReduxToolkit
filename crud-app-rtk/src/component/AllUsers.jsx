import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../features/userDetailsSlice";
import CustomModal from "./customModal/CustomModal";
import { useNavigate } from "react-router-dom";

const AllUsers = () => {
  const { loading, users, searchQuery } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  const navigate = useNavigate("");
  const [deleteId, setDeleteId] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [searchCurr, setSearchCurr] = useState("");
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  useEffect(() => {
    if (users.length > 0) {
      setFilteredData(users);
    }
  }, [users]);

  useEffect(() => {
    setSearchCurr(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    if (searchCurr.length > 0) {
      // console.log(searchCurr);
      const filtered = users.filter((el) =>
        el.name.toLowerCase().includes(searchCurr) || 
        el.age.toString().includes(searchCurr) ||
        el.email.toLowerCase().includes(searchCurr) ||
        el.gender.toLowerCase()===searchCurr.toLowerCase()
      );
      // console.log("filtered",filtered);
      setFilteredData(filtered);
    }
  }, [searchCurr]);
  // console.log('1',searchCurr);

  const handleFilterClick = (btnText) => {
    if (btnText) {
      const filtered = users.filter(
        (el) => el.gender.toLowerCase() == btnText.toLowerCase()
      );
      setFilteredData(filtered);
    }
  };

  const handleEditClick = (rowId) => {
    navigate(`/edit/${rowId}`);
  };
  const handleDeleteClick = (rowId) => {
    // console.log("delete", rowId);
    setDeleteId(rowId);
    setShowPopup(true);
  };

  // console.log("filteredData", filteredData, "users", users);
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
        <div className="d-flex gap-2 justify-content-center align-items-center m-3">
          <button
            className="btn rounded-1 border"
            onClick={() => handleFilterClick("female")}
          >
            Female
          </button>
          <button
            className="btn rounded-1 border"
            onClick={() => handleFilterClick("male")}
          >
            Male
          </button>
        </div>
        <div className="d-flex flex-wrap gap-1 w-100">
          {filteredData &&
            filteredData.map((user) => {
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
      {showPopup ? (
        <CustomModal
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          id={deleteId}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default AllUsers;
