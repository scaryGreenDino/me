import React from "react";
import "../App.css";
import {  Link } from "react-router-dom";
var Nav = () => {
  return (
    <div className="middle-left-content">
      <div className="nav-container">
        <Link className="navigation" to="./">
          home
        </Link> 
        <Link className="navigation" to="./music">
          music
        </Link>
      </div>
    </div>
  );
};
export default Nav;
