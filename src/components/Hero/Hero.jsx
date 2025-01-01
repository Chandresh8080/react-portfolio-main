import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, it's Me</h1>
        <h1 className={styles.title}>Chandresh <br/>Baldaniya</h1>
        <p className={styles.description}>And i'm a MERN STACK Developer
        </p>
        <a href="https://drive.google.com/file/d/1MXZRpmwfyQ2zmlwUQhtbPWJtXk1gssLb/view?usp=drive_link" className={styles.contactBtn}>
        Resume
        </a>
        
      </div>
      <img
        src={getImageUrl("hero/Photo.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
