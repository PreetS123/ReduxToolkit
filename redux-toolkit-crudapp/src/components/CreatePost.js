import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import {createPost} from '../redux/features/PostSlice';

export const CreatePost = () => {
  const [values, setValues] = useState({
    title: "",
    body: "",
  });
  const [show,setShow]= useState(false);
  const { title, body } = values;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {loading,post} =useSelector(state=>({...state.app}));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({values}));
    setValues({title:"",body:""});
    setShow(true);

  };

  const showCreatedPost=()=>{
    return(
      <>
      {
        loading?<Spinner/>:(
          <div className="card mt-4">
                  <div className="card-body">
                    <h5 className="card-title">{post[0].title}</h5>
                       <p className="card-text">{post[0].body}</p>

                        </div>
                    </div>
        )
      }
      </>
    )
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center bg-dark text-white p-2">Create Post </h1>
      <form action="">
        <div className="mb-3 mt-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            placeholder="Enter Post Title"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            value={body}
            onChange={(e) => setValues({ ...values, body: e.target.value })}
            placeholder="add post description"
            id="floatingTextarea"
          />
          <label htmlFor="floatingTextarea">add post description</label>
        </div>
        <div className="mt-4 d-flex align-items-end justify-content-end">
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Go Home
          </button>
          <button
            className="btn btn-danger ms-4"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
      <div className="mt-4">{show && <div>{showCreatedPost()}</div>}</div>
    </div>
  );
};
