import "./App.css";
import AllUsers from "./component/AllUsers";
import Create from "./component/Create";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Update from "./component/Update";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/alluser" element={<AllUsers />} />
        <Route exact path="/edit/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
