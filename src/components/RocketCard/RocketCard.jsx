import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes, { number, string } from 'prop-types';
import { reservedRocket, canceledRocket } from '../../redux/rockets/rockets';
import styles from './rocketCard.module.css';

function RocketCard({ rocket }) {
  const {
    name,
    description,
    imgs,
    id,
  } = rocket;
  const dispatch = useDispatch();
  return (
    <div className={styles.rocketCardContainer}>
      <img src={imgs[0]} alt="rocketImg" className={styles.rocketImg} />
      <div className={styles.rocketDetails}>
        <h5 className={styles.rocketTitle}>{name}</h5>
        <p className={styles.rocketDescription}>
          {rocket.reserved && <span className={styles.reservedBadge}>Reserved</span>}
          {description}
        </p>
        {!rocket.reserved && (
          <button
            type="button"
            className={styles.reserveRocketBtn}
            onClick={() => dispatch(reservedRocket(id))}
          >
            Reserve Rocket
          </button>
        )}
        {rocket.reserved && (
          <button
            type="button"
            className={styles.cancelRocketBtn}
            onClick={() => dispatch(canceledRocket(id))}
          >
            Cancel Reservation
          </button>
        )}
      </div>
    </div>
  );
}

RocketCard.propTypes = {
  rocket: PropTypes.objectOf(string, number).isRequired,
};

export default RocketCard;
