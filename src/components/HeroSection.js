import React, {useState} from "react";
import '../App.css';
import Button from '../components/Button';
import VideoPlay from "./VideoPlayer";
import './HeroSection.css';

const HeroSection = () => {
    const [show, setShow] = useState(false);

    const handleVideo = () => {
        setShow(!show);
    }

    const handleClick = () => {
        window.location.replace("/#cards");
    }
    if(!show){
    return ( 
        <div className="hero-container">
            <h1>BRASIL TOUR</h1>
            <p>Que tal conhecer o Brasil?</p>
            <div className="hero-btns">
                <Button className="btns" goTo="/#cards" buttonStyle='btn--outline' onClick={handleClick} buttonSize='btn--large'>ENCONTRAR DESTINO</Button>
                <Button className="btns" goTo="/adventure-website" onClick={handleVideo} buttonStyle='btn--primary' buttonSize='btn--large'>
                    ASSISTIR VIDEO  <i className="fa fa-play"/>
                </Button>
            </div>            
        </div>
     );
    }else{
        return(
            <div className="hero-container">
                <VideoPlay onClose={() => setShow(false)} show={show} />
            </div>
        )
    }
}
 
export default HeroSection;