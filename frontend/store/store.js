import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/root_reducer";
import thunk from "../middleware/thunk";
import logger from "redux-logger";

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    // applyMiddleware(thunk)
    applyMiddleware(thunk, logger)
  );
};

export default configureStore;
