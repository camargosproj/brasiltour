import React ,{useState,useEffect, useRef} from "react";
import "../App.css";
import Cards from "../components/Cards";
import HeroSection from "../components/HeroSection";
import ScrollToTop from "../components/ScrollToTop";
import Contact from "./Contact";
import About from "./About";


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
            <Contact />
            <About />
        </>
     );
}
 
export default Home;