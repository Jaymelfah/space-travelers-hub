import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OneMission from '../../components/OneMission/OneMission';
import { getMissions } from '../../redux/missions/missions';
import styles from './mission.module.css';

let render = true;
const Mission = () => {
  const missions = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  // Do not render missions page when page navigates
  useEffect(() => {
    if (!render) {
      return;
    }
    render = false;
    dispatch(getMissions());
  }, [dispatch]);

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
            <OneMission
              id={item.id}
              name={item.name}
              description={item.description}
              reserved={item.reserved}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Mission;
