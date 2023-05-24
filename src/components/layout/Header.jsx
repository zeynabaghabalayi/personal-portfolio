// Import React modules
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Scroll from "react-scroll";

// Import Bootstrap modules
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Import other npm modules
import { SiCodeigniter } from "react-icons/si";

const Header = () => {
  const ScrollLink = Scroll.ScrollLink;
  return (
    <Navbar className={styles.navbar} expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className={styles.navLink} as={Link} to="/">
          Zeynab
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* LEFT MAIN NAVS */}
          <Nav className="me-auto">
            <li>
              <a href="/#about" className={styles.navLink}>
                About Me
              </a>
            </li>
            <li>
              <a href="/#services" className={styles.navLink}>
                Services
              </a>
            </li>
            <li>
              <a href="/#project" className={styles.navLink}>
                Project
              </a>
            </li>
            <li>
              <a href="/#contact" className={styles.navLink}>
                Contact Me
              </a>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
