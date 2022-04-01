import React, {useState, useEffect}  from "react";
import {Link} from "react-router-dom";
import Button from '../components/Button';
import './NavBar.css';



const NavBar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    // Toggle the menu bar
    const handleClick = () => setClick(!click);
    // Close the mobile menu bar 
    const closeMobileMenu = () => setClick(false);
    // Show the mobile menu bar 
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    },[]);

    window.addEventListener("resize", showButton);
    return ( 
       <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/brasiltour" className="navbar-logo" onClick={closeMobileMenu}>
                    BRASILTOUR <i className="fa fa-car"></i>
                </Link>
                {/* Set menu bar for responsiveness  */}
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fa fa-times": "fa fa-bars"}></i>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/brasiltour" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                            Lugares
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                            Contato
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign-up
                        </Link>
                    </li>
                </ul>
                {/* Set button menu */}
                {button && <Button goTo="/" buttonStyle="btn--outline">SIGN UP</Button>}
            </div>
        </nav>  
       </>
    );
}
 
export default NavBar;