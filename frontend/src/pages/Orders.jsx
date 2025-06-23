import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { products, currency } = useContext(ShopContext);

  useEffect(() => {
    const fetchOrders = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      const token = localStorage.getItem('token');
    
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/order/user-orders`,
        { userId: user?._id },
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        }
      );
      

    
      if (res.data.success) {
        setOrders(res.data.orders);

      }
    };
    
    fetchOrders();
  }, []);

  const handleDeleteOrder = async (orderId) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/api/order/delete`,
    { orderId },
    {
      headers: {
        token,
      },
    }
  );

  if (res.data.success) {
    setOrders((prev) => prev.filter((o) => o._id !== orderId));
  } else {
    alert("Failed to delete order: " + res.data.message);
  }
};

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Your Orders</h2>
      {orders.map((order, i) => (
        <div key={i} className="border p-4 mb-6">
          <p className="mb-2">Order ID: {order._id}</p>
          <p className="mb-2">Date: {new Date(order.createdAt).toLocaleString()}</p>
          <p className="mb-2">Status: {order.paymentStatus}</p>
          <div className="mt-2">
            {order.items.map((item, idx) => {
              const product = products.find(p => p._id === item.itemId);
              return (
                <div key={idx} className="flex items-center gap-4 mb-2">
                  <img src={product?.image[0]} alt="" className="w-12 h-12" />
                  <p>{product?.name}</p>
                  <p>Size: {item.size}</p>
                  <p>Qty: {item.quantity}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-2 font-bold">Total: {currency}{order.totalAmount}</p>
          <button
  className="mt-3 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
  onClick={() => handleDeleteOrder(order._id)}
>
  Delete Order
</button>
        </div>
      ))}
    </div>
  );
};

export default Orders;
