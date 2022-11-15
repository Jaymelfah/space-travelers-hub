import React from 'react';
import styles from './rocketCard.module.css';

function RocketCard() {
  return (
    <div className={styles.rocketCardContainer}>
      <img src="" alt="rocketImg" className={styles.rocketImg} />
      <div>
        <h5 className={styles.rocketTitle}>Rocket Name</h5>
        <p className={styles.rocketDescription}>Rocket description</p>
        <button type="button" className={styles.reserveRocketBtn}>Reserve Rocket</button>
      </div>
    </div>
  );
}

export default RocketCard;
