import { combineReducers } from "redux";
import albumsReducer from "./albums_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  albums: albumsReducer,
});

export default entitiesReducer;
