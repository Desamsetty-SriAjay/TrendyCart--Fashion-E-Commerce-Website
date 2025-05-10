import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size,setSize]=useState('');

  const fetchProductData = async () => {
    const foundProduct = products.find(item => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  // Render fixed 4 stars
  const renderStars = () => {
    return (
      <div className="mt-2 flex items-center gap-2 text-lg">
        {[1, 2, 3, 4].map(i => (
          <span key={i} className="text-yellow-500">★</span>
        ))}
        <span className="text-gray-300">★</span>
        <span className="text-gray-500 text-sm">(4.0)</span>
      </div>
    );
  };

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex flex-col sm:flex-row gap-12'>
        {/* main product image */}
        <div className="flex-1">
          <img className='w-[90%] h-[90%]' src={image} alt="" />
        </div>

        {/* product info */}
        <div className="flex-1">
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>

          {/* Static Ratings */}
          {renderStars()}

          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={`cursor-pointer border py-2 px-4 bg-gray-100 ${item===size?'border-orange-500':''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
  onClick={() => addToCart(productData._id, size)}
  className="mt-6 bg-black text-white px-8 py-3 text-sm rounded hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
>
  ADD TO CART
</button>
  

          <hr className='mt-8 sm:w-4/5' />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
    </div>
  ) : <div className="opacity-0"></div>;
};

export default Product;
