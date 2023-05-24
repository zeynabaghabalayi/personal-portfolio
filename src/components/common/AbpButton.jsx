import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AbpButton.module.scss'

const AbpButton = ({ path, children }) => {
  return (
    <div className={styles.btn}>
      <Link to={path}>
        {children}
      </Link>
    </div>
  )
}

export default AbpButton