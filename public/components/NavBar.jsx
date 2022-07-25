import { Box } from "@chakra-ui/react";
import React from "react";
import { getUserApp } from "../Storage/Storage";

function NavBar() {
  return (
    <div className="header-wrapper">
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            {getUserApp() ? (
              ""
            ) : (
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  All
                </a>
              </li>
            )}
            {getUserApp() ? (
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link active"
                  style={{ visibility: "hidden" }}
                ></a>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {" "}
                  Me{" "}
                </a>
              </li>
            )}
          </ul>
        </nav>
        <div className="header-logo">
          <a className="logo-link" href="index.html">
            <img
              className="logo-img"
              src="/src/assets/logo.svg"
              alt="bootcamp logo"
            />
            <h2 className="logo-text">My Daily Bootcamp</h2>
          </a>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
