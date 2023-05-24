import React from "react";
import {
  FaReact,
  FaFigma,
  FaPaintBrush,
  FaNodeJs,
} from "react-icons/fa";

import styles from "./Services.module.scss";
export const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <h1>my service</h1>
      <section className="d-flex flex-column flex-lg-row algin-center justify-content-center">
        <div className=" display-3 col-11  col-lg-2 border  d-flex align-self-center justify-content-center">
          <FaReact />
        </div>
        <div className=" display-3 col-11  col-lg-2 border d-flex  f align-self-center  justify-content-center ">
          <FaFigma />
        </div>
        <div className=" display-3  col-11  col-lg-2 border  d-flex align-self-center justify-content-center">
          <FaPaintBrush></FaPaintBrush>
        </div>
        <div className=" display-3 col-11  col-lg-2 border  d-flex align-self-center justify-content-center">
          <FaNodeJs></FaNodeJs>
        </div>
      </section>
    </section>
  );
};
