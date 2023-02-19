import React from "react";
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import { clearUsers } from "../store/slices/UserSlice";


export const DeleteAllUser = () => {
    const dispatch=useDispatch();

    const clearAllUser=()=>{
        dispatch(clearUsers());
    }

  return <Wrapper>
    <button className="btn clear-btn" onClick={()=>clearAllUser()}>
        Clear user
    </button>
  </Wrapper>;
};


const Wrapper=styled.section`
 .clear-btn{
    text-transform:capitalize;
    background-color:#db338a;
    margin-top:2rem;
 }
`