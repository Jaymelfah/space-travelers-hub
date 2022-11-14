import React from 'react';
import styles from './navBar.module.css';
import NavOptions from './NavOptions/NavOptions';

function NavBar() {
  return (
    <>
      <div className={styles.navContainer}>navBar</div>
      <NavOptions />
    </>
  );
}

export default NavBar;
