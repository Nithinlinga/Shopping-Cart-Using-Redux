import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="px-4 py-6">
      <div>
        {
          cart.length > 0 ? 
          (
            <div className='flex flex-col md:flex-row w-full md:w-11/12 mx-auto justify-center'>
              <div className='w-full md:w-1/2 mb-6 md:mb-0'>
                {cart.map((item, index) => (
                  <CartItem key={item.id} item={item} itemIndex={index} />
                ))}
              </div>
              <div className='flex flex-col md:ml-8 h-full'>
                <div className='mb-4'>
                  <div className='text-green-700 font-bold uppercase'>Your Cart</div>
                  <div className='text-green-600 font-bold text-2xl uppercase'>Summary</div>
                  <p>
                    <span className='text-gray-700 font-semibold'>Total Items: {cart.length}</span>
                  </p>
                </div>
                <div className='mt-auto'>
                  <p className='text-gray-700 font-semibold mb-3'>Total Amount: ${totalAmount.toFixed(2)}</p>
                  <button className='bg-green-700 w-full md:w-[250px] text-white font-bold rounded-md h-[40px]'>Checkout Now</button>
                </div>
              </div>
            </div>
          ) : 
          (
            <div className='flex justify-center items-center flex-col'>
              <h1 className='text-lg font-semibold mb-4'>Cart is Empty</h1>
              <Link to={"/"}>
                <button className='bg-green-600 text-white rounded-2xl uppercase py-2 px-4'>Shop Now</button>
              </Link>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Cart;
