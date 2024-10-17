import React, { useState } from "react";
import "../Components/LoginStyle.css";
import { navigate, useNavigate } from "react-router-dom";
export default function Login() {
  let navigate = useNavigate();
  const [data, setData] = useState({
    userName: "",
    password: "",
  });
  function handleChange(e) {
    e.preventDefault();
    setData({ ...data, [e.target.id]: e.target.value });
    // console.log(data);
  }
  function dataSubmit(e) {
    e.preventDefault();
    if (data.userName === "ash" && data.password === "ash") {
      // alert("Login Successfully");

      let credential = JSON.stringify(data);
      localStorage.setItem("data", credential);
      navigate("/admin");
    } else {
      alert("Invalid");
    }
  }

  return (
    <div>
      <form action="">
      <div className="Login-container">
        <div className="inner">
          <h1>Login</h1>
          <span>
            UserName:
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              value={data.userName}
              name=""
              id="userName"
              placeholder="Username"
            />
          </span>
          <span>
            Password:
            <input
              onChange={(e) => handleChange(e)}
              type="password"
              value={data.password}
              name=""
              id="password"
              placeholder="Password"
            />
          </span>
          <span>
            <button onClick={(e) => dataSubmit(e)} className="login-btn">
              Login
            </button>
          </span>
        </div>
      </div>
      </form>
    </div>
  );
}
