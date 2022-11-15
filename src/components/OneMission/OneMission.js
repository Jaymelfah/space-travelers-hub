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
      {reserved && <td className={styles.member}><span>ACTIVE MEMBER</span></td>}
      {!reserved && <td className={styles.notmember}><span>NOT A MEMBER</span></td>}
      <td className={styles.joinmission}>
        {
          !reserved ? (
            <button className={styles.joinbtn} onClick={() => dispatch(joinMission(id))} type="button">Join Mission</button>
          )
            : (
              <button className={styles.leavebtn} onClick={() => dispatch(leaveMission(id))} type="button">Leave Mission</button>
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
