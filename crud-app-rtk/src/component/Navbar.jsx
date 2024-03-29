import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { searchUser } from "../features/userDetailsSlice";

const Navbar = () => {
  const allUsers = useSelector((store) => store.app.users);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    let sval = e.target.value;
    setSearch(sval.toLowerCase());
    //  console.log(sval);
  };

  useEffect(() => {
    dispatch(searchUser(search));
  }, [search]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Redux toolkit
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/create"
                >
                  Create Post
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink to="/alluser" className="nav-link active">
                  All Post ({allUsers.length})
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                onChange={handleSearch}
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
