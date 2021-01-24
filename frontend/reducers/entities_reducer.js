import { combineReducers } from "redux";
import albumsReducer from "./albums_reducer";
import artistsReducer from "./artists_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  albums: albumsReducer,
  artists: artistsReducer,
});

export default entitiesReducer;
