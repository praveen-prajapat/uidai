import React, { useEffect,useState } from 'react';
import styles from './camera.module.css';
import animations from './animations.module.css';
import { Link } from 'react-router-dom';
import four from '../assets/4.jpg'

const Camera = () => {
  useEffect(() => {
    const video = document.getElementById(styles.webcam);

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          video.srcObject = stream;
        })
        .catch((error) => {
          console.error("Error accessing webcam:", error);
        });
    } else {
      alert("Sorry, your browser does not support getUserMedia.");
    }
  }, []);
  const [isToggled, setToggled] = useState(false);

  // Function to toggle the parameter
  const toggleParameter = () => {
    setToggled((prevToggled) => !prevToggled);
  };


  return (
    <div className={styles.background}>
      <div className={`${styles.content} ${animations.fadeIn}`}>
        <p style={{fontSize:'50px'}}>Capture you fingers one by one</p>
        <div className={`${styles.webcamContainer} ${animations.zoomIn} ${animations.shadowPulse}`}>
          <video id={styles.webcam} autoPlay playsInline></video>

          {/* Container for the squares and buttons */}
  
          <div className={styles.squareButtonContainer}>
            <div className={styles.square}>
            {isToggled && (
  <img
    src={four}
    alt="Image Description"
    style={{ position: 'relative', width: '144px', height: '195px' }}
  />
)}
              {/* Button below the first square */}
              <button onClick={toggleParameter} className={styles.squareButton}>Capture</button>
            </div>
            <div className={styles.square}>
              {/* Button below the second square */}
              {/* <img src={four} style={{position:'relative',width:'144px',height:'195px'}}/> */}
              <button className={styles.squareButton}>Capture</button>
            </div>
            <div className={styles.square}>
              {/* Button below the third square */}
              {/* <img src={four} style={{position:'relative',width:'144px',height:'195px'}}/> */}
              <button className={styles.squareButton}>Capture</button>
            </div>
            <div className={styles.square}>
              {/* Button below the fourth square */}
              {/* <img src={four} style={{position:'relative',width:'144px',height:'195px'}}/> */}
              <button className={styles.squareButton}>Capture</button>
            </div>
          </div>
          </div>


        <div style={{ position: 'relative', left: '300px' }}>
          <Link to='/'>
          <button className={styles.custombutton}>Home Page</button>
          </Link>
          <Link to='/processing'>
          <button className={styles.custombutton}>Processing Page</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Camera;
