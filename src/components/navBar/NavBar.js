import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navBar.module.css';

function NavBar() {
  return (
    <div className={styles.navbar_wrapper}>
      <div className={styles.navContainer}>
        <img className={styles.navbar_img} src="planet.png" alt="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className={styles.navlinks}>
        <li>
          <NavLink className={styles.links} to="/">Rockets</NavLink>
        </li>
        <li>
          <NavLink className={styles.links} to="/missions"> Missions </NavLink>
        </li>

        <li>
          <NavLink className={styles.profilelinks} to="/myprofile">My Profile</NavLink>

        </li>
      </ul>
    </div>
  );
}

export default NavBar;
