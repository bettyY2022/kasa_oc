import React from "react";
import Img from "../images/logo.png";
import "../components/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <nav>
        <img src={Img} alt="logo de Kasa"></img>
        <ul>
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
