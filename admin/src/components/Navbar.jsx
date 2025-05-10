import React from 'react'
import assets from '../assets/assets.js'
const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <div>
        <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
        <span className='bolder text-medium'>Admin Panel</span>
        </div>
        <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar