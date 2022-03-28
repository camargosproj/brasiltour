import React from "react";
import "./Footer.css";

const Footer = () => {
    return ( 
        <footer>
            <div className="footer-container">
                <div className="social-cards">
                    <i className="fa fa-facebook-square"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-youtube-play"></i>
                </div>
                
                <div className="created">
                    <ul>
                        <li>Contato</li>
                        <li>Contato</li>
                        <li>Contato</li>
                    </ul>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;