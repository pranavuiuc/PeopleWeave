import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
function Menu() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem 1rem",
        backgroundColor: "#ffffff",
        boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Link to="/">
        My Website
      </Link>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link
          to="/"
          style={{
            marginRight: "1rem",
            textDecoration: "none",
            color: "#333333",
            fontWeight: "bold",
          }}
        >
          Introduction
        </Link>
        <Link
          to="/data"
          style={{
            marginRight: "1rem",
            textDecoration: "none",
            color: "#333333",
            fontWeight: "bold",
          }}
        >
          Data
        </Link>
        <Link
          to="/contact"
          style={{
            marginRight: "1rem",
            textDecoration: "none",
            color: "#333333",
            fontWeight: "bold",
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}


export default Menu;