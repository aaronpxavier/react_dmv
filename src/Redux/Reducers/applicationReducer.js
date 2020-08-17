import {
  GET_APPLICATIONS,
  POST_APPLICATION,
} from "../../Constants/actionTypes";

const initialState = {
  applications: [],
  application: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_APPLICATIONS:
      return {
        ...state,
        applications: action.payload,
      };
    default:
      return state;
  }
}
