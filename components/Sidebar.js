import React from 'react';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <svg
          className={styles.logoIcon}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 17l-5-5m0 0l5-5m-5 5h12"
          />
        </svg>
        <h1 className={styles.logoText}>V30</h1>
      </div>
      <nav>
        <a href="#" className={styles.navLink}>Dashboard</a>
        <a href="#" className={styles.navLink}>Brand Voice</a>
        <a href="#" className={styles.navLink}>Guardados</a>
        <a href="#" className={styles.navLink}>Configuración</a>
        <button className={styles.saveButton}>Guardar</button>
      </nav>
    </div>
  );
};

export default Sidebar;
