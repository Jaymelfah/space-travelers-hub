import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_ROCKETS = 'space-travelers-hub/rockets/GET_ROCKETS';

const initialState = [];

// Calling API
const getRocketsFromAPI = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = response.json();
  const rockets = data.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
    flickr_images: rocket.flickr_images,
  }));
  return rockets;
};

// Action creator
export const getRockets = createAsyncThunk(GET_ROCKETS, async () => {
  try {
    const rockets = await getRocketsFromAPI();
    return rockets;
  } catch (error) {
    return console.log(error);
  }
});

// Reducer
const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...action.payload];
    default:
      return state;
  }
};

export default rocketsReducer;
