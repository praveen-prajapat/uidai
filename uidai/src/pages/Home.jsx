// import React, { useRef, useCallback } from 'react';
// import Webcam from 'react-webcam';

// const Home = () => {
//   const webcamRef = useRef(null);

//   const capture = useCallback(() => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     // Do something with the captured image (e.g., display it or send it to a server)
//     console.log('Captured Image:', imageSrc);
//   }, [webcamRef]);

//   return (
//     <div>
//       <Webcam
//         audio={false}
//         height={720}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//         width={1280}
//       />
//       <button onClick={capture}>Capture Photo</button>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';  // Import your CSS file
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFingerprint } from 'react-icons/fa'; // You can use a fingerprint icon from a library like react-icons
import logo from '../assets/logo.png';
import Camera from './Camera.jsx';

const Home = () => {
  return (
    <div className="custom-container">
      {/* Translucent Platform */}
      <div className="custom-platform"></div>
      <div className="custom-content">
        <h1 className="custom-title">Your Fingerprint is Your Key</h1>
        <p className="custom-subtitle"></p>
        <div className="custom-fingerprint">
          <img
            src={logo} // Replace with your fingerprint image source
            alt="Fingerprint"
            className="custom-fingerprint-img"
          />
        </div>
        <p> </p>
        <Link to='/camera'>
        <button  className="custom-button">Authenticate</button>
        </Link>
        <footer className="custom-footer">
          <p>&copy; IIT Bombay, All rights reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;

