# 🛍️ TrendyCart - Fashion E-Commerce Web App 🛒

---

## 🚀 Project Overview

TrendyCart is a full-stack fashion e-commerce web application built with the **MERN Stack (MongoDB, Express.js, React.js, Node.js)** and styled using **TailwindCSS**. It includes a feature-rich user interface and a secure admin panel. Users can browse collections, filter and search products, add items to the cart, place orders, and authenticate using JWT. Admins can manage products and view customer orders.

---

## 🔥 Features

### 👤 User Side

* 🏠 **Home Page** – Showcases featured products.
* 🛍️ **Collection Page** – View all fashion items.
  * 🔍 **Search Bar** – Search products by name or keyword.
  * ➕ **Filter by Category** – Filter products by **Men**, **Women**, or **Kids**.
* 📞 **Contact Page** – A static page displaying an image and contact details (such as phone number and website info).
* 📱 **Responsive Navigation** –  
  * On smaller screens, the main navigation bar (Home, Collection, Contact) is hidden.  
  * A **sidebar menu** appears instead, providing access to Home, Collection, and Contact pages for mobile users.
* 🔐 **Login Page** – JWT-based authentication.
  * **User Authentication** – Users can log in, and their details will be stored in the database.
  * **Persistent Cart & Orders** – When users log out and log back in, their cart and previous orders are restored from the database.
* 🛒 **Add to Cart** – Users can add, remove, and **increase the quantity** of products in their cart.
  * **Cart Quantity** – Users can increase or decrease the quantity of each product in their cart, and these changes are reflected in the database.
* 📦 **Orders Page** – View past orders.
* 🔒 **Authenticated access for sensitive routes** – Ensures that users are logged in to access certain pages.

---

### 🔧 Admin Panel

* 🛠️ **Product Management** – Add new products via a secure form.
* 📃 **Product List** – View all products in the store and **delete products** if needed.
* 📬 **Orders** – View all customer orders (read-only).
* 🔐 **Admin Authentication** – Admin authentication using JWT for secure access.

---

## 🌐 Tech Stack

* **Frontend**: React.js, TailwindCSS
* **Backend**: Node.js, Express.js
* **Database**: MongoDB (Mongoose)
* **Authentication**: JSON Web Tokens (JWT)
* **Image Hosting**: Cloudinary

---

## 🧑‍💻 Author

**D. Sri Ajay**  
Full Stack Developer | MERN Stack | Passionate about building scalable web applications.

---





