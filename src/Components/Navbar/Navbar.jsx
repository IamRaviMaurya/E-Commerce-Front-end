import React, { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/nav_dropdown.png";
import nav_menu from "../Assets/menu.png";


const Navbar = () => {
  const { getTotalCartItem } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdownToggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Shopper</p>
      </div>
      <img
        onClick={dropdownToggle}
        src={nav_menu}
        alt=""
        className="nav-dropdown"
      />
      <ul ref={menuRef} className="nav-menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mens"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Men
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/women"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Women
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/kids"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Kid
          </NavLink>
        </li>
      </ul>
      <div className="nav-login-cart">
        <NavLink to="/login">
          <button>Login</button>
        </NavLink>
        <div className="cart-container">
          <NavLink to="/cart">
            <img src={cart_icon} alt="Cart" />
          </NavLink>
          <span className="cart-count">{getTotalCartItem()}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
