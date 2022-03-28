import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

/* Button Styles */
const STYLES = ['btn--primary','btn--outline'];

/* Button Sizes */
const SIZES = ['btn--medium','btn--large'];

const Button = ({children, type, onClick, buttonStyle, buttonSize, goTo}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkbuttonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];
    return ( 
        <Link to={goTo} className={'btn-mobile'}>
            <button className={`btn ${checkButtonStyle} ${checkbuttonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
     );
}
 
export default Button;
