import React, { useState } from "react";
import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const itemsPerSlide = 2; // Show 2 cards at a time

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide + itemsPerSlide < projects.length
        ? prevSlide + itemsPerSlide
        : 0
    );
  };

  const handlePrev = () => {
    setCurrentSlide(
      currentSlide - itemsPerSlide < 0
        ? Math.max(0, projects.length - itemsPerSlide)
        : currentSlide - itemsPerSlide
    );
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.slider}>
        <button onClick={handlePrev} className={styles.sliderButton}>
          &lt; 
        </button>

        <div className={styles.projects}>
          {projects
            .slice(currentSlide, currentSlide + itemsPerSlide)
            .map((project, id) => (
              <ProjectCard key={id} project={project} />
            ))}
        </div>

        <button onClick={handleNext} className={styles.sliderButton}>
           &gt;
        </button>
      </div>
    </section>
  );
};
