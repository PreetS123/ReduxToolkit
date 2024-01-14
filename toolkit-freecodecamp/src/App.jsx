import { useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import './App.css';
import Navbar from "./components/Navbar";
import CartContainer from './components/CartContainer';
import { calculateTotals } from './features/cart/cartSlice';
import Modal from './components/Modal';

function App() {
  const {cartItems}= useSelector((store)=>store.cart);
  const dispatch= useDispatch()
  const {isModalOpen}= useSelector((store)=>store.model)
  
  useEffect(()=>{
    dispatch(calculateTotals());
  },[cartItems])
  

  return (
    <>
    <main>
       <Navbar/>  
       <CartContainer/>    
    </main>
    {
    isModalOpen? <Modal/>:<></>
    }
    </>
  )
}

export default App
