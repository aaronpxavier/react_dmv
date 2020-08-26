import { TOGGLE_DARKTHEME } from "../../Constants/actionTypes";

let defaultState = {
  darkThemeEnabled: false,
};

const preferences = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_DARKTHEME:
      return { ...state, darkThemeEnabled: !state.darkThemeEnabled };
    default:
      return state;
  }
};
export default preferences;
