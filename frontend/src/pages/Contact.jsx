import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-16">
      <img
        src={assets.contactUs} // Replace with your actual image path
        alt="Contact Us"
        className="w-full max-w-md rounded-xl shadow-lg mb-8"
      />
      <div className="max-w-2xl text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-600">
          Welcome to TrendyCart – your one-stop destination for trendy, comfortable, and affordable fashion. 
          Whether you're shopping for kids, men, or women, we've got you covered with the latest styles and quality you can trust.
        </p>
        <p className="mt-4 text-gray-600">
          For any queries or support, feel free to reach us via email or visit our social media pages.
        </p>
        <p className="mt-6 text-gray-800 font-medium">Email: support@trendycart.com</p>
        <p className="text-gray-800 font-medium">Phone: +91 632-333-9868</p>
      </div>
    </div>
  );
};

export default Contact;
