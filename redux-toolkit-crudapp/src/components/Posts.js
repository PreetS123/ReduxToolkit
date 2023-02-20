import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import {
  deletePost,
  getPost,
  setEdit,
  updatePost,
} from "../redux/features/PostSlice";

export const Posts = () => {
  const [id, setId] = useState("");
  const [textbody, setTextBody] = useState("");
  const { loading, post, body, edit } = useSelector((state) => ({
    ...state.app,
  }));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFetchData = (e) => {
    e.preventDefault();
    if (!id) {
      window.alert("Please provide the right id");
    } else {
      dispatch(getPost({ id }));
      setId("");
    }
  };

  const handleDelete = ({ id }) => {
    dispatch(deletePost({ id: post[0].id }));
    window.alert("Post deleted");
  };

  useEffect(() => {
    if (body) {
      setTextBody(body);
    }
  }, [body]);

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
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <button
              onClick={handleFetchData}
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
      <div className="container">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {post.length > 0 ? (
              <>
                <div className="card mt-4">
                  <div className="card-body">
                    <h5 className="card-title">{post[0].title}</h5>
                    {edit ? (
                      <>
                        <textarea
                          className="form-control"
                          value={textbody}
                          onChange={(e) => setTextBody(e.target.value)}
                          id="floatingTextarea"
                        />
                        <div className="d-flex align-items-end justify-content-end">
                          <button
                            className="btn btn-primary"
                            onClick={() =>
                              dispatch(setEdit({ edit: false, body: "" }))
                            }
                          >
                            Cancel
                          </button>
                          <button
                            className="btn btn-danger ms-4"
                            onClick={() => {
                              dispatch(
                                updatePost({
                                  id: post[0].id,
                                  title: post[0].title,
                                  body: textbody,
                                })
                              );
                              dispatch(setEdit({ edit: false, body: "" }));
                            }}
                          >
                            Save
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="card-text">{post[0].body}</p>
                      </>
                    )}

                    {!edit && (
                      <>
                        <div className="d-flex align-items-end justify-content-end">
                          <button
                            className="btn btn-primary"
                            onClick={() =>
                              dispatch(
                                setEdit({ edit: true, body: post[0].body })
                              )
                            }
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger ms-4"
                            onClick={handleDelete}
                          >
                            Delete
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </>
            ) : null}
          </>
        )}
      </div>
    </>
  );
};
