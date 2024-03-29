import { combineReducers } from "redux";
import albumsReducer from "./albums_reducer";
import artistsReducer from "./artists_reducer";
import AudioReducer from "./audio_reducer";
import genresReducer from "./genres_reducer";
import searchReducer from "./search_reducer";
import tracksReducer from "./tracks_reducer";
import usersReducer from "./users_reducer";
import utilReducer from "./util_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  albums: albumsReducer,
  artists: artistsReducer,
  tracks: tracksReducer,
  genres: genresReducer,
  util: utilReducer,
  search: searchReducer,
  audio: AudioReducer,
});

export default entitiesReducer;
