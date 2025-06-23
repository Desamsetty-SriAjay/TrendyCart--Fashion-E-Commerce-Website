import React, { useState,useContext,useRef,useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";



const Navbar = () => {
  const[visible,setVisible]=useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const{setShowSearch,getCartCount,token,navigate,setToken,setCartItems}=useContext(ShopContext);
  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };
  const dropdownRef = useRef(null);

  

 const handleProfileClick = () => {
    if (!token) {
      navigate("/login"); // If not logged in, navigate to login
    } else {
      setShowDropdown((prev) => !prev); // Toggle dropdown visibility
    }
  };

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);


useEffect(() => {
  if (token) {
    setShowDropdown(false);
  }
}, [token]);

  return (
    <div className="flex items-center justify-between py-5 font-medium ">
     <Link to={'/'}> <img src={assets.logo} className="w-[100px]" alt="logo" /></Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 transition-all duration-300 border-none h-[1.5px] bg-gray-700  hidden " />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTIONS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      
      <div className="flex items-center gap-6">
      <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
      <div className="group relative">
       <img 
        onClick={handleProfileClick}
        src={assets.profile_icon} 
        className="w-5 cursor-pointer" 
        alt="Profile" 
      />

      {/* Dropdown menu */}
    {token && showDropdown && (
  <div ref={dropdownRef} className="absolute dropdown-menu right-0 pt-4 z-50">
    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-600 rounded">
      <p onClick={() => navigate("/orders")} className="cursor-pointer hover:text-black">Orders</p>
      <hr />
      <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
      <hr />
    </div>
  </div>
)}
      </div>
      <Link to={'/cart'} className='relative'>
      <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
      <p className="absolute right-[-5px] bottom-[-5px] text-center w-4 leading-4 bg-black aspect-square rounded-full text-white text-[8px]">{getCartCount()}</p>
      </Link>
      <img onClick={()=>setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" alt="" />
      </div>
      {/* menu for small screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ?'w-full':'w-0'}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTIONS</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>

        </div>
      </div>
      </div>
  
  );
};

export default Navbar;
