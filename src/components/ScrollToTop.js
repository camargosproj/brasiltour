import React  from "react";
import "./ScrollToTop.css";


const ScrollToTop = ( {scrollToTopFunction}) => {
    return ( 
        <>
            <div className="scroll-to-top" onClick={scrollToTopFunction}>
                <i className="fa fa-arrow-circle-up"></i>
            </div>
        </>
     );
}
 
export default ScrollToTop;