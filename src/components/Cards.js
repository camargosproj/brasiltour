import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";


const Cards = () => {
    return ( 
        <div className="cards" id="cards">
            <h1>Check out these EPIC Destinations in Brazil!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="adventure-website/images/bahia-1.jpg" 
                            text="Explore the World to see whats going on out there!"
                            label="Chapada Diamantina - Bahia"
                            path="/products"
                        />
                        <CardItem 
                            src="adventure-website/images/maranhao-2.jpg" 
                            text="Explore the World to see whats going on out there!"
                            label="Lençois Maranhenses - Maranhão"
                            path="/services"
                        />
                       
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                                src="adventure-website/images/rio.jpg" 
                                text="Explore the World to see whats going on out there!"
                                label="Cristo Redentor - Rio de Janeiro"
                                path="/services"
                            />
                            <CardItem 
                                src="adventure-website/images/cataratas.jpg" 
                                text="Explore the World to see whats going on out there!"
                                label="Cataratas do Iguaçu - Paraná"
                                path="/services"
                            />
                            <CardItem 
                                src="adventure-website/images/genipabu.jpg" 
                                text="Explore the World to see whats going on out there!"
                                label="Dunas de Genipabu - Rio Grande do Norte"
                                path="/services"
                            />
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Cards;