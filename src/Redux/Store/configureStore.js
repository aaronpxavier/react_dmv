import { createStore, applyMiddleware } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import rootReducer from "../Reducers";

function configureStore(initialState) {
  const middlewares = [reduxImmutableStateInvariant(), thunk];

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
  console.log(store);
  return store;
}

export default configureStore;
