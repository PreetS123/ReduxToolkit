import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModel } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

const Modal = () => {
    const dispatch= useDispatch();
    const {isModelOpen}= useSelector((store)=>store.model);
    

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Are you sure?</h4>
        <div className="btn-container">
          <button 
          onClick={()=>{
            dispatch(clearCart())
            return dispatch(closeModel(false))
        }}
           type="button" className="btn confirm-btn">
            Confirm
          </button>
          <button
           onClick={()=>dispatch(closeModel(false))}
           type="button" 
           className="btn clear-btn">
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
