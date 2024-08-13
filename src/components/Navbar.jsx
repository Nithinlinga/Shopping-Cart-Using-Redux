import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoLogoChrome } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import logo from './logo.png'
import { useSelector } from 'react-redux';



const Navbar = () => {
  const {cart}=useSelector((state)=>state)
  return (
    <div>
    <nav className=' text-blue-50 max-w-6xl h-14 mx-auto   flex justify-between'>
      <NavLink to='/'>
      <div className='ml-5'>
          <span><img src={logo} width={50} height={50} alt='logo'/></span>
      </div>
      </NavLink>
        
        <div className='flex items-center font-medium text-slate-50 mr-5 space-x-6 '>
            <NavLink to='/'>
            <p>Home</p>
            </NavLink>
            <NavLink to='/cart'>
            <div
            className=' relative'
            ><FaShoppingCart className='text-2xl'/>
            {cart.length>0 &&
              <span
              className='absolute -top-1 -right-2 w-5 h-5 bg-green-600 text-xs flex justify-center
             items-center animate-bounce rounded-full '>{cart.length}</span>}
            </div>
            </NavLink>
            
        </div>
    </nav>
    </div>
  )
}

export default Navbar