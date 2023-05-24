// Import React modules
import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  // Dynamic Date Function
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className={styles.footer + " py-3"}>
      &copy; {getCurrentYear()} Zeynab Portfolio
    </footer>
  )
}

export default Footer