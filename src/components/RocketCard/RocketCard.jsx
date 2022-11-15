import React from 'react';
import PropTypes, { string } from 'prop-types';
import styles from './rocketCard.module.css';

function RocketCard({ rocket }) {
  const { name, description, imgs } = rocket;
  return (
    <div className={styles.rocketCardContainer}>
      <img src={imgs[0]} alt="rocketImg" className={styles.rocketImg} />
      <div className={styles.rocketDetails}>
        <h5 className={styles.rocketTitle}>{name}</h5>
        <p className={styles.rocketDescription}>{description}</p>
        <button type="button" className={styles.reserveRocketBtn}>
          Reserve Rocket
        </button>
      </div>
    </div>
  );
}

RocketCard.propTypes = {
  rocket: PropTypes.objectOf(string).isRequired,
};

export default RocketCard;
