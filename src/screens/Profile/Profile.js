import React from 'react';
import { useSelector } from 'react-redux';
import styles from './profile.module.css';

function Profile() {
  const missions = useSelector((state) => state.mission);

  // Remove border when filtered array is empty
  const arr = missions.filter((mission) => mission.reserved);
  const styling = {
    border: arr.length === 0 ? 'none' : '1px solid #e3e3e3',
  };

  return (
    <div className={styles.profile_container}>
      <div className={styles.mission_container}>
        <h1>My Missions</h1>
        {/* display no missions joined when array is empty */}
        {arr.length === 0 && <p>No missions joined yet...</p>}
        <div style={styling}>
          {arr.map((name) => (
            <div className={styles.specific_mission} key={name.id}>
              <span>{name.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.rockets_container}>
        <h1>Rockets</h1>
      </div>

    </div>
  );
}

export default Profile;
