const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';
const initialState = [];

const getMissionsFromApi = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  const missionData = data.map((item) => ({
    id: item.mission_id,
    name: item.mission_name,
    description: item.description,
  }));
  return missionData;
};

export const getMissions = () => (async (dispatch) => {
  const missions = await getMissionsFromApi();
  dispatch({
    type: GET_MISSIONS,
    payload: missions,
  });
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default missionsReducer;
