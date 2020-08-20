let defaultState = {
  applications: [],
};

const mainReducer = (state = defaultState, action) => {
  if (action.type === "GET_APPLICATIONS") {
    return {
      ...state,
      applications: action.applications,
    };
  } else {
    return {
      ...state,
    };
  }
};

export default mainReducer;
