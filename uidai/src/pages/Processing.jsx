import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './processing.module.css';
import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import three from '../assets/3.jpg'
import four from '../assets/4.jpg'
import rotatingImage from '../assets/rotate.png';

const AnimatedSection = ({ children }) => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });

  return <animated.div style={props}>{children}</animated.div>;
};

const Processing = () => {
  return (
    <div className={styles.app}>
       
      <div className={styles.background}></div>
      <div className={styles.content}>
        <AnimatedSection>
          <div className={styles.section}>
            <img src={one} alt="Fingerprint 1" />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className={styles.section}>
            <img src={two} alt="Fingerprint 2" />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className={styles.section}>
            <img src={three} alt="Fingerprint 3" />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className={styles.section}>
            <img src={four} alt="Fingerprint 4" />
          </div>
        </AnimatedSection>
      </div>
      <div className={styles.textLink}>We are processing and checking if you are a scammer or not</div>
    </div>
  );
};

export default Processing;
