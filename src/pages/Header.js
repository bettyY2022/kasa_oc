import React from "react";
import Img from "../pages/logo.png";
import "../pages/pages.css"

export default function Header() {
    return (
       <div >
             <img src={Img} alt="logo de Kasa"></img>
       </div>
    );
 }