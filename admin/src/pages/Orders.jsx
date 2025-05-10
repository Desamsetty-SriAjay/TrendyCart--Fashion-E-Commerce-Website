import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const currency = "₹";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchOrdersAndProducts = async () => {
      try {
        const [ordersRes, productsRes] = await Promise.all([
          axios.get(`${backendUrl}/api/order/all`),
          axios.get(`${backendUrl}/api/product/list`)
        ]);

        if (ordersRes.data.success) {
          setOrders(ordersRes.data.orders);
        }

        if (productsRes.data.success) {
          setProducts(productsRes.data.products);
        }
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    fetchOrdersAndProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order, i) => (
          <div key={i} className="border p-4 mb-4">
            <p><strong>Order ID:</strong> {order._id}</p>
            <p><strong>User ID:</strong> {order.userId}</p>
            <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
            <p><strong>Status:</strong> {order.paymentStatus}</p>
            <div className="mt-2">
              {order.items.map((item, idx) => {
                const product = products.find(p => p._id === item.itemId);
                return (
                  <div key={idx} className="flex items-center gap-4 mb-2">
                    <img src={product?.image?.[0]} alt="" className="w-12 h-12" />
                    <p>{product?.name || "Product not found"}</p>
                    <p>Size: {item.size}</p>
                    <p>Qty: {item.quantity}</p>
                  </div>
                );
              })}
            </div>
            <p className="mt-2 font-bold">Total: {currency}{order.totalAmount}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
