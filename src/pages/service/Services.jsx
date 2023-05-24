import React from "react";
import {
  FaReact,
  FaFigma,
  FaPaintBrush,
  FaNodeJs,
} from "react-icons/fa";
import { Title } from "../../components/layout/Title";
import "aos/dist/aos.css";
import AOS from "aos";
import styles from "./Services.module.scss";


export const Services = () => {
  AOS.init();
  return (
    <section id="services" className={styles.services}>
      <Title title={"My Service"}></Title>
      <section className="d-flex flex-column flex-lg-row algin-center justify-content-center">
        <div
          className=" display-3 col-11  col-lg-2 border  d-flex align-self-center justify-content-center"
          data-aos="fade-right"
        >
          <FaReact />
        </div>
        <div
          className=" display-3 col-11  col-lg-2 border d-flex  f align-self-center  justify-content-center"
          data-aos="fade-right"
        >
          <FaFigma />
        </div>
        <div
          className=" display-3  col-11  col-lg-2 border  d-flex align-self-center justify-content-center"
          data-aos="fade-left"
        >
          <FaPaintBrush></FaPaintBrush>
        </div>
        <div
          className=" display-3 col-11  col-lg-2 border  d-flex align-self-center justify-content-center"
          data-aos="fade-left"
        >
          <FaNodeJs></FaNodeJs>
        </div>
      </section>
    </section>
  );
};
