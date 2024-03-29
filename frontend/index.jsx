import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { deleteSession, postSession, postUser } from "./util/session_api_util";
import configureStore from "./store/store";
import { login } from "./actions/session_actions";
import { createRoot } from "react-dom/client";
import Root from "./components/root";
import {
  getAlbum,
  getAllAlbums,
  getArtistAlbums,
  getSellingAlbums,
} from "./actions/album_actions";
import { getFeatureArtists } from "./actions/artist_actions";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");
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

  window.getSellingAlbums = getSellingAlbums;

  window.getAlbum = getAlbum;
  window.getArtistAlbums = getArtistAlbums;
  window.getFeatureArtists = getFeatureArtists;

  window.getAllAlbums = getAllAlbums;

  // testing end

  const root = createRoot(container);

  // ReactDOM.render(<Root store={store} />, root);
  root.render(<Root store={store} />);
});

// <StrictMode></StrictMode>
