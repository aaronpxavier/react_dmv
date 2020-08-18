import {
  GET_APPLICATIONS,
  POST_APPLICATION,
} from "../../Constants/actionTypes";

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  console.log("Reduction");
  switch (action.type) {
    case GET_APPLICATIONS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
