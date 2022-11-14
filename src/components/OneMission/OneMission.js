import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission, leaveMission } from '../../redux/missions/missions';
import styles from './onemission.module.css';

const OneMission = (props) => {
  const {
    name, description, id, reserved,
  } = props;

  const dispatch = useDispatch();

  return (
    <>
      <td className={styles.nameData}>{ name }</td>
      <td className={styles.onemission_description}>{ description }</td>
      <td className={styles.notmember}><span>Not A Member</span></td>
      <td className={styles.joinmission}>
        {
          !reserved ? (
            <button onClick={() => dispatch(joinMission(id))} type="button">Join Mission</button>
          )
            : (
              <button onClick={() => dispatch(leaveMission(id))} type="button">Leave Mission</button>
            )
        }

      </td>
    </>
  );
};
OneMission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default OneMission;
