import React from "react";
import Img from "../images/logo.png";
import "../components/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <img src={Img} alt="logo de Kasa" width={90} height={50}></img>
        <ul style={{ fontSize: 14 }}>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
