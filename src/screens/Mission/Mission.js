import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OneMission from '../../components/OneMission/OneMission';
import { getMissions } from '../../redux/missions/missions';
import styles from './mission.module.css';

const Mission = () => {
  const missions = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <table className={styles.mission_table_wrapper}>
      <thead>
        <tr className={styles.mission_table_row}>
          <th className={styles.mission_table_head}>Mission</th>
          <th className={styles.mission_table_head}>Description</th>
          <th className={styles.mission_table_head}>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((item) => (
          <tr className={styles.mission_table_rows} key={item.id}>
            <OneMission name={item.name} description={item.description} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Mission;
