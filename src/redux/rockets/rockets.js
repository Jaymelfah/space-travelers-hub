const GET_ROCKETS = 'space-travelers-hub/rockets/GET_ROCKETS';

const initialState = [];

// Action creator
export const saveRockets = (payload) => ({
  type: GET_ROCKETS,
  payload,
});

// Reducer
const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return 'Rockets are here';
    default:
      return state;
  }
};

export default rocketsReducer;
