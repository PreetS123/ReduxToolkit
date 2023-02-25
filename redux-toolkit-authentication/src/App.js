import React from 'react';
import {Routes,Route} from 'react-router-dom';
import { SignUp } from './SignUp';
import { Login } from './Login';
import { Home } from './Home';


function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
