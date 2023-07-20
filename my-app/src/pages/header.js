import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="logo">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/"}
          style={{ textDecoration: "none", color: "#5762D5" }}
        >
          <img src="https://iili.io/QOYltf.md.png" style={{width:'160px', marginTop:'-20px', marginLeft:'20px'}}></img>
        </NavLink>
      </div>
      <div className="navBar">
        <li>
          <NavLink
            to={"/covid_stats"}
            style={{ textDecoration: "none", color: "#6E7DAB" }}
          >
            Covid Stats
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/country_stats"}
            style={{ textDecoration: "none", color: "#6E7DAB" }}
          >
            Country Stats
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about_us"}
            style={{ textDecoration: "none", color: "#6E7DAB" }}
          >
            About Us
          </NavLink>
        </li>
      </div>
    </div>
  );
};

export default Header;
