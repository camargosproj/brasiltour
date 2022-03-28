import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const CardItem = (props) => {
    return ( 
        <>
            <li className="cards__item">
                <Link to={props.path} className="cards__item__link">
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Travel Image" className="cards__item__img"/>
                    </figure>
                    <div className="cards__item_info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
     );
}
 
export default CardItem;