import React from "react";
import Img from "../pages/logo.png";
import { Link } from "react-router-dom";
import "../pages/pages.css"

export default function Header() {
    return (
       <div >
          <nav>
             <img src={Img} alt="logo de Kasa"></img>
             <ul>
                <li>
                   <Link  >
                      Accueil
                   </Link>
                </li>
                <li>
                   <Link >
                      A Propos
                   </Link>
                </li>
             </ul>
          </nav>
       </div>
    );
 }