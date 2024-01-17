import './App.css'
import Create from './component/Create'
import Navbar from './component/Navbar'
import {Routes, Route} from "react-router-dom";

function App() {

  return (
    <div>
    <Navbar/>
    <Routes>
    <Route exact path="/create" element={<Create/>} />
    </Routes>
    </div>
  )
}

export default App
