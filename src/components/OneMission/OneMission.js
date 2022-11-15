import React from 'react';
import PropTypes from 'prop-types';
import styles from './onemission.module.css';

const OneMission = (props) => {
  const { name, description } = props;

  return (
    <>
      <td className={styles.nameData}>{ name }</td>
      <td className={styles.onemission_description}>{ description }</td>
      <td className={styles.notmember}><span>Not A Member</span></td>
      <td className={styles.joinmission}><button type="button">Join Mission</button></td>
    </>
  );
};
OneMission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default OneMission;
