import React,{useRef, useState} from "react";
import Webcam from 'react-webcam';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas'; 
import './capture.css';
import frame1 from '../assets/frames/cinnamon roll frame.png';
function Capture(){
    const location = useLocation();
    const selectedFrame = location.state?.frame;
    const stripRef = useRef(null);

    const webcamRef = useRef(null);
    const [photos, setPhotos] = useState([]);   

    function capturePhoto() {
        if (photos.length >= 3) return;
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
            setPhotos([...photos, imageSrc]);
        }
    }

    function retake() {
        setPhotos([]);
    }

    async function downloadStrip() {
        const canvas = await html2canvas(stripRef.current, { scale: 2 });
        const link = document.createElement("a");
        link.download = "photobooth.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    }

    return(
        <>
        <div className="main-grid">
            <div className="camera-grid">
                <h1 className="smile-txt">⊹ ࣪ ˖ Smile ⋆˚꩜｡</h1>
                <Webcam
                        ref={webcamRef}
                        audio={false}
                        mirrored={true}
                        screenshotFormat="image/jpeg"
                        videoConstraints={{
                        width: 300,
                        height: 300,
                        facingMode: "user",
                    }} className="vid"
                />
                <button className="capture-btn" onClick={capturePhoto}
                    disabled={photos.length >= 3}>{photos.length >= 3 ? "Done!" : `Capture (${photos.length}/3)`}</button>
                <button className="capture-btn" onClick={retake}>Retake</button>
            </div>
            <div className="frame-grid">
                <div className="frame-wrapper" ref={stripRef}>
                    {photos.map((photo, index) => (
                        <img
                            key={index}
                            src={photo}
                            className={`slot-photo slot-${index + 1}`}
                        />
                    ))}
                    <img src={selectedFrame || frame1} className="frame" />
                </div>
                <button className="download-btn" onClick={downloadStrip}>Download</button>
            </div>

        </div>
        
        </>
    );
};
export default Capture