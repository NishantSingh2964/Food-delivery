# 🍽️ Food Delivery Platform (Full-Stack MERN Application)

A production-ready full-stack Food Delivery Web Application built using the MERN stack.  
The platform includes a customer-facing website and a fully functional admin dashboard for managing products, users, and orders.

Designed with scalability, clean UI, and real-world architecture principles.

---

## 🔗 Live Demo

🌐 Customer Website:  https://food-delivery-8ltl.vercel.app/  
🛠️ Admin Dashboard: https://food-delivery-qbb8.vercel.app/   

---

## 📸 Screenshots

### 👤 User Interface

#### 🏠 Home Page
![Home Page](https://github.com/NishantSingh2964/Food-delivery/blob/main/Frontend/public/Screenshot%202026-02-15%20121334.png)

#### 🍽️ Menu Page
![Menu Page](https://github.com/NishantSingh2964/Food-delivery/blob/main/Frontend/public/Screenshot%202026-02-15%20121408.png)

#### 🔐 Login / Registration Page
![Login Page](https://github.com/NishantSingh2964/Food-delivery/blob/main/Frontend/public/Screenshot%202026-02-15%20121512.png)

#### 🛒 Cart Page
![Cart Page](https://github.com/NishantSingh2964/Food-delivery/blob/main/Frontend/public/Screenshot%202026-02-15%20121550.png)

#### 💳 Checkout Page
![Checkout Page](https://github.com/NishantSingh2964/Food-delivery/blob/main/Frontend/public/Screenshot%202026-02-15%20121623.png)

#### 💳 Stripe Payment Integration
![Stripe Integration](https://github.com/NishantSingh2964/Food-delivery/blob/main/Frontend/public/Screenshot%202026-02-15%20121756.png)

#### 📦 My Orders Page
![My Orders Page](https://github.com/NishantSingh2964/Food-delivery/blob/main/Frontend/public/Screenshot%202026-02-15%20121853.png)

---

### 🛠️ Admin Panel

#### 🔐 Admin Login Page
![Admin Login](https://github.com/NishantSingh2964/Food-delivery/blob/main/Frontend/public/Screenshot%202026-02-15%20121941.png)

#### 📊 Admin Dashboard
![Admin Dashboard](https://github.com/NishantSingh2964/Food-delivery/blob/main/Frontend/public/Screenshot%202026-02-15%20122034.png)

---


## 📌 Project Overview

This application simulates a real-world food delivery system where:

- Customers can browse food items, add to cart, and place orders.
- Admins can manage inventory, track orders, and monitor business metrics.
- Backend APIs handle authentication, order processing, and database operations.

The project demonstrates strong understanding of:

- RESTful API design
- Authentication & Authorization
- CRUD operations
- File uploads
- Dashboard analytics
- Responsive UI/UX
- Deployment best practices

---

## 🏗️ System Architecture

Frontend (React) → Backend (Express API) → MongoDB Atlas  
Admin Panel (React) → Same Backend API  

- Client communicates with backend via Axios
- Backend validates & processes data
- MongoDB stores users, foods, and orders
- Images handled via Multer

---

## 🛠️ Tech Stack

### Frontend (User + Admin)
- React.js
- React Router
- Axios
- React Toastify
- CSS (Custom Styling)
- Vite

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Multer (Image Upload)
- JWT Authentication
- REST API Architecture

### Deployment
- Vercel (Frontend & Admin)
- MongoDB Atlas (Cloud Database)

---

## ✨ Key Features

### 👤 Customer Side
- Browse food items
- Category-based filtering
- Add to cart functionality
- Order placement
- Order status tracking
- Responsive design

### 🛠️ Admin Dashboard
- Add new food items with image upload
- Delete food items
- View all orders
- Update order status
- View dashboard analytics:
  - Total Orders
  - Total Revenue
  - Total Users
  - Total Foods
  - Pending Orders

---

## 📊 Dashboard Analytics

The admin dashboard dynamically fetches:

- Total registered users
- Total revenue generated
- Total food items available
- Total orders placed
- Pending orders
- Recent orders table

All statistics are calculated in real-time via backend API.

---

## 📁 Project Structure
food-delivery/

├── frontend/ # Customer-facing website

├── admin/ # Admin dashboard

├── backend/ # REST API server

└── README.md


---

## 🔐 Authentication

- JWT-based authentication
- Secure protected admin routes
- Token-based API access

---

## ⚙️ Local Setup Instructions

```bash
# Clone the repository
git clone https://github.com/NishantSingh2964/Food-delivery.git

# Backend Setup
cd backend
npm install

# Create .env file:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=4000

# Start server:
npm start

# Frontend Setup
cd frontend
npm install
npm run dev

# Admin setup
cd admin
npm install
npm run dev

```

## **📈 Performance & Design Highlights**
- Clean, modern UI
- Fully responsive layout
- Sticky sidebar & navbar
- Animated stat cards
- Optimized API structure
- Modular component architecture
- Reusable CSS structure

## **🧠 What This Project Demonstrates**
- Full-stack development capability
- REST API development
- Real-world dashboard logic
- File upload handling
- Cloud deployment
- Database schema design
- Clean component architecture

## **🧩 Future Improvements**
- Role-based admin permissions
- Sales charts with data visualization
- Order filtering & search








Frontend: https://food-delivery-8ltl.vercel.app/  
Admin: https://food-delivery-qbb8.vercel.app/  
Backend: https://food-delivery-ten-chi-34.vercel.app/
