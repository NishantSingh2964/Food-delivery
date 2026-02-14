import React, { useState, useEffect } from "react";
import "./Order.css";
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from "../../assets/assets.js";

const Order = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");

      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      toast.error("Server error");
    }
  };
  

  const statusHandler = async (orderId, newStatus) => {
    try {
      const response = await axios.post(url + "/api/order/status", {
        orderId,
        status: newStatus,
      });

      if (response.data.success) {
        toast.success("Status updated");
        fetchAllOrders();
      } else {
        toast.error("Status update failed");
      }
    } catch (error) {
      toast.error("Server error");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order">
      <h3>Orders</h3>

      <div className="order-list">
        {orders.length === 0 && (
          <p className="no-orders">No orders found</p>
        )}

        {orders.map((order) => {
          const totalItems = order.items.reduce(
            (total, item) => total + item.quantity,
            0
          );

          return (
            <div key={order._id} className="order-item">

              {/* LEFT SECTION */}
              <div className="order-left">
                <img src={assets.parcel_icon} alt="parcel" />

                <div className="order-details">
                  <p className="order-food">
                    {order.items
                      .map((item) => `${item.name} x ${item.quantity}`)
                      .join(", ")}
                  </p>

                  <p className="order-name">
                    {order.address?.firstName} {order.address?.lastName}
                  </p>

                  <p className="order-address">
                    {order.address?.street}, {order.address?.city}
                  </p>

                  <p className="order-phone">
                    {order.address?.phone}
                  </p>
                </div>
              </div>

              {/* ITEMS COUNT */}
              <div className="order-middle">
                Items : {totalItems}
              </div>

              {/* PRICE */}
              <div className="order-price">
                ${order.amount}
              </div>

              {/* STATUS */}
              <div className="order-status">
                <select
                  value={order.status}
                  onChange={(e) =>
                    statusHandler(order._id, e.target.value)
                  }
                >
                  <option value="Food Processing">
                    Food Processing
                  </option>
                  <option value="Out for delivery">
                    Out for delivery
                  </option>
                  <option value="Delivered">
                    Delivered
                  </option>
                </select>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Order;
