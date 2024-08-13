import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const {cart}=useSelector((state)=> state);
  const [totalAmount,setTotalAmount]=useState(0);
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])
  return (
    <div >
      <div>
        {
          cart.length>0 ?
          (<div className='flex w-11/12 justify-center'>
            <div className='w-1/2 '>
            {
              cart.map((item,index)=>{
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              })
            }
            </div>
            <div className='flex flex-col h-[80vh] ml-[30px] mt-10'>

            <div  className=' mt-10 justify-start h-full'>
              <div className=' text-green-700 font-bold uppercase'>Your Cart</div>
              <div className='text-green-600 font-bold text-[30px] uppercase'>Summary</div>
              <p>
                <span className='text-gray-700 font-semibold '>Total Items: {cart.length}</span>
              </p>
            </div>
            <div className=' justify-end '>
              <p className='text-gray-700 font-semibold mb-3'>Total Amount {totalAmount}</p>
              <button className=' bg-green-700 w-[250px] text-white font-bold rounded-md h-[40px]'>Checkout Now</button>
            </div>
              
            </div>
          </div>
            
        ):
          (<div className=' flex justify-center items-center  flex-col'>
            <h1>Cart is Empty</h1>
            <Link to={"/"}>
            <button className=' bg-green-600 rounded-2xl uppercase'>Shop Now</button>
            </Link>
          </div>)
        }
      </div>
    </div>
  )
}

export default Cart