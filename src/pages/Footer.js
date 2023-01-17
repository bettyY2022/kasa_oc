import React from "react";
import logoFooter from "../pages/logoFooter.png";
import "../pages/pages.css"

export default function Footer() {
    return (
       <div >
          <div >
             <img src={logoFooter} alt="logo de Kasa"></img>
          </div>
          <p className="footer__text">© 2020 Kasa. All rights reserved</p>
       </div>
    );
 }
 