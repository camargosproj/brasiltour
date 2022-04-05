import React ,{useState,useEffect, useRef} from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import ScrollToTop from "../ScrollToTop";
import Products from "./Products";
import Services from "./Services";


const Home = () => {  
    const [showScrollToTop, setScrollToTop] = useState(false);
    const scrollToNextSection = useRef(null);

    // Scroll to top when the user scrolls down
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setScrollToTop(true);
            } else {
                setScrollToTop(false);
            }
        });
    },[]); 
    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }
    // Scroll to next section
    const scrollToNext = () => {
        window.scrollTo({
            top: scrollToNextSection.current.offsetTop,
            behavior: "smooth"
        })
    }
    
    return ( 
        <>
            {showScrollToTop && <ScrollToTop scrollToTopFunction={scrollTop} />}
            <HeroSection scrollToNext={scrollToNext} />
            <Cards scrollToNextSection={scrollToNextSection} />
            <Products />
            <Services />
        </>
     );
}
 
export default Home;