import { TOGGLE_DARKTHEME } from "../../Constants/actionTypes";

//Default state is light theme
let defaultState = {
  darkThemeEnabled: false,
};

//TOGGLE_DARKTHEME will switch the boolean value of darkThemeEnabled
const preferences = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_DARKTHEME:
      return { ...state, darkThemeEnabled: !state.darkThemeEnabled };
    default:
      return state;
  }
};
export default preferences;
