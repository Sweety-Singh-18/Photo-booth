import React,{useState} from "react";
import './selection.css';
import { useNavigate } from 'react-router-dom';
import frame1 from '../assets/frames/cinnamon roll frame.png';
import frame2 from '../assets/frames/miffy frame.png';
import frame3 from '../assets/frames/hello kitty frame.png';

function FrontPhotobooth(){
    const [selectedFrame, setSelectedFrame]=useState(null);
    function SelectFrame(src){
        setSelectedFrame(src);     
    }
    const navigate = useNavigate();
    return(
        <>
        <div className="main-div">
            <div className="selection-title">
                <h1>⋆｡‧˚ʚ Select frame ִֶָɞ˚‧｡⋆</h1>
            </div>
            <div className="Frames-grid">

                    <img src={frame1} className="frame-1" onClick={()=>SelectFrame(frame1)}></img>
            
                    <img src={frame3} className="frame-3" onClick={()=>SelectFrame(frame3)}></img>
                
                    <img src={frame2} className="frame-2" onClick={()=>SelectFrame(frame2)}></img>
                
            </div>
            <button disabled={!selectedFrame} className="next-btn" onClick={() => navigate('/capture', { state: { frame: selectedFrame } })}>Next</button>
        </div>
        </>
    );
}
export default FrontPhotobooth