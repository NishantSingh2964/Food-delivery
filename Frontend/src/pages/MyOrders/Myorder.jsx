import React, { useContext, useEffect } from 'react'
import './Myorder.css'
import { useState } from 'react'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const Myorder = () => {

  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
    setData(response.data.data);
    console.log(response.data.data);
  }

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token])

  return (
    <div className='my-order'>
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => (
          <div key={order._id} className='my-orders-order'>
            <img src={assets.parcel_icon} alt="" />
            <p>
              {order.items
                .map(item => `${item.name} X ${item.quantity}`)
                .join(", ")}
            </p>
            <p>₹{order.amount}.00</p>
            <p><span>&#x25cf;</span> <b>{order.status}</b> </p>
            <button onClick={fetchOrders}>Track Order</button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Myorder
