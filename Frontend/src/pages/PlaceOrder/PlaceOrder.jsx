import React, { useContext, useEffect, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MIN_ORDER_AMOUNT = 50;
const DELIVERY_FEE = 2;

const PlaceOrder = () => {
  const { getTotalCartAmmount, token, food_list, cartItems, url } =
    useContext(StoreContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();

    const subtotal = getTotalCartAmmount();
    const totalAmount = subtotal + DELIVERY_FEE;

    if (totalAmount < MIN_ORDER_AMOUNT) {
      alert(`Minimum order amount is ₹${MIN_ORDER_AMOUNT}`);
      return;
    }

    const orderItems = food_list
      .filter(item => cartItems[item._id] > 0)
      .map(item => ({
        _id: item._id,
        name: item.name,
        price: item.price,
        quantity: cartItems[item._id]
      }));

    if (orderItems.length === 0) {
      alert("Cart is empty");
      return;
    }

    const orderData = {
      address: data,
      items: orderItems,
      amount: totalAmount
    };

    try {
      const response = await axios.post(
        `${url}/api/order/place`,
        orderData,
        { headers: { token } }
      );

      if (response.data.success) {
        window.location.replace(response.data.session_url);
      } else {
        alert(response.data.message || "Order failed");
      }
    } catch (err) {
      console.error("ORDER ERROR:", err.response?.data || err);
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }
    else if(getTotalCartAmmount()=== 0){
      navigate('/cart');
    } 
  },[token])

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <div className="title">Delivery Information</div>

        <div className="multi-fields">
          <input required name="firstName" value={data.firstName} onChange={onChangeHandler} placeholder="First name" />
          <input required name="lastName" value={data.lastName} onChange={onChangeHandler} placeholder="Last name" />
        </div>

        <input required name="email" type="email" value={data.email} onChange={onChangeHandler} placeholder="Email" />
        <input required name="street" value={data.street} onChange={onChangeHandler} placeholder="Street" />

        <div className="multi-fields">
          <input required name="city" value={data.city} onChange={onChangeHandler} placeholder="City" />
          <input required name="state" value={data.state} onChange={onChangeHandler} placeholder="State" />
        </div>

        <div className="multi-fields">
          <input required name="zipcode" value={data.zipcode} onChange={onChangeHandler} placeholder="Zip code" />
          <input required name="country" value={data.country} onChange={onChangeHandler} placeholder="Country" />
        </div>

        <input required name="phone" value={data.phone} onChange={onChangeHandler} placeholder="Phone" />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>

          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>₹{getTotalCartAmmount()}</p>
          </div>

          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>₹{DELIVERY_FEE}</p>
          </div>

          <hr />

          <div className="cart-total-details">
            <b>Total</b>
            <b>₹{getTotalCartAmmount() + DELIVERY_FEE}</b>
          </div>

          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
