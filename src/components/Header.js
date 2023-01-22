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
          width: "85%",
        }}
      >
        <img src={Img} alt="logo de Kasa" width={90} height={50}></img>
        <ul style={{ fontSize: 14 }}>
          <li style={{ marginRight: 20 }}>
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
