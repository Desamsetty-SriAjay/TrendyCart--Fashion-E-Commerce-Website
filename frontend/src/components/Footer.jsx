import { assets } from "../assets/assets"
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>At TrendyCart, we bring you the latest in fashion, offering a wide range of trendy clothing and accessories for men, women, and kids. Our collection is crafted for style, comfort, and quality, so you can look and feel your best every day. Explore our curated selection and enjoy shopping the latest trends from the comfort of your home.</p>
        </div>
        <div>
            <p className="text-xl font-medium mb-5 ">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
        <p className="text-xl font-medium mb-5 ">KEEP IN TOUCH</p>
        <ul className="flex flex-col gap-1 text-gray-600">
        <div className="flex gap-3 text-2xl">
        <RiInstagramFill/>
        <FaFacebook/>
        <FaYoutube/>
        </div>
            <li>+91 632-333-9868</li>
            <li>support@trendycart.com</li>
        </ul>
        </div>
        </div>
        <div>
            <hr />
            <p className="py-5 text-sm text-center bg-gray-50">Copyright 2025@ TrendyCart.com - All Right Reserved. </p>
        </div>
    </div>
  )
}
export default Footer