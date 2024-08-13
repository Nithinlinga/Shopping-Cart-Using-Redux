import React from 'react'
import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();
  function removeItem(){
    dispatch(remove(item.id))
    toast.success("Item removed from Cart")
  }
  return (
    <div className='flex flex-col mb-4'>
    <div className='flex gap-8 items-start'>
      <div className='w-[180px]'>
        <img className='h-full' src={item.image} alt="product" />
      </div>
      <div className='flex flex-col justify-between w-full max-w-[60vh]'>
        <div>
          <h1 className='text-gray-700 font-semibold text-lg mt-1 leading-tight'>
            {item.title}
          </h1>
          <h2 className='text-gray-400 font-normal text-s mt-1 leading-snug overflow-hidden text-ellipsis line-clamp-2'>
            {item.description}
          </h2>
        </div>
        <div className='flex items-center justify-between mt-2'>
          <p className='text-green-600 font-bold'>₹{item.price}</p>
          <div className='cursor-pointer rounded-full w-10 h-10 bg-red-400 flex justify-center items-center' onClick={removeItem}>
            <FcDeleteDatabase color=' text-red-900' />
          </div>
        </div>
      </div>
    </div>
    <hr className='border-t-2 border-gray-900 my-2' />
  </div>
  

  )
}

export default CartItem