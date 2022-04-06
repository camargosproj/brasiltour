import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";


const Cards = ({scrollToSection}) => {
    return ( 
        <div className="cards" ref={scrollToSection}>
            <h1>Venha conhecer lindas paisagens no Brasil!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="/brasiltour/images/bahia-1.jpg" 
                            text="Melhores destinos na Bahia!"
                            label="Chapada Diamantina - Bahia"
                            path="/products"
                        />
                        <CardItem 
                            src="/brasiltour/images/maranhao-2.jpg" 
                            text="Melhores destinos no Maranhão!"
                            label="Lençois Maranhenses - Maranhão"
                            path="/services"
                        />
                       
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                                src="/brasiltour/images/rio.jpg" 
                                text="Melhores destinos no Rio!"
                                label="Cristo Redentor - Rio de Janeiro"
                                path="/services"
                            />
                            <CardItem 
                                src="/brasiltour/images/cataratas.jpg" 
                                text="Melhores destinos no Paraná!"
                                label="Cataratas do Iguaçu - Paraná"
                                path="/services"
                            />
                            <CardItem 
                                src="/brasiltour/images/genipabu.jpg" 
                                text="Melhores destinos no Rio Grande do Norte!"
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