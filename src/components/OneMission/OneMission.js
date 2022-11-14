import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission } from '../../redux/missions/missions';
import styles from './onemission.module.css';

const OneMission = (props) => {
  const {
    name, description, id,
  } = props;

  const dispatch = useDispatch();

  return (
    <>
      <td className={styles.nameData}>{ name }</td>
      <td className={styles.onemission_description}>{ description }</td>
      <td className={styles.notmember}><span>Not A Member</span></td>
      <td className={styles.joinmission}>
        <button onClick={() => dispatch(joinMission(id))} type="button">Join Mission</button>
      </td>
    </>
  );
};
OneMission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  // reserved: PropTypes.bool.isRequired,
};

export default OneMission;
