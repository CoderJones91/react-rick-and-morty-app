import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark-opacity">
      <div className="container-fluid">
        <NavLink className="text-decoration-none navbar-brand" to="/">
          <h1 className="fs-2 m-1">
            <span role="img" aria-label="planet">&#128760;</span> Rick and Morty Wiki
            <span role="img" aria-label="rocket"> &#128640;</span>
          </h1>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <style jsx>
            {`
              button[aria-expanded="false"] > .close {
                display: none;
              }
              button[aria-expanded="true"] > .open {
                display: none;
              }
            `}
          </style>
          
          <i className="fa-solid fa-bars-staggered open text-light"></i>
          <i className="fa-solid fa-x close fw-bold text-light"></i>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Characters</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/episodes">Episodes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/location">Locations</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;