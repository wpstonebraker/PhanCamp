import { combineReducers } from "redux";
import albumsReducer from "./albums_reducer";
import artistsReducer from "./artists_reducer";
import genresReducer from "./genres_reducer";
import tracksReducer from "./tracks_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  albums: albumsReducer,
  artists: artistsReducer,
  tracks: tracksReducer,
  genres: genresReducer,
});

export default entitiesReducer;
