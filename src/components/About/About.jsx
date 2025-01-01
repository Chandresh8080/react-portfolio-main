import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        
        
        <ul className={styles.aboutItems}>
          <br/>
        <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              <p>
              Aspiring Software Engineer with expertise in web development and full-stack technologies. Skilled in React.js,
Node.js, and database management. Adept at building responsive and dynamic websites,ensuring
performance optimization and exceptional user experience.
              </p>
            </div>
          </li>
          
          <li className={styles.aboutItem}>
            
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
