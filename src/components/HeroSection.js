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
    return ( 
        <div className="hero-container">
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" goTo="/cards" buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button className="btns" goTo="/" onClick={handleVideo} buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER  <i className="fa fa-play"/>
                </Button>
            </div>
            <VideoPlay onClose={() => setShow(false)} show={show} />
        </div>
     );
}
 
export default HeroSection;