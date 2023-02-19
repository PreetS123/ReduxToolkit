import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEdit, updatePost } from "../redux/features/PostSlice";
import { useNavigate } from "react-router-dom";
// import { deletePost, getPost } from "./../redux/features/PostSlice";
import Spinner from "./Spinner";



export const Posts = () => {

  const navigate=useNavigate();


  return (
    <>
          <div className="row mt-4 d-flex align-items-center justify-content-center">
        <div className="col-md-8">
          <form action="">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Search By ID:
              </label>
              <input
                type="number"
                // value={id}
                // onChange={(e) => setId(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <button
              // onClick={handleFetchData}
              type="submit"
              className="btn btn-primary"
            >
              Fetch post
            </button>
            <button
              onClick={() => navigate("/createpost")}
              type="button"
              className="btn btn-warning ms-4"
            >
              Create post
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
