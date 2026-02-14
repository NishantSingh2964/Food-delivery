import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import {Route, Routes} from 'react-router-dom'
import Add from "./pages/Add/Add"
import List from "./pages/List/List"
import Order from "./pages/Order/Order"
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from "./pages/Dashboard/Dashboard.jsx"
import Login from "./pages/Login/Login.jsx"
import { useState } from "react"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx"


function App() {
  const url = "https://food-delivery-ten-chi-34.vercel.app";
  const [token, setToken] = useState(localStorage.getItem("adminToken") || "");

  return (
    <>
  <ToastContainer />

  <Routes>
    <Route path="/" element={<Login url={url} setToken={setToken} />} />

    <Route
      path="/*"
      element={
        <ProtectedRoute token={token}>
          <>
            <Navbar setToken={setToken} />
            <hr />
            <div className="app-content">
              <Sidebar />
              <Routes>
                <Route path="/dashboard" element={<Dashboard url={url} />} />
                <Route path="/add" element={<Add url={url} />} />
                <Route path="/list" element={<List url={url} />} />
                <Route path="/orders" element={<Order url={url} />} />
              </Routes>
            </div>
          </>
        </ProtectedRoute>
      }
    />
  </Routes>
</>

  )
}

export default App
