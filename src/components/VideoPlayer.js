import React from "react";
import "./VideoPlayer.css";


const VideoPlayer = ({onClose, show}) => {
    if(!show) {
        return null;
    }  
    return ( 
        <div className="videoPlay-container">   
            <i className="fa fa-times" onClick={onClose}></i>         
            <video  src="brasiltour/videos/turismo.mp4" controls></video>
        </div>
    )
    
}
 
export default VideoPlayer;