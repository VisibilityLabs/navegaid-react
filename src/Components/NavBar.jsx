import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/NavegaidLogo_White.png";
export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
      <div className="container px-5">
        <Link to="/">
          <img src={Logo} alt="Navegaid Logo" style={{ height: 50 }} />{" "}
          {/* Adjust the height as needed */}
        </Link>
        <button
          className="text-white navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="bi-list" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
            <li className="nav-item">
              <Link className="nav-link me-lg-3 text-white" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-lg-3 text-white" to="/mission">
                Mission
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-lg-3 text-white" to="/waitlist">
                Join The Waitlist
              </Link>
            </li>
          </ul>
          <button
            className="btn btn-primary btn-sm rounded-pill px-2 py-2 m-2 mb-lg-0"
            onclick="location.href='#apps'"
          >
            <span className="d-flex align-items-center">
              <Link to="/signup" className="small text-decoration-none text-white">Create new Account</Link>
            </span>
          </button>
          <button
            className="btn btn-sm rounded-pill px-2 py-2 m-2 mb-lg-0"
            onclick="location.href='#apps'"
            style={{backgroundColor:"rgb(202, 202, 228)"}}
          >
            <span className="d-flex align-items-center">
              <Link to="/login" className="small text-decoration-none ">Login</Link>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
