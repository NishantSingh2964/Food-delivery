import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from 'axios'

const Dashboard = ({url}) => {

  const [totalUsers, setTotalUsers] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [pendingOrder, setPendingOrder] = useState(0);
  const [recentOrders, setRecentOrders] = useState([]);

  const getDashbordData = async()=>{
    const res = await axios.get(url + '/api/dashboard/totalusers');
    setTotalUsers(res.data.data);

    const res1 = await axios.get(url + '/api/dashboard/totalrevenue');
    setTotalRevenue(res1.data.totalRevenue);

    const res2 = await axios.get(url + '/api/dashboard/totalitems');
    setTotalItems(res2.data.data);

    const res3 = await axios.get(url + '/api/dashboard/totalorders');
    setTotalOrders(res3.data.data.length);

    const res4 = await axios.get(url + '/api/dashboard/pendingorders');
    setPendingOrder(res4.data.pendingOrders);
  }

  const getRecentOrders = async ()=>{
    const res = await axios.get(url + '/api/dashboard/recentorders');
    console.log(res.data.data);
    setRecentOrders(res.data.data);
  }

  useEffect(()=>{
    getDashbordData();
    getRecentOrders();
  },[])

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>

      {/* ================= STAT CARDS ================= */}
      <div className="stats-container">
        <div className="stat-card">
          <h4>Total Orders</h4>
          <p>{totalOrders}</p>
        </div>

        <div className="stat-card revenue">
          <h4>Total Revenue</h4>
          <p>₹{totalRevenue}</p>
        </div>

        <div className="stat-card users">
          <h4>Total Users</h4>
          <p>{totalUsers}</p>
        </div>

        <div className="stat-card foods">
          <h4>Total Foods</h4>
          <p>{totalItems}</p>
        </div>

        <div className="stat-card pending">
          <h4>Pending Orders</h4>
          <p>{pendingOrder}</p>
        </div>
      </div>

      {/* ================= RECENT ORDERS ================= */}
      <div className="recent-orders">
        <h3>Recent Orders</h3>

        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Items</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {recentOrders.map((order) => (
              <tr key={order._id}>
                <td>
                  {order.address.firstName} {order.address.lastName}
                </td>
                <td>{order.items.length}</td>
                <td>₹{order.amount}</td>
                <td>
                  <span className={`status ${order.status.replace(/\s/g, "").toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Dashboard;
