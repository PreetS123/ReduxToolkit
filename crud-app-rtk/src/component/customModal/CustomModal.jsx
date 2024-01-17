import { useDispatch, useSelector } from "react-redux";
import "./customModal.css";
import { deleteUser, getAllUsers } from "../../features/userDetailsSlice";


const CustomModal = ({ id, showPopup, setShowPopup }) => {
  const allUser = useSelector((store) => store.app.users);
  const singleUser = allUser.filter((el) => el.id === id);
  const dispatch= useDispatch();
  // console.log(singleUser);  
  const handleDelete=()=>{
    dispatch(deleteUser(id))
    dispatch(getAllUsers())
    setShowPopup(!showPopup)
  }
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="modal-body">
            <h5>Are you sure you want to delete <span className="text-danger">{singleUser[0].name}</span> ?</h5>
          </div>
          <div className="modal-footer">
            <button onClick={handleDelete} className="btn btn-danger rounded-1">Delete</button>
            <button className="btn" onClick={() => setShowPopup(!showPopup)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomModal;
