import { createStore, applyMiddleware } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import reduxLogger from "redux-logger"
import rootReducer from "../Reducers";

function configureStore(initialState) {
  const middlewares = [reduxImmutableStateInvariant(), thunk, reduxLogger];

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
  
  return store;
}

export default configureStore;
