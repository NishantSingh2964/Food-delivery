import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import './Login.css';
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const Login = ({ url, setToken }) => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url + "/api/user/admin-login", data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("adminToken", response.data.token);
        toast.success("Login Successful");
        navigate('/dashboard');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Login Failed");
    }
  };

  return (
    <div
      className="login-popup"
      style={{ backgroundImage: `url(${assets.background_img})` }}
    >
      <form className="login-popup-container" onSubmit={onSubmitHandler}>

        <div className="login-popup-title">
          <h2><span>Admin Login</span></h2>
        </div>

        <div className="login-popup-inputs">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={onChangeHandler}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={onChangeHandler}
            required
          />
        </div>

        <button type="submit">Login</button>

      </form>
    </div>
  );

};

export default Login;
