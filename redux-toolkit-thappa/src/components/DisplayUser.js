import React from 'react';
import styled from "styled-components";
import {useSelector,useDispatch} from 'react-redux';
import {MdDeleteForever} from 'react-icons/md';
import { removeUser } from '../store/slices/UserSlice';


export const DisplayUser = () => {
    const data= useSelector((state)=>state.users);
    const dispatch=useDispatch();

    const deleteUser=(id)=>{
        dispatch(removeUser(id)) 
    }
  return (
    <Wrapper>
        {
            data?.map((user,id)=>{
                return <li key={id}>{user}
                <button className='btn-delete' onClick={()=>deleteUser(id)} >
                <MdDeleteForever className='delete-icon'/>
                </button>
                </li>
            })
        }
    </Wrapper>
  )
}

const Wrapper=styled.section`
li{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:1rem;
    border-bottom:1px solid #eee;

    &:first-child{
        border-top:1px solid #eee;
    }

}
.delete-btn {
    background-color: transparent;
    border: none;
  }
.delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
`
