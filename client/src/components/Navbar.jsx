/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = ({ id }) => {
  const [searchActive, setSearchActive] = useState(false);
  const inputRef = useRef(null);

  const activateSearch = () => {
    setSearchActive(true);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  };

  const deactivateSearch = () => {
    setSearchActive(false);
  };

  return (
    <nav className="travel-navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-logo">
          Wanderlust
        </a>
      </div>

      <div className="navbar-right">
        {searchActive ? (
          <input
            type="text"
            placeholder="Search..."
            className="navbar-search"
            ref={inputRef}
            onBlur={deactivateSearch}
          />
        ) : (
          <span className="search-icon" onClick={activateSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
        )}
        <a href="/login" className="navbar-link">
          Login
        </a>
        <a href="/signup" className="navbar-button">
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
