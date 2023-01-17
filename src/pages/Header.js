import React from "react";
import Img from "../pages/logo.png";
import "../pages/pages.css"
import { Link } from "react-router-dom";

export default function Header() {
    return (
       <div className="header">
         <nav>
             <img src={Img} alt="logo de Kasa"></img>
             <ul>
               <li>
                  <Link to="/Home" >
                     Accueil
                  </Link>
               </li>
               <li>
                  <Link to="/About" >
                     A Propos
                  </Link>
               </li>
            </ul>
            </nav>
       </div>
    );
 }