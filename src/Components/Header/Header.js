import "./Header.css";
import React from "react";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import Usefirebase from "../../Hooks/Usefirebase";
import UseAuth from "../../context/UseAuth";

const Header = () => {
  const { user, Logout } = UseAuth();
  return (
    <div>
      <div className="NavBrand">
        <img src={logo} alt="" />
      </div>
      <div className="header">
        <div className="router">
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/order">Order Review</NavLink>
          <NavLink to="/inventory">Manage Invertory</NavLink>
          <NavLink to="/shipment">ShipingPage</NavLink>
          <NavLink to="/regester">Regester</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
        <span style={{ color: "white", fontWeight: "bold" }}>
          {user?.displayName}
        </span>
        {user.email && (
          <button onClick={Logout} className="btn-login">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
