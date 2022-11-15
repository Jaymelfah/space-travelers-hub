import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_ROCKETS = 'space-travelers-hub/rockets/GET_ROCKETS';

const initialState = [];

// Calling API
const getRocketsFromAPI = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const rockets = data.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
    description: rocket.description,
    imgs: rocket.flickr_images,
  }));
  return rockets;
};

// Action creator
export const getRockets = createAsyncThunk(GET_ROCKETS, async () => {
  try {
    return await getRocketsFromAPI();
  } catch (error) {
    return console.log(error);
  }
});

// Reducer
const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ROCKETS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default rocketsReducer;
