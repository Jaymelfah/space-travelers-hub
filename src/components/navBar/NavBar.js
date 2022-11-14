import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navBar.module.css';

function NavBar() {
  return (
    <div>
      <div className={styles.navContainer}>
        <img src="planet.png" alt="logo" />
        <h1>Space Travelers&quot; Hub</h1>
      </div>
      <ul>
        <li>
          <Link to="/">Rockets</Link>
        </li>
        <li>
          <Link to="/missions"> Missions </Link>
        </li>

        <li>
          <Link to="/myprofile">My Profile</Link>

        </li>
      </ul>
    </div>
  );
}

export default NavBar;
