import React from "react";
import styles from "./Contact.module.scss";
import Button from "react-bootstrap/Button";
import {
  FaInstagram,
  FaTelegramPlane,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Title } from "../../components/layout/Title";

export const Contact = () => {
  return (
    <Container id="contact" className="mt-5">
      <Title title={"Contact me"}></Title>
      <div className={styles.contact}>
        <nav>
          <ul className="d-flex flex-column flex-md-row align-items-center justify-content-evenly text-center  h-100">
            <li>
              <Link>
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link to="https://web.telegram.org/z/#607558040">
                <FaTelegramPlane />
              </Link>
            </li>
            <li>
              <Link>
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/feed/">
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        </nav>
        <form action="">
          <input type="text" name="" id="" placeholder="email" />
          <input type="text" name="" id="" placeholder="subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="message"
          ></textarea>
          <Button variant="primary">Send message</Button>{" "}
        </form>
      </div>
    </Container>
  );
};
