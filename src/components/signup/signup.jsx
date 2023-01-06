import React from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {

  const navigate = useNavigate();

//   const [captcha, setCaptcha] = React.useState(false);

  const [userDetails, setUserDetails] = React.useState({
    email: "",
    name: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(userDetails);
    // register flow complete, connect redux store remaining

    axios
      .post("https://e-mart-7352.herokuapp.com/register", userDetails)
      .then((res) => {
        console.log(res.data);
        alert("Register Successful");
        setUserDetails({
          email: "",
          name: "",
          phone: "",
          password: "",
        });
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        alert("Register Failed");
      });
  };

//   const handleCaptcha = () => {
//     setCaptcha(true);
//   };

  return (
    <div className="login">
      <p className="head">Search . Explore . Buy</p>

      <div className="box">
        <div className="flex1">
          <p>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              LOGIN
            </Link>
          </p>
          <p>SIGN UP</p>
        </div>

        <input
          className="inp"
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="User name"
        />
        <input
          className="inp"
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email"
        />

        <p className="ph">Mobile</p>
        <div className="phone">
          <input type="number" placeholder="+91" />
          <input type="number" name="phone" onChange={handleChange} />
        </div>

        <input
          className="inp"
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />

        <button onClick={handleSubmit} className="btn">
          Sign Up
        </button>
      </div>
    </div>
  );
};