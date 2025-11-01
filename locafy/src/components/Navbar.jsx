import React from "react";
import { FaSearch, FaEnvelope, FaBell, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="flex items-center h-full">
        <h1 className="logo flex items-center h-full">Locafy</h1>
      </div>
      
      <div className="navbar-right">
        <div className="input-group">
          <span className="input-group-icon">
            <FaSearch size={14} />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
          />
        </div>

        <button className="nav-icon-btn">
          <FaEnvelope size={18} />
        </button>
        <button className="nav-icon-btn">
          <FaBell size={18} />
        </button>
        <button className="nav-icon-btn">
          <FaUser size={18} />
        </button>
      </div>
    </nav>
  );
}