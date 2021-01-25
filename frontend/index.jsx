import React from "react";
import ReactDOM from "react-dom";
import { deleteSession, postSession, postUser } from "./util/session_api_util";
import configureStore from "./store/store";
import { login } from "./actions/session_actions";
import Root from "./components/root";
import { getAlbum, getArtistAlbums } from "./actions/album_actions";
import { getFeatureArtists } from "./actions/artist_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { id: window.currentUser.id },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // testing start
  window.postUser = postUser;
  window.postSession = postSession;
  window.deleteSession = deleteSession;
  window.login = login;

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.getAlbum = getAlbum;
  window.getArtistAlbums = getArtistAlbums;
  window.getFeatureArtists = getFeatureArtists;

  // testing end

  ReactDOM.render(<Root store={store} />, root);
});
