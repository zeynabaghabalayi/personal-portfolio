import React from "react";
import styles from "./About.module.scss";
import { Title } from "../../components/layout/Title";
const About = () => {
  return (
    <div className={styles.About} id="about">
      <Title title={"About Me"}></Title>
      <p>
      I am 25-year-old. My educational background includes obtaining an Associate degree in Software Engineering from the Technical and Vocational University in Iran. I possess a strong passion for both creating and designing websites, and currently, I am pursuing studies in IT to specialize in front and back-end web development at Holmesglen.
      </p>
    </div>
  );
};

export default About;
