import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";



export const CreatePost = () => {
  const [values,setValues]= useState({
    title:'',
    body:""
  });
  const dispatch=useDispatch();
  const navigate= useNavigate();

  
  return (
    <div>

    </div>
  )
}
