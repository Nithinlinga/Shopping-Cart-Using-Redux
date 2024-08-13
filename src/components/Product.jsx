import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

const Product = ({post}) => {

  const {cart}=useSelector((state)=>state )
  const dispatch=useDispatch();
  function addItem() {
    dispatch(add(post))
    toast.success("Item added to Cart")
  }
  function removeItem(){
    dispatch(remove(post.id))
    toast.error("Item Removed from Cart")
  }
  return (
    <div className='flex flex-col items-center justify-between
     hover:scale-110 tansi duration-300 gap-3 p-4 mt-10 ml-5 rounded-xl bg-slate-100
      ease-in hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>


    <div >
      <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>

    </div>
    <div>
      <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
    </div>
    <div className='h-[180px]'>
      <img className='w-full h-full'
       src={post.image} alt='product'/>
    </div>
    <div className='flex justify-between gap-12 items-center w-full mt-5'>
    <div>
      <p className='text-green-600 font-semibold '>₹{post.price}</p>
    </div>
    <div >
       {
          cart.some((p)=>p.id===post.id) ?
          (
            <button className=' text-gray-700 border-2 border-gray-700
            rounded-full fontt-semibold text-[12px] p-1 px-3 uppercase 
            hover:bg-gray-700
            hover:text-white transition duration-300 ease-in'
            onClick={removeItem}>
              Remove Item
            </button>
          ):(
            <button className=' text-gray-700 border-2 border-gray-700
            rounded-full fontt-semibold text-[12px] p-1 px-3 uppercase 
            hover:bg-gray-700
            hover:text-white transition duration-300 ease-in' onClick={addItem}>
              Add to Cart
            </button>
          )
       }
    </div>
    </div>

    
  </div>
  )
}

export default Product
